import { Stack } from "expo-router";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

const todos: Todo[] = [
  {
    id: "1",
    title: "Buy groceries",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Buy groceries",
    completed: true,
    createdAt: new Date(),
  },
];

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Your To Do",
          headerLargeTitle: true,
          headerStyle: { backgroundColor: "transparent" },
        }}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20, gap: 10 }}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({ item }) => <TodoItem item={item} />}
        ListHeaderComponent={<TodoInput />}
        ListFooterComponent={<TodoFooter todos={todos} />}
      />
    </>
  );
}

function TodoInput() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <TextInput
        placeholder="Add a new todo"
        style={{
          flexGrow: 1,
          borderBottomWidth: 2,
          borderBottomColor: "gray",
          padding: 10,
          fontSize: 16,
          fontWeight: "semibold",
        }}
      />
      <Pressable
        style={{ backgroundColor: "gray", padding: 10, borderRadius: 10 }}
      >
        <Ionicons name="add" size={20} color="white" />
      </Pressable>
    </View>
  );
}

function TodoFooter({ todos }: { todos: Todo[] }) {
  return (
    <View style={{ gap: 10, paddingTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "semibold" }}>
        Your remaining todos: {todos.filter((todo) => !todo.completed).length}
      </Text>
      <Text style={{ fontStyle: "italic", color: "gray", fontSize: 16 }}>
        {`"Doing what you love is the cornerstone of having abundance in your life." - Wayne Dyer`}
      </Text>
    </View>
  );
}

function TodoItem({ item }: { item: Todo }) {
  return (
    <Pressable
      onPress={() => {}}
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: "lightgray",
            backgroundColor: item.completed ? "gray" : undefined,
          }}
        >
          {item.completed && (
            <Ionicons name="checkmark-sharp" size={20} color="white" />
          )}
        </View>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          textDecorationLine: item.completed ? "line-through" : "none",
          opacity: item.completed ? 0.5 : 1,
        }}
      >
        {item.title}
      </Text>

      <Pressable onPress={() => {}} style={{ marginLeft: "auto" }}>
        <Ionicons name="trash" size={20} color="gray" />
      </Pressable>
    </Pressable>
  );
}
