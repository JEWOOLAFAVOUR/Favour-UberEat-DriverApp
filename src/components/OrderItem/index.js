import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import orders from '../../../assets/data/orders.json';
import { Entypo } from '@expo/vector-icons';

// const order = orders[0];

const OrderItem = ({order}) => {
  return (

      <View style={{flexDirection: 'row', 
      borderColor: '#3fc060', margin: 10,
      borderWidth: 2, borderRadius: 12,
      justifyContent: 'space-between'}}>
        <Image source={{
          uri: order.Restaurant.image
        }} style={{width: '25%', height: '100%',
         borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10}}/>
      <View style={{marginLeft:10, flex: 1, paddingVertical: 5}}>
        <Text style={{
          fontSize: 18, fontWeight: '500'
        }}>{order.Restaurant.name}</Text>
        <Text style={{color: 'grey'}}>{order.Restaurant.address}</Text>
        <Text style={{marginTop: 10}}>Delivery Details:</Text>
        <Text style={{color: 'grey'}}>{order.User.name}</Text>
        <Text style={{color: 'grey'}}>{order.User.address}</Text>
      </View>
      <View style={{padding: 5,backgroundColor: '#3fc060', borderBottomRightRadius: 10,
          borderTopRightRadius: 10, justifyContent: 'center'}}>
      <Entypo name='check' size={30} color='white'
        style={{marginLeft: 'auto'}}/>
        </View>
      </View> 

  );
}

export default OrderItem;
const styles = StyleSheet.create({

});
