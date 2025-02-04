import { NavLink } from "react-router-dom";
import { TAdminPath, TSidebarItems } from "../types";

export const sidebarItemsGenerator = (items: TAdminPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItems[], item) => {
    if ((item.path || item.index) && item.name) {
      acc.push({
        key: item.name,
        label: (
          <NavLink to={item.index ? `/${role}` : `/admin/${item.path}`}>
            {item.name}
          </NavLink>
        ),
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
