import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default Layout = () => {
  const [Fontloaded, ErrorFont] = useFonts({
    "DMBold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DMMedium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DMRegular": require("../assets/fonts/DMSans-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (Fontloaded || ErrorFont) {
      await SplashScreen.hideAsync();
    }
  }, [Fontloaded, ErrorFont]);

  if (!Fontloaded && !ErrorFont) {
    return null;
  }
  return <Stack onLayout={onLayoutRootView} />;
};
