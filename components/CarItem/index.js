import React, { useState } from "react";
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Text, Image } from "react-native-elements";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/index";

const CarItem = () => {
  const [lock, SetLock] = useState(false);

  const locked = () => {
    if (lock) {
      SetLock(false);
    } else {
      SetLock(true);
    }
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/background.png")}
      />
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5}>
          <FontAwesomeIcon icon={faCog} size={24} style={{ color: "white" }} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Niasky Mobile</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <FontAwesomeIcon
            icon={faToolbox}
            size={24}
            style={{ color: "white" }}
          />
        </TouchableOpacity>
      </View>
      {/* BAttery Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/battery.png")}
          style={{
            height: 26,
            width: 70,
            marginRight: 12,
          }}
        />
        <Text h3 style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
          150 ml
        </Text>
      </View>
      <View style={styles.status}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Parked
        </Text>
      </View>
      <ScrollView>
        <View style={styles.threeIcons}>
          <TouchableOpacity activeOpacity={0.5}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 50,
                padding: 18,
                marginLeft: 12,
              }}
            >
              <FontAwesomeIcon
                icon={faFan}
                size={24}
                style={{ color: "white" }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 50,
                padding: 18,
                marginLeft: 12,
              }}
            >
              <FontAwesomeIcon
                icon={faKey}
                size={24}
                style={{ color: "white" }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} onPress={locked}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 50,
                padding: 18,
                marginLeft: 12,
              }}
            >
              <FontAwesomeIcon
                icon={lock ? faLock : faUnlock}
                size={24}
                style={{ color: "white" }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;
