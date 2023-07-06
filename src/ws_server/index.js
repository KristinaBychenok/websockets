import { jsonConvert } from "../utils/jsonHandler.js";

export const regestration = (message) => JSON.stringify(jsonConvert(message));
