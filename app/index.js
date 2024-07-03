import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import { useRouter, Stack } from "expo-router";

import { Colors } from "@/constants/Colors";
import { Input, Button } from "@/components";

const initialValues = {
  first_name: "",
  last_name: "",
  biodata: "",
  provinsi: "",
  kota: "",
  kecamatan: "",
  kelurahan: "",
};

const Home = () => {
  const router = useRouter();

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    try {
      router.push({
        pathname: "Upload",
        params: { ...values },
      });
    } catch (error) {}
    actions.setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <>
              <Input
                label="First Name"
                placeholder="First Name"
                value={values.first_name}
                onChangeText={handleChange("first_name")}
              />
              <Input
                label="Last Name"
                placeholder="Last Name"
                value={values.last_name}
                onChangeText={handleChange("last_name")}
              />
              <Input
                label="Biodata"
                placeholder="Biodata"
                value={values.biodata}
                onChangeText={handleChange("biodata")}
              />
              <Text style={styles.text}>Provinsi</Text>
              <Picker
                selectedValue={values.provinsi}
                onValueChange={handleChange("provinsi")}
              >
                <Picker.Item label="Jawa Barat" value="1" />
                <Picker.Item label="Jawa Timur" value="2" />
                <Picker.Item label="Jawa Tengah" value="3" />
              </Picker>
              <Text style={styles.text}>Kota</Text>
              <Picker
                selectedValue={values.kota}
                onValueChange={handleChange("kota")}
              >
                <Picker.Item label="Bogor" value="1" />
                <Picker.Item label="Bandung" value="2" />
                <Picker.Item label="Surabaya" value="3" />
              </Picker>
              <Text style={styles.text}>Kecamatan</Text>
              <Picker
                selectedValue={values.kecamatan}
                onValueChange={handleChange("kecamatan")}
              >
                <Picker.Item label="Batutulis" value="1" />
                <Picker.Item label="Bondongan" value="2" />
                <Picker.Item label="Empang" value="3" />
              </Picker>
              <Text style={styles.text}>Kelurahan</Text>
              <Picker
                selectedValue={values.kelurahan}
                onValueChange={handleChange("kelurahan")}
              >
                <Picker.Item label="Bubulak" value="1" />
                <Picker.Item label="Cilendek" value="2" />
                <Picker.Item label="Loji" value="3" />
              </Picker>
              <View style={styles.button}>
                <Button
                  title="Submit"
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollview: {
    marginHorizontal: 20,
  },
  text: { marginTop: 20 },
  button: {
    justifyContent: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});

export default Home;
