export interface MenuItemType {
  id: string;
  title: string;
  url?: string;
  icon?: React.ComponentType;
  children?: MenuItemType[];
}
