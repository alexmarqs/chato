import { Model, useSettingsStore } from '@/stores/settings';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/Select';

export const SelectModalSettings = () => {
  const { model, setModel } = useSettingsStore();

  const handleValueChange = (value: Model) => {
    setModel(value);
  };

  return (
    <Select value={model} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gpt-3.5-turbo">GPT 3.5 Turbo</SelectItem>
        <SelectItem value="gpt-4">GPT 4</SelectItem>
      </SelectContent>
    </Select>
  );
};
