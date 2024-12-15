import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

type Props = {
  name: string;
  onRemove: (name: string) => void;
};

export function Participant({ name, onRemove }: Readonly<Props>) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{name}</Text>

      <TouchableOpacity style={s.button} onPress={() => onRemove(name)}>
        <Text style={s.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
