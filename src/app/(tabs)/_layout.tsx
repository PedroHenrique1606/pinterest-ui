import { Tabs } from "expo-router";
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons"
import { theme } from "@/theme";
import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import bottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet";

export default function TabLayout(){
    const  BottomSheetRef= useRef<BottomSheet>(null)

    const handleBottomSheetOpen = () => BottomSheetRef.current?.expand()
    const handleBottomSheetClose = () => BottomSheetRef.current?.snapToIndex(0)

    return(
        <View style={{ flex:1 }}>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.gray[700],
                tabBarStyle: {
                    backgroundColor: theme.colors.black,
                    borderBlockColor: theme.colors.black,
                }
            }}>
                <Tabs.Screen  
                name="index" 
                options={{
                    tabBarIcon: ({size, color}) => <Foundation name="home" size={size} color={color} />

                }}/>
                <Tabs.Screen  
                name="search"
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="search" size={size} color={color} />

                }} />
                <Tabs.Screen  
                name="menu"
                options={{
                    tabBarIcon: ({size, color}) => <FontAwesome5 name="plus" size={size} color={color} />

                }}  listeners={() => ({
                    tabPress: (event) => {
                        event.preventDefault()
                        handleBottomSheetOpen()
                    },
                })}/>
                <Tabs.Screen  
                name="messages"
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="chatbubble-ellipses" size={size} color=  {color} />

                }} />
                <Tabs.Screen  
                name="profile" 
                options={{
                    tabBarIcon: ({color}) => <Avatar 
                    selected={color==theme.colors.white} 
                    source={{uri:"https://github.com/PedroHenrique1606.png"}} />
                }}/>
            </Tabs>
            <Menu ref={BottomSheetRef} onClose={handleBottomSheetClose} />
        </View>

    )
}