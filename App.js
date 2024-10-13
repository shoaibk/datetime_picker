import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";

export default function AddPersonScreen() {
  const [dob, setDob] = useState("");

  return (
    <SafeAreaView>
      <DatePicker
        onSelectedChange={(selectedDate) => {
          setDob(selectedDate);
          console.log("Date: ", selectedDate);
        }}
        mode="calendar"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
