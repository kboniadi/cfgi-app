import { AntDesign } from "@expo/vector-icons";
import { Badge, Text, Tooltip } from "@rneui/base";
import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import GenerateAcronym from "../utilities/acronym-builder";

//Global variable that allows us to share the selected attorney 'calendly' link with CalendlyScreen component below
var link = "";

//Calendly Page
export const CalendlyScreen = () => {
  return (
    //Webview component that takes the Calendly link of attorney
    <WebView source={{ uri: link }} />
  );
};

const ControlledTooltip = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    />
  );
};

export default function LegalCard({
  name,
  languages,
  expertise,
  onPress,
  linkedin,
  avvo,
  otherlink,
  about,
  location,
  hours,
  phone,
  calendly,
  states,
}) {
  //Modal state
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      {/* Attorney Modal Profile Page */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          presentationStyle={"pageSheet"}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* Back button for Attorney Modal Profile */}
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="arrowleft" size={24} />
              </Pressable>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flex: 0.3,
                  }}
                >
                  <Image
                    style={{
                      width: 100,
                      height: 110,
                    }}
                    source={require("../assets/img/attorneydefault.png")}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={{ flex: 0.7, marginLeft: 20 }}>
                  <Text h4 h4Style={{ fontWeight: "500" }}>
                    {name}
                  </Text>
                  <Text>States:</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      flexGrow: 1,
                    }}
                  >
                    {states.map((x, index) => (
                      <View
                        key={`${index}${x}`}
                        style={{ flexBasis: "30%", marginHorizontal: 1, marginVertical: 2 }}
                      >
                        <ControlledTooltip
                          popover={<Text style={{ color: "#fff" }}>{x}</Text>}
                          backgroundColor={"rgb(250, 173, 20)"}
                          width={200}
                        >
                          <Badge
                            badgeStyle={{ width: "100%" }}
                            status="warning"
                            value={GenerateAcronym(x)}
                          />
                        </ControlledTooltip>
                      </View>
                    ))}
                  </View>
                  <Text>Languages:</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      flexGrow: 1,
                    }}
                  >
                    {languages.map((x, index) => (
                      <View
                        key={`${index}${x}`}
                        style={{ flexBasis: "30%", marginHorizontal: 1, marginVertical: 2 }}
                      >
                        <ControlledTooltip
                          popover={<Text style={{ color: "#fff" }}>{x}</Text>}
                          backgroundColor={"rgb(32, 137, 220)"}
                          width={200}
                        >
                          <Badge
                            badgeStyle={{ width: "100%" }}
                            status="primary"
                            value={GenerateAcronym(x)}
                          />
                        </ControlledTooltip>
                      </View>
                    ))}
                  </View>
                  <Text>Expertise:</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      flexGrow: 1,
                    }}
                  >
                    {expertise.map((x, index) => (
                      <View
                        key={`${index}${x}`}
                        style={{ flexBasis: "30%", marginHorizontal: 1, marginVertical: 2 }}
                      >
                        <ControlledTooltip
                          popover={<Text style={{ color: "#fff" }}>{x}</Text>}
                          backgroundColor={"rgb(82, 196, 26)"}
                          width={200}
                        >
                          <Badge
                            badgeStyle={{ width: "100%" }}
                            status="success"
                            value={GenerateAcronym(x)}
                          />
                        </ControlledTooltip>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              {/* Attorney Default Profile Image*/}

              {/* Attorney Name */}
              {/* <Text
                style={{
                  paddingTop: 10,
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#3F3356",
                }}
              >
                {name}
              </Text> */}
              {/* Shows avvo link and/or linkedIn link if provided */}
              {/* {avvo !== "" ? (
                <Text
                  style={{
                    textAlign: "center",
                    color: "#459EFF",
                    textDecorationLine: "underline",
                  }}
                  onPress={() => {
                    Linking.openURL(avvo);
                  }}
                >
                  Avvo Profile
                </Text>
              ) : null}
              {linkedin !== "" ? (
                <Text
                  style={{
                    textAlign: "center",
                    color: "#459EFF",
                    textDecorationLine: "underline",
                    marginBottom: 20,
                  }}
                  onPress={() => {
                    Linking.openURL(linkedin);
                  }}
                >
                  LinkedIn
                </Text>
              ) : null} */}

              {/* Attorney Information that you can scroll */}
              <ScrollView>
                <Text style={{ color: "#3F3356", marginBottom: 10 }}>
                  <Text style={styles.textStyle}>About:{"\n"}</Text>
                  {about}
                </Text>
                <Text style={{ color: "#3F3356", marginBottom: 10 }}>
                  <Text style={styles.textStyle}>Expertise: </Text>
                  {expertise.join(", ")}
                </Text>
                <Text style={{ color: "#3F3356", marginBottom: 10 }}>
                  <Text style={styles.textStyle}>Languages: </Text> {languages}
                </Text>
                {/* Location */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>Location:</Text>
                  <Text
                    style={{
                      color: "#3F3356",
                      flex: 0.9,
                      justifyContent: "flex-start",
                      paddingLeft: 10,
                      marginBottom: 10,
                    }}
                  >
                    {location}
                  </Text>
                </View>
                {/* Hours Available */}
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <Text style={styles.textStyle}>Hours:</Text>
                  <Text
                    style={{
                      color: "#3F3356",
                      lineHeight: 20,
                      flex: 0.9,
                      justifyContent: "flex-start",
                      paddingLeft: 10,
                    }}
                  >
                    {hours}
                  </Text>
                </View>
                {/* Phone Number */}
                <Text style={{ color: "#3F3356" }}>
                  <Text style={styles.textStyle}>Phone Number: </Text> {phone}
                </Text>
              </ScrollView>

              {/* Schedule Button that opens Calendly page of Attorney */}
              <View style={{ paddingHorizontal: 40 }}>
                {/* Sets the variable 'link' to the given attorney calendly link */}
                <TouchableOpacity
                  onPressIn={() => (link = calendly)}
                  onPress={onPress}
                  onPressOut={() => setModalVisible(!modalVisible)}
                  style={styles.button}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.buttonText}>SCHEDULE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* Legal Cards Display; when clicked opens the modal profile above */}
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.content}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 0.2,
                }}
              >
                <Image
                  style={{
                    margin: "auto",
                    height: 60,
                    width: 60,
                  }}
                  source={require("../assets/img/attorneydefault.png")}
                  borderRadius={50}
                />
              </View>
              <View style={{ paddingLeft: 10, flex: 0.8 }}>
                <Text
                  style={{ fontWeight: "bold", color: "#3F3356", paddingBottom: 6, fontSize: 16 }}
                >
                  {name}
                </Text>
                <View
                  style={{
                    color: "#3F3356",
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    flexGrow: 1,
                  }}
                >
                  {states.slice(0, 2).map((x, index) => (
                    <View
                      key={`${index}${x}`}
                      style={{ flexBasis: "32%", marginHorizontal: 1, marginVertical: 2 }}
                    >
                      <Badge
                        badgeStyle={{ width: "100%" }}
                        status="warning"
                        value={GenerateAcronym(x)}
                      />
                    </View>
                  ))}
                  {expertise.slice(0, 2).map((x, index) => (
                    <View
                      key={`${index}${x}`}
                      style={{ flexBasis: "32%", marginHorizontal: 1, marginVertical: 2 }}
                    >
                      <Badge
                        badgeStyle={{ width: "100%" }}
                        status="success"
                        value={GenerateAcronym(x)}
                      />
                    </View>
                  ))}
                  {languages.slice(0, 2).map((x, index) => (
                    <View
                      key={`${index}${x}`}
                      style={{ flexBasis: "32%", marginHorizontal: 1, marginVertical: 2 }}
                    >
                      <Badge
                        badgeStyle={{ width: "100%" }}
                        status="primary"
                        value={GenerateAcronym(x)}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View style={{ position: "absolute", right: 20, bottom: 10 }}>
              <AntDesign name="arrowright" size={24} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 18,
    elevation: 1,
    marginTop: 10,
    flex: 1,
  },
  //Card content
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  //For modal; sets the modal style framework
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  //For modal; how the modal look
  modalView: {
    padding: 30,
  },

  //Schedule Button
  button: {
    borderRadius: 15,
    paddingVertical: 13,
    backgroundColor: "#4C67F6",
    marginTop: 15,
    width: "90%",
    alignSelf: "center",
  },
  //Schedule Button Text
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  //text style for attorney profile modal
  textStyle: {
    fontWeight: "bold",
    color: "#3F3356",
  },
});
