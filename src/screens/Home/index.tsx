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
import { EmptyList } from "../../components/EmptyList";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(`Participante: ${participantName} já foi adicionado`);
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function removeParticipant(name: string) {
    setParticipants((prevState) => prevState.filter((item) => item !== name));
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante: ${name}?`, [
      {
        onPress: () => removeParticipant(name),
        text: "Remover",
      },
      {
        text: "Cancelar",
        style: "cancel",
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddParticipant()}
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
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
