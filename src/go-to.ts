import { handleRoute } from "./handle-route";

export function goTo(path: string) {
  history.pushState({}, "", path);
  handleRoute(path);
}
