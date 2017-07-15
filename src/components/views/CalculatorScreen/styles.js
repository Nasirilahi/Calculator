import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colorConstants';

const styles = StyleSheet.create({
   container: {
    flex: 1,
    borderTopColor:COLORS.white,
    borderTopWidth:1
  },
  headerTitle:{
    color:COLORS.white,
    fontWeight:'700',
    fontSize:18,
  },
  headerStyle:{
    backgroundColor:COLORS.backgroundLight,
  },
   gridRow: {
        flexDirection: 'row',
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#fff',
        borderLeftWidth: 1,
        borderLeftColor: '#fff'
    },
    clearGridRow:{
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderColor:COLORS.white,
      borderWidth:1,
      flex:0.50,
    },
    inputBar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginBottom:50,
    },
    value: {
        textAlign: 'right',
        flex: 1,
        backgroundColor: 'transparent',
        padding: 10,
        paddingTop: 20,
        fontSize: 32,
        color: '#fff'
    },
})

export default styles;