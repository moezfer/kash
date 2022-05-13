import React, { useContext } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import Text from "@kaloraat/react-native-text";
import { AuthContext } from "../../context/auth";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import SearchBar from "../auth/SearchBar";
import SearchBar from "react-native-dynamic-search-bar";

const HeaderTabs = () => {
  const [state, setState] = useContext(AuthContext);

  const signOut = async () => {
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={signOut}>
        {/* <FontAwesome5 name="sign-out-alt" size={25} color="#000" /> */}
        
      </TouchableOpacity>
      <SearchBar
    borderRadius={10}
    height={30}
    backgroundColor="#c0c0c0"
  placeholder=" Search here"
  onPress={() => alert("onPress")}
  onChangeText={(text) => console.log(text)}
/>
    </SafeAreaView>
  );
};

export default HeaderTabs;
