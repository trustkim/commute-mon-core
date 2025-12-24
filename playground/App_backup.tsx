import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // 1. 지도를 조종할 리모컨(Ref) 만들기
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      // 2. 권한 요청
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치 추적 권한을 허용해주세요!');
        return;
      }

      // 3. 현재 위치 가져오기
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      // 4. 위치를 찾았으면 지도를 그쪽으로 이동시키기 (핵심!)
      if (mapRef.current) {
        mapRef.current.animateToRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.01, // 숫자가 작을수록 확대됨 (0.0922 -> 0.01)
          longitudeDelta: 0.01,
        }, 1000); // 1000ms(1초) 동안 부드럽게 이동
      }
    })();
  }, []);

  // 처음에 잠깐 보여줄 기본 위치 (서울)
  const initialRegion = {
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} // 리모컨 연결
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true} // 내 위치 파란 점 표시
        provider={PROVIDER_GOOGLE}
      >
        {/* 내 위치에 빨간 핀도 하나 꽂아보기 */}
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="현재 위치"
            description="여기 계시는군요!"
          />
        )}
      </MapView>
      
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>
          {errorMsg ? errorMsg : (location ? "내 위치 찾기 성공! 📍" : "위치 찾는 중...")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  statusBox: {
    position: 'absolute',
    top: 60, // 아이폰 노치 고려해서 조금 더 내림
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  statusText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  }
});