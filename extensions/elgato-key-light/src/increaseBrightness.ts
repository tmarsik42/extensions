import { closeMainWindow, showHUD } from "@raycast/api";
import { KeyLight } from "./elgato";
import { showFailureToast } from "./utils";

export default async () => {
  try {
    await closeMainWindow();

    const keyLight = await KeyLight.discover();
    const brightness = await keyLight.increaseBrightness();

    const formattedBrightness = brightness.toLocaleString("en", { maximumFractionDigits: 0 });
    await showHUD(`Increased brightness to ${formattedBrightness}%`);
  } catch (error) {
    await showFailureToast(error, "Failed increasing brightness");
  }
};