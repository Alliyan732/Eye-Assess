import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Vission Assessments Screens
import VisionAssessmentHome from './src/screens/VisionAssessments/VisionAssessmentsHome';


const Stack = createNativeStackNavigator();

function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"VisionAssessmentsHome"}>
          {/* Vission Assessments */}
          <Stack.Screen name="VisionAssessmentsHome" component={VisionAssessmentHome} options={{ title: "Vision Assessments" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
