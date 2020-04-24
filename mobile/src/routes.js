import  React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const AppStack = createStackNavigator();



import LogoTitleFeed from './pages/Feed/header'
import Feed from './pages/Feed'
import New from './pages/New'




export default function Routes() {
    
    
    return (
      
        <NavigationContainer>
            <AppStack.Navigator >

                <AppStack.Screen name="Feed" 
                component={Feed} 
                options={
                    { 
                    header: props => <LogoTitleFeed {...props} />,
                }}
                
                    
                    />
                <AppStack.Screen name="New" 
                component={New} 
                options={
                    { 
                    headerTitle: 'Nova publicação',
                    headerTitleAlign: 'center',
                }}
               
                />
                
            </AppStack.Navigator>
        </NavigationContainer>

       

    );
}