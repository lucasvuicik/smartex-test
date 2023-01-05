import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  //   TextInput,
  Text,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Appbar, useTheme } from "react-native-paper";
import uuid from "react-native-uuid";

import { CircleButton, CustomTextInput } from "../../components";
import { styles as s } from "./styles";

export const AddTask = () => {
  const dataKey = "@smartex-test-app:tasks";

  const navigation = useNavigation();
  const { colors } = useTheme();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const resetInputs = () => {
    setTitle("");
    setDesc("");
  };

  const handleRegisterTask = async () => {
    const newTask = {
      id: uuid.v4(),
      title,
      desc,
      isChecked: false,
      date: "Segunda, Fev 21, 2023",
      time: "9:45 PM",
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newTask];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      resetInputs();

      navigation.navigate("TasksList", {
        tasks: dataFormatted,
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel salvar!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={s.container}
      >
        <Appbar.Header mode="small" style={{ backgroundColor: colors.blue }}>
          <Appbar.Action
            icon="arrow-left"
            color="#FFF"
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content color="#FFF" title="Adicionar nova tarefa" />
        </Appbar.Header>

        <View style={s.elementsContainer}>
          <CustomTextInput
            label="Titulo"
            value={title}
            onChangeText={(txt) => setTitle(txt)}
            style={{ fontSize: 32 }}
            maxLength={50}
          />

          <CustomTextInput
            label="Descricao"
            value={desc}
            onChangeText={(txt) => setDesc(txt)}
            style={{ fontSize: 18 }}
            multiline={true}
          />

          <Text style={s.title}>Data e hora de conclusao</Text>
        </View>

        <CircleButton
          icon="check"
          onPress={() => {
            handleRegisterTask();
          }}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
