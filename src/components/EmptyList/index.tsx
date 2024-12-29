import { Text } from "react-native";
import { s } from "./styles";

export function EmptyList() {
  return <Text style={s.listEmptyText}>Nenhum participante adicionado.</Text>;
}
