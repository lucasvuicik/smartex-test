import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar, Checkbox, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CircleButton } from "../../components";
import { styles as s } from "./styles";

export const TasksList = () => {
  const dataKey = "@smartex-test-app:tasks";
  const navigation = useNavigation();
  const route = useRoute();

  const { colors } = useTheme();
  const [tasksData, setTasksData] = useState([]);

  const handleCheckedTasks = async (item) => {
    const newData = tasksData.map((task) => {
      if (task.id === item.id) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });

    await AsyncStorage.setItem(dataKey, JSON.stringify(newData));
    setTasksData(newData);
  };

  const RowComponent = ({ item }) => {
    const { isChecked, title, desc, date } = item;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("EditTask", { selectedTask: item })}
        style={s.rowContainer}
      >
        <Checkbox
          status={isChecked ? "checked" : "unchecked"}
          onPress={() => handleCheckedTasks(item)}
          uncheckedColor={colors.red}
          color={colors.orange}
        />
        <View style={s.rowRightElements}>
          <Text style={s.rowTitle}>{title}</Text>
          <Text style={s.rowDesc}>{desc}</Text>
          <Text style={s.rowDate}>{date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const loadData = async () => {
    const data = (await AsyncStorage.getItem(dataKey)) || [];

    if (data.length) {
      setTasksData(JSON.parse(data));
    } else {
      setTasksData([]);
    }
  };

  const removeAllData = async () => {
    await AsyncStorage.removeItem(dataKey);
  };

  useEffect(() => {
    if (route.params?.tasks.length) {
      setTasksData(route.params.tasks);
    } else if (!route.params?.tasks.length) {
      setTasksData([]);
    }
  }, [route?.params?.tasks]);

  useEffect(() => {
    loadData();
    // removeAllData();
  }, []);

  return (
    <SafeAreaView style={s.container}>
      <Appbar.Header mode="small" style={{ backgroundColor: colors.blue }}>
        <Appbar.Action
          icon="menu"
          color={colors.white}
          onPress={() => navigation.openDrawer()}
        />
        <Appbar.Content color={colors.white} title="Lista de tarefas" />
      </Appbar.Header>

      <View style={s.flatListContainer}>
        {tasksData.length ? (
          <FlatList
            data={tasksData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index, separators }) => (
              <RowComponent item={item} />
            )}
          />
        ) : (
          // colocar Avatar do paper
          <Text>Voce nao possui registros</Text>
        )}
      </View>

      <CircleButton
        icon="plus"
        onPress={() => navigation.navigate("AddTask")}
      />
    </SafeAreaView>
  );
};
