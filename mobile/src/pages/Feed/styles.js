import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    header:
    {
        
        paddingLeft: '30%',
        paddingTop: Constants.statusBarHeight + 30,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        resizeMode: 'contain',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        elevation: 2,
        
    },

    headerTitle:
    {
        resizeMode: 'contain',
        width: '60%', 
       
    },

    headerCameraButton:{
        flex: 0,
        marginRight: 20,   
        
    },

    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',

    },

    feedItem:{
        marginTop: 30,

    },

    feedItemHeader:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    name:{
        fontSize: 14,
        color: '#000',
    },

    place:{
        fontSize: 12,
        color: '#666',
        marginTop: 2,


    },

    feedImage:{
        width: '100%',
        height: 400,
        marginVertical: 15,
    },

    feedItemFooter: {
        paddingHorizontal: 15,
    },

    actions: {
        flexDirection: 'row',
    },

    action:{
        marginRight: 8,
    },

    likes:{
        marginTop: 15,
        fontWeight: 'bold',
        color: '#000',

    },

    description:{
        lineHeight: 18,
        color: '#000',

    },

    hashtags:{
        color: '#7159c1'
    }

  
  })

  export default styles;