import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* [ISSUE: Native Stack Navigation Crash]
        
        현재 Expo Go(New Architecture 강제 활성화)와 expo-router/stack 간의 
        타입 불일치로 인해 앱 실행 시 크래시가 발생함.
        
        - 에러 로그: TypeError: expected dynamic type 'boolean', but had type 'string'
        - 원인: Fabric(New Arch)이 네이티브 UI 프로퍼티를 엄격하게 검사하는데, 
               현재 설정이나 의존성 버전에서 충돌이 발생함.
        
        [임시 해결책]
        네이티브 스택 기능(헤더, 애니메이션 등)을 사용하는 <Stack> 대신,
        단순히 화면 컴포넌트만 교체해주는 <Slot>을 사용하여 에러를 우회함.
        추후 개발 환경(Prebuild)이 안정화되면 다시 <Stack>으로 복구 필요.
      */}
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});