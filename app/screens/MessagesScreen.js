import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/common/ListingItem";
import ListItemDeleteAction from "../components/common/ListItemDeleteAction";
import ListItemSeparator from "../components/common/ListItemSeparator";
import Screen from "../components/common/Screen";

const data = [
  {
    id: 1,
    title: "T1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: require("../assets/user.png"),
  },
  {
    id: 2,
    title: "Title two",
    description:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: require("../assets/user.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (msg) => {
    const newMsgs = messages.filter((m) => m.id !== msg);
    setMessages(newMsgs);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
            onPress={() => console.log(item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...data,
            {
              id: 3,
              title: "Title three",
              description: "Description three",
              image: require("../assets/user.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MessagesScreen;
