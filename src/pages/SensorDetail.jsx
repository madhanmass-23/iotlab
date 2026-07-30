import HardwareDetail from "@/components/HardwareDetail";
import { getSensor } from "@/data/sensors";

export default function SensorDetail() {
  return (
    <HardwareDetail
      items={null}
      getItem={getSensor}
      backTo="/sensors"
      accent="emerald"
      kindLabel="Sensor"
    />
  );
}