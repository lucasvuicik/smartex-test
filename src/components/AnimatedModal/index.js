import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { styles as s } from "./styles";
import { colors } from "../../global/styles/theme";

const { height } = Dimensions.get("window");

export const AnimatedCheckModal = ({
  show,
  label,
  deleteConfirmation,
  closeOnPress,
}) => {
  const [state] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (show) openModal();
    else closeModal();
  }, [show]);

  return (
    <Animated.View
      style={[
        s.container,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}
    >
      <Animated.View
        style={[
          s.modal,
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        <Text style={s.modalLabel}>{label}</Text>

        <View style={s.buttonsContainer}>
          <TouchableOpacity
            style={{ ...s.buttons, backgroundColor: colors.blue }}
            onPress={deleteConfirmation}
          >
            <Text style={{ ...s.modalButtonsText, color: "white" }}>Sim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...s.buttons, backgroundColor: colors.white }}
            onPress={closeOnPress}
          >
            <Text style={{ ...s.modalButtonsText, color: colors.blue }}>
              Nao
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
};
