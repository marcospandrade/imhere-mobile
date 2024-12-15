import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";
/**
 *
 *
 * @export
 * @return {*}
 */
export function Home() {
  const participants = [
    "Marcos",
    "João",
    "Maria",
    "Rodrigo",
    "Sarah",
    "Ana",
    "Zé",
    "Cristina",
  ];
  const [addParticipantName, setAddParticipantName] = useState("");

  function handleAddParticipant(name: string) {
    if (participants.includes(name)) {
      Alert.alert("Participante já foi adicionado");
    }
    console.log("Adicionando participante");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante: ${name}?`, [
      {
        onPress: () => console.log("Cancelado"),
        text: "Cancelar",
        style: "cancel",
      },
      {
        onPress: () => Alert.alert(`${name} for removido`),
        text: "Remover",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChange={(e) => setAddParticipantName(e.nativeEvent.text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddParticipant(addParticipantName)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantRemove} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante adicionado.
          </Text>
        )}
      />
    </View>
  );
}
