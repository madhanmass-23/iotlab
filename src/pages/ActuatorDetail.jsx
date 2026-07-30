import HardwareDetail from "@/components/HardwareDetail";
import { getActuator } from "@/data/actuators";

export default function ActuatorDetail() {
  return (
    <HardwareDetail
      items={null}
      getItem={getActuator}
      backTo="/actuators"
      accent="cobalt"
      kindLabel="Actuator"
    />
  );
}