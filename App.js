import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Vission Assessments Screens
import VisionAssessmentHome from './src/screens/VisionAssessments/VisionAssessmentsHome';
import VisionAcuityInfo from './src/screens/VisionAssessments/VisionAcuityInfo';
import VisionAcuityTest from './src/screens/VisionAssessments/VisionAcuityTest';
import ColorBlindInfo from './src/screens/VisionAssessments/ColorBlindInfo';
import ColorBlindTest from './src/screens/VisionAssessments/ColorBlindTest';
import ContrastSensitivityInfo from './src/screens/VisionAssessments/ContrastSensitivityInfo';
import ContrastSensitivityTest from './src/screens/VisionAssessments/ContrastSensitivityTest';
import AstigmatismInfo from './src/screens/VisionAssessments/AstigmatismInfo';

const Stack = createNativeStackNavigator();

function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"VisionAssessmentsHome"}>
          {/* Vission Assessments */}
          <Stack.Screen name="VisionAssessmentsHome" component={VisionAssessmentHome} options={{ title: "Vision Assessments" }}/>
          <Stack.Screen name="VisionAcuityInfo" component={VisionAcuityInfo} options={{ title: "Vision Acuity Test" }}/>
          <Stack.Screen name="VisionAcuityTest" component={VisionAcuityTest} options={{ title: "Vision Acuity Test" }}/>
          <Stack.Screen name="ColorBlindInfo" component={ColorBlindInfo} options={{ title: "Color Blind Test" }}/>
          <Stack.Screen name="ColorBlindTest" component={ColorBlindTest} options={{ title: "Color Blind Test" }}/>
          <Stack.Screen name="ContrastSensitivityInfo" component={ContrastSensitivityInfo} options={{ title: "Contrast Sensitivity Test" }}/>
          <Stack.Screen name="ContrastSensitivityTest" component={ContrastSensitivityTest} options={{ title: "Contrast Sensitivity Test" }}/>
          <Stack.Screen name="AstigmatismInfo" component={AstigmatismInfo} options={{ title: "Astigmatism Test" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
