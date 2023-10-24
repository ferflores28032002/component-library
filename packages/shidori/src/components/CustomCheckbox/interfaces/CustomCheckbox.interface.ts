export interface CustomCheckboxProps {
  colorScheme: string;
  size: size;
  defaultChecked: boolean;
  isInvalid: boolean;
  isChecked: boolean;
  isDisabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type size = "md" | "lg";
