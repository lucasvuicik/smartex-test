import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import uuid from "react-native-uuid";

import { CircleButton } from "../../components";
import { colors } from "../../global/styles/theme";

export const AddTask = () => {
  const dataKey = "@smartex-test-app:tasks";

  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const resetInputs = () => {
    setTitle("");
    setDesc("");
  };

  const handleRegisterTask = async () => {
    console.log("quantas vezes entoru -=============");
    const newTask = {
      id: uuid.v4(),
      title,
      desc,
      isChecked: false,
      date: "Segunda, Fev 21, 2023",
      time: "9:45 PM",
    };

    try {
      // pego os que tem no async storage
      const data = await AsyncStorage.getItem(dataKey);

      // verfifico se existe algo em data e converto pra objeto
      const currentData = data ? JSON.parse(data) : [];

      // crio um objeto dando spread no data que eu converti e adiciono a nova transaction
      const dataFormatted = [...currentData, newTask];

      // adiciono no async storage o meu objeto convertido pra formato de string
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
    <View style={{ flex: 1, backgroundColor: colors.grey100 }}>
      <Appbar.Header mode="small" style={{ backgroundColor: colors.blue }}>
        <Appbar.Action
          icon="arrow-left"
          color="#FFF"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content color="#FFF" title="Adicionar nova tarefa" />
      </Appbar.Header>

      <View style={{ flex: 1, padding: 20 }}>
        <Text style={s.title}>Titulo</Text>
        <TextInput
          value={title}
          onChangeText={(txt) => setTitle(txt)}
          style={{ ...s.textinput, fontSize: 22 }}
          maxLength={50}
        />

        <Text style={s.title}>Descricao</Text>
        <TextInput
          value={desc}
          onChangeText={(txt) => setDesc(txt)}
          style={{ ...s.textinput, fontSize: 14 }}
          multiline
        />

        <Text style={s.title}>Data e hora de conclusao</Text>
      </View>

      <CircleButton
        icon="check"
        onPress={() => {
          handleRegisterTask();
        }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "600",
    color: colors.blue,
  },
  textinput: {
    marginBottom: 20,
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.grey300,
    color: colors.grey600,
  },
});
