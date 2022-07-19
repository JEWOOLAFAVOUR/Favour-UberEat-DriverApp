import { useRef } from "react";
import {View, Text} from 'react-native'
import BottomSheet from "@gorhom/bottom-sheet";

const OrdersScreen = () => {
    const bottomSheetReef = useRef(null); 
    return(
        <View style={{backgroundColor: 'blue', flex: 1}}>
            <BottomSheet ref={bottomSheetReef} index={1}
            snapPoints={['12%', '95%']}>
                <View style={{flex: 1}}>
                    <Text>Hello</Text>
                </View>
            </BottomSheet>
        </View>
    )
}

export default OrdersScreen;