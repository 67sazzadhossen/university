import { TAdminPath, TRoute } from "../types";

export const routeGenerator = (items: TAdminPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if ((item.path || item.index) && item.element) {
      acc.push({
        index: true,
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
