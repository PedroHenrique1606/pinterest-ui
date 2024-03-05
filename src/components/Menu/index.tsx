import { View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";

export const Menu = forwardRef<BottomSheet, MenuProps> (({ onClose }, ref) => {
    return(
        <BottomSheet ref={ref} index={0} snapPoints={[0.01, 230]}>
            <View>
                <FontAwesome name="close" size={24} onPress={onClose}/>
                <Text>Comece a criar agora</Text>
            </View>
        </BottomSheet>
    )
})