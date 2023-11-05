//imported by index.html
"use strict";
import { loadBlink, loadHex, lcd } from "./lib/arduino-blink"
import * as avr8js from './lib/avr8js/index';
import getInteropManager = interopManager.getInteropManager;
import { interopManager } from "./interopManager";


const program = new Uint16Array(0x8000);
loadHex(lcd, new Uint8Array(program.buffer));

const cpu = new avr8js.CPU(program);
const timer0 = new avr8js.AVRTimer(cpu, avr8js.timer0Config);
const portD = new avr8js.AVRIOPort(cpu, avr8js.portDConfig);

(<any>window).interopManager = interopManager;

const listeners = [{
    localId: 1, listen: async (e) => {
        await DotNet.invokeMethodAsync("MinAVR", "sendSignal", 1, { type: "int", target: "bool", data: portD.portConfig, data2: e });
} }];

portD.addListener(listeners[0].listen);

export function runCode() {
    console.log("int");
    for (let i = 0; i < 50000; i++) {
        avr8js.avrInstruction(cpu);
        cpu.tick();
    }
    setTimeout(runCode, 0);
}


