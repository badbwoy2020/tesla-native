import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Text } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./style";
import items from "../Menu/items";

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow} bottomDivider>
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={item.icon}
              size={24}
            />
            <View style={styles.menuTextRow}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 15,
                }}
              >
                {item.title}
              </Text>
              {item.subTitle && (
                <Text style={{ color: "grey", fontSize: 14, marginLeft: 15 }}>
                  {item.subTitle}
                </Text>
              )}
            </View>
            <FontAwesomeIcon
              style={{ color: "white", color: "#4d4d4e " }}
              icon={faChevronRight}
              size={24}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
