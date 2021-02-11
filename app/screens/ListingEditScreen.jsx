import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppText from "../components/common/AppText";
import CategoryPickerItem from "../components/common/CategoryPickerItem";
import Screen from "../components/common/Screen";

import {
  AppForm as Form,
  AppFormField as Field,
  AppFormPicker as Picker,
  SubmitButton as Button,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(100000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "bars",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "futbol-o",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },

  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book",
    label: "Books",
    value: 8,
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.text}>New Listing Form</AppText>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Field maxLength={255} fieldName="title" placeholder="Title" />
        <View style={styles.fieldContainer}>
          <Field
            keyboardType="numeric"
            maxLength={8}
            width="48%"
            fieldName="price"
            placeholder="Price"
          />

          <Picker
            items={categories}
            numberOfColumns={3}
            icon="bars"
            width="48%"
            fieldName="category"
            placeholder="Category"
            PickerItemComponent={CategoryPickerItem}
          />
        </View>
        <Field
          maxLength={255}
          multiline
          numberOfLines={3}
          fieldName="description"
          placeholder="Description"
        />
        <Button buttonName="Submit" />
      </Form>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ListingEditScreen;
