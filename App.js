import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Vission Assessments Screens
import VisionAssessmentHome from './src/screens/VisionAssessments/VisionAssessmentsHome';
import VisionAcuityInfo from './src/screens/VisionAssessments/VisionAcuityInfo';
import VisionAcuityTest from './src/screens/VisionAssessments/VisionAcuityTest';
const Stack = createNativeStackNavigator();

function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"VisionAssessmentsHome"}>
          {/* Vission Assessments */}
          <Stack.Screen name="VisionAssessmentsHome" component={VisionAssessmentHome} options={{ title: "Vision Assessments" }}/>
          <Stack.Screen name="VisionAcuityInfo" component={VisionAcuityInfo} options={{ title: "Vision Acuity Test" }}/>
          <Stack.Screen name="VisionAcuityTest" component={VisionAcuityTest} options={{ title: "Vision Acuity Test" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
