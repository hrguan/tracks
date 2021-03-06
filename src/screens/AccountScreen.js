import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} >
      <Text style={styles.text}>Account Setting</Text>
      <Spacer>
          <Button 
          buttonStyle={{ backgroundColor:'pink'}} 
          title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name="account" size={24} color="black" />
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    paddingTop: 30,
    fontSize: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
});

export default AccountScreen;
