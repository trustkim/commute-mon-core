import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function RoleSelectionScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 상단: 운전자 */}
      <TouchableOpacity 
        style={[styles.half, styles.driverBg]}
        activeOpacity={0.9} // 터치 시 깜빡임 효과 부드럽게
        onPress={() => router.push('/driver')}
      >
        <View style={styles.contentContainer}>
          {/* 경찰관 대신 직관적인 버스 이모지 사용 */}
          <Text style={styles.emoji}>🚍</Text>
          <Text style={styles.label}>운전자 모드</Text>
          <Text style={styles.subLabel}>오늘도 안전 운전하세요!</Text>
        </View>
      </TouchableOpacity>

      {/* 하단: 탑승자 */}
      <TouchableOpacity 
        style={[styles.half, styles.passengerBg]}
        activeOpacity={0.9}
        onPress={() => router.push('/passenger')}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.emoji}>🙋‍♀️</Text>
          <Text style={[styles.label, styles.darkText]}>탑승자 모드</Text>
          <Text style={[styles.subLabel, styles.darkSubText]}>내 셔틀 위치 확인하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  half: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center', // 이모지와 텍스트를 수직 가운데 정렬
  },
  driverBg: { backgroundColor: '#3B82F6' },
  passengerBg: { backgroundColor: '#FFFFFF' },
  
  // 스타일 정의
  emoji: { 
    fontSize: 120, // 이모지 크기 (아주 큼)
    marginBottom: 20, // 텍스트와의 간격
  },
  label: { 
    fontSize: 42, // 제목 폰트
    fontWeight: 'bold', 
    color: 'white',
    marginBottom: 10,
  },
  subLabel: {
    fontSize: 22, // 부제목
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '600',
  },
  
  // 탑승자용 다크 테마 텍스트
  darkText: { color: '#1F2937' },
  darkSubText: { color: '#374151' },
});