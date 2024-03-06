import { Pressable, Text } from "react-native";
import { MenuButtonProps } from "./menubutton";
import { styles } from "./styles";
import { FontAwesome } from  '@expo/vector-icons'
import { theme } from "@/theme";

export function MenuButton({title, icon}: MenuButtonProps){
    return <Pressable style={styles.container}>
        <FontAwesome 
        name={icon}  
        size={32} 
        style={styles.icon} 
        color={theme.colors.white}/>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
}