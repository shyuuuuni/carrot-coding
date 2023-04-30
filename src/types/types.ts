import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware/persist";

// zustand
export type Persist<T> = (
  config: StateCreator<T>,
  options: PersistOptions<T>
) => StateCreator<T>;

// DS: Data Structure
export type DataStructureSearchInfo = {
  name: {
    kr: string;
    en: string;
  };
  link: string;
  description: string;
};
export type DataStructureName = {
  en: string;
  kr: string;
};
export type DataStructureCode = {
  language: string;
  state: "created" | "reported" | "ok";
  code: string;
  createdAt: string; // YYYY-MM-DDTHH-MM-SS.sssZ
  updatedAt: string; // YYYY-MM-DDTHH-MM-SS.sssZ
};
export type DataStructureDetail = {
  id: string;
  name: DataStructureName;
  complexity: { [key: string]: string };
  description: string;
} & DataStructureCode;
export type DataStructureDetails = {
  name: DataStructureName;
  complexity: { [key: string]: string };
  description: string;
  code: DataStructureCode[];
};
