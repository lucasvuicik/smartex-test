import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar, Checkbox } from "react-native-paper";

import { CircleButton, Header } from "../../components";
import { colors } from "../../global/styles/theme";
import detalhes from "../../mock";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TasksList = () => {
  const dataKey = "@smartex-test-app:tasks";
  const navigation = useNavigation();
  const route = useRoute();

  //   const mock = [
  //     {
  //       id: "d4459bfc-2703-43e4-9ce3-40f2adc1ce59",
  //       title: "Teste 1",
  //       desc: "Lucas Lucas",
  //       isChecked: true,
  //       date: "Segunda, Fev 21, 2023",
  //       time: "9:45 PM",
  //     },
  //     {
  //       id: "e94cfd94-6af5-42bb-b17a-8991abc22d33",
  //       title: "Teste 2",
  //       desc: "Léo Léo",
  //       isChecked: true,
  //       date: "Segunda, Fev 21, 2023",
  //       time: "9:45 PM",
  //     },
  //     {
  //       id: "d360eeb0-3084-45a1-8d54-94df16d2b5b0",
  //       title: "Lucas 2",
  //       desc: "",
  //       isChecked: false,
  //       date: "Segunda, Fev 21, 2023",
  //       time: "9:45 PM",
  //     },
  //   ];

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

  const Row = ({ item, title, desc, date, time }) => {
    const { isChecked } = item;

    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate("EditTask", { selectedTask: item })}
        style={{ marginBottom: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Checkbox
            status={isChecked ? "checked" : "unchecked"}
            // onPress={() => handleCheckedTasks(item)}
            uncheckedColor="red"
            color="orange"
          />
          <View
            style={{ width: "100%", marginLeft: 20, backgroundColor: "pink" }}
          >
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
            <Text style={{ fontWeight: "bold" }}>{desc}</Text>
            <Text style={{ fontWeight: "bold" }}>{date}</Text>
          </View>
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
    // setTasksData(mock);
  };

  useEffect(() => {
    if (route.params?.tasks.length) {
      setTasksData(route.params.tasks);
    } else if (!route.params?.tasks.length) {
      setTasksData([]);
    }
  }, [route?.params?.tasks]);

  useEffect(() => {
    console.log("LEOOOOOOOOOOOOOOOOO");
    loadData();

    // async function removeAllData() {
    //   await AsyncStorage.removeItem(dataKey);
    // }
    // removeAllData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.grey100 }}>
      <Appbar.Header mode="small" style={{ backgroundColor: colors.blue }}>
        <Appbar.Action
          icon="menu"
          color="#FFF"
          onPress={() => navigation.openDrawer()}
        />
        <Appbar.Content color="#FFF" title="Lista de tarefas" />
      </Appbar.Header>

      <View style={{ flex: 1, padding: 20 }}>
        {console.log("tasksData =================")}
        {console.log(tasksData)}
        {tasksData.length ? (
          <FlatList
            data={tasksData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index, separators }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditTask", { selectedTask: item })
                }
                style={{ marginBottom: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Checkbox
                    status={item?.isChecked ? "checked" : "unchecked"}
                    onPress={() => handleCheckedTasks(item)}
                    uncheckedColor="red"
                    color="orange"
                  />
                  <View
                    style={{
                      width: "100%",
                      marginLeft: 20,
                      //   backgroundColor: "pink",
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>{item?.title}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item?.desc}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item?.date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text>Voce nao possui registros</Text>
        )}
      </View>

      <CircleButton
        icon="plus"
        onPress={() => navigation.navigate("AddTask")}
      />
    </View>
  );
};
