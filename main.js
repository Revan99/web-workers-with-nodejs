// main.js
import * as Comlink from "https://unpkg.com/comlink?module";

const worker = new Worker("worker.js");
// This `state` variable actually lives in the worker!
const state = await Comlink.wrap(worker);
await state.inc();
console.log(await state.currentCount);
