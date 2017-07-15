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
})

export default styles;