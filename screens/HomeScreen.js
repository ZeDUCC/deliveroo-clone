import { View, Text, Image, TextInput, TextInputBase, TextInputComponent } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import { SafeAreaView } from 'react-native';
import {UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, ServerStackIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon} from "react-native-heroicons/outline"
import { Use } from 'react-native-svg';
 
 const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <SafeAreaView style={tw`bg-white pt-5`}>
            <Text style={tw`text-red-500`}>

                {/* HEADER */}

                <View style={tw`flex-row pb-3 items-center mx-4 space-x-5`}>
                    <Image source={{uri: 'https://links.papareact.com/wru'}} style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`} />

                    <View style={tw`pl-2 flex-1`}>
                        <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
                        <Text style={tw`font-bold text-xl`}>Current Location
                        <ChevronDownIcon size={20} color="00CCBB"/></Text>
                    </View>

                    <UserIcon size={35} color="#00CCBB"/>
                </View>

                {/* SEARCH BAR */}

                <View>
                    <View style={tw`flex-row flex-1 bg-gray-200 p-3`}>
                        <MagnifyingGlassIcon color="#00CCBB"/>
                        <TextInput placeholder='Restaurants and cuisines' keyboardType='default' style={tw`pl-2`} />
                    </View>

                    <AdjustmentsVerticalIcon color="#00CCBB"/>
                </View>
            </Text>
        </SafeAreaView>
    )
 }
 
 export default HomeScreen

 