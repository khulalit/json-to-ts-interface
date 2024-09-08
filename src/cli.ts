#!/usr/bin/env node
import { program } from "commander";
import { generateTSInterface } from "./convert";

program
  .version("1.0.0")
  .description("Convert JSON to TypeScript interface")
  .argument("<input>", "Path to the input JSON file")
  .argument("<output>", "Path to output the TypeScript file")
  .argument("[nameOfRootInterface]", "Name of the root interface")
  .action((input, output, nameOfRootInterface) => {
    generateTSInterface(input, output, nameOfRootInterface);
  });

program.parse(process.argv);
