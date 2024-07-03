import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Detail = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Detail;
