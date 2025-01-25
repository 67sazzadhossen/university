import { ReactNode } from "react";

export type TRoute = {
  path?: string;
  index?: boolean;
  element: ReactNode;
};

export type TAdminPath = {
  name: string;
  path?: string;
  index?: boolean;
  element?: ReactNode;
  children?: TAdminPath[];
};

export type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};
