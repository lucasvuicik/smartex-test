import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

import { CircleButton } from "../../components";
import { colors } from "../../global/styles/theme";

export const EditTask = () => {
  const dataKey = "@smartex-test-app:tasks";

  const navigation = useNavigation();
  const route = useRoute();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [task, setTask] = useState({});

  const resetInputs = () => {
    setTitle("");
    setDesc("");
  };

  const handleDeleteTask = async (item) => {
    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const newData = currentData.filter((item) => item.id !== task.id);
      console.log("newData ===============");
      console.log(newData);

      if (!newData.length) {
        await AsyncStorage.removeItem(dataKey);
        navigation.navigate("TasksList", {
          tasks: [],
        });
        return;
      }

      await AsyncStorage.setItem(dataKey, JSON.stringify(newData));
      resetInputs();
      navigation.navigate("TasksList", {
        tasks: newData,
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi editar salvar!");
    }
  };

  const handleEditTask = async (task) => {
    const editedTask = {
      ...task,
      title,
      desc,
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const newData = currentData.map((item) => {
        if (item.id === task.id) {
          return editedTask;
        }
        return item;
      });

      await AsyncStorage.setItem(dataKey, JSON.stringify(newData));
      resetInputs();
      navigation.navigate("TasksList", {
        tasks: newData,
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi editar salvar!");
    }
  };

  useEffect(() => {
    if (route.params?.selectedTask) {
      setTask(route.params?.selectedTask);
      setTitle(route.params?.selectedTask.title);
      setDesc(route.params?.selectedTask.desc);
    }
  }, [route.params]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.grey100 }}>
      <Appbar.Header mode="small" style={{ backgroundColor: colors.blue }}>
        <Appbar.Action
          icon="arrow-left"
          color="#FFF"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content color="#FFF" title="Editar tarefa" />
        <Appbar.Action
          icon="delete"
          color="#FFF"
          onPress={() => handleDeleteTask(task)}
        />
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

        <Text>Data e hora de conclusao</Text>
      </View>

      <CircleButton icon="check" onPress={() => handleEditTask(task)} />
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
