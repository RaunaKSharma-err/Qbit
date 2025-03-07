import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/inputFeilds";
import CustomButton from "@/components/customButton";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    
  };

  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="flex-1 w-full justify-center items-center">
        <View className="flex-1 w-full ">
          <Image
            source={images.signUpCar}
            resizeMode="contain"
            className="w-full h-[300px]"
          />
          <Text className="absolute bottom-5 left-8 text-3xl font-bold">
            Create Your Account
          </Text>
        </View>
        <View className="flex-1 w-full mx-5 gap-2">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            containerStyle="p-2 bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 mx-3 h-[60px]"
            value={form.username}
            onChangeText={(value) => setForm({ ...form, username: value })}
            iconStyle="h-7 w-7 mr-3"
            labelStyle="m-3 text-xl ml-8"
            inputStyle="w-[50%]"
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            containerStyle="p-2 bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 h-[60px] mx-3"
            iconStyle="h-7 w-7 mr-3"
            labelStyle="m-3 text-xl ml-8"
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            containerStyle="p-2 bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 mx-3 h-[60px]"
            iconStyle="h-7 w-7 mr-3"
            labelStyle="m-3 text-xl ml-8"
          />
        </View>
        <CustomButton
          title="SignUp"
          className="mx-2 w-[90%] mt-8 h-16"
          onPress={handleSignUp}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
