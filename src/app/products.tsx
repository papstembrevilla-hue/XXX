import { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const products = [
  { id: "1", name: "Laptop", price: 15000 },
  { id: "2", name: "Keyboard", price: 500 },
  { id: "3", name: "Mouse", price: 250 },
  { id: "4", name: "Headphones", price: 800 },
];

export default function Products() {
  const [cart, setCart] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      <Text style={styles.cart}>Cart: {cart.length} items</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₱{item.price.toLocaleString()}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setCart([...cart, item.id])}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
  },
  cart: {
    fontSize: 16,
    marginVertical: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#555",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
