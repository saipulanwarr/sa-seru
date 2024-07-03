import { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as ImagePicker from "expo-image-picker";

import { Colors } from "@/constants/Colors";
import { Gap, Button } from "@/components";

const Upload = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage2(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    params.image = image;
    params.image2 = image2;

    router.push({
      pathname: "Detail",
      params,
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Gap height={10} />
        <Button title="+ Foto Selfi" onPress={() => pickImage()} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.content}>
        <Gap height={10} />
        <Button title="+ Foto Ktp" onPress={() => pickImage2()} />
        {image2 && <Image source={{ uri: image2 }} style={styles.image} />}
      </View>

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    justifyContent: "center",
    width: 200,
    height: 170,
    marginTop: 10,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 30,
  },
});

export default Upload;
