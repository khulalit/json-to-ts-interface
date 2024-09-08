import {
  Project,
  StructureKind,
  InterfaceDeclarationStructure,
} from "ts-morph";

import fs from "fs";
import { capitalizeFirstLetter, getType } from "./utils";

interface Map {
  [key: string]: string;
}

export function generateTSInterface(
  input: string,
  output: string,
  nameOfRootInterface?: string
) {
  const data = fs.readFileSync(input, "utf-8");
  const json = JSON.parse(data);

  const project = new Project();
  const typesMap: Map = {};

  const rootInterfaceName = nameOfRootInterface || "RootInterface";
  jsonToInterface(json, rootInterfaceName, project, typesMap);

  // Combine all generated interfaces into one file
  const combinedContent = Object.values(typesMap).join("\n\n");
  fs.writeFileSync(output, combinedContent);
  console.log(`Generated TypeScript interfaces at ${output}`);
}

function jsonToInterface(
  json: any,
  name: string,
  project: Project,
  typesMap: Map
): void {
  const properties = Object.keys(json).map((key) => {
    const valueType = getType(json[key]);

    console.log(`Processing key: ${key}, Type: ${valueType}`);

    if (valueType === "object") {
      // Handle nested object: recursively define its own interface
      const nestedInterfaceName = capitalizeFirstLetter(key);
      jsonToInterface(json[key], nestedInterfaceName, project, typesMap); // Recursively create nested interfaces
      return {
        name: key,
        type: nestedInterfaceName,
      };
    } else if (valueType === "object[]") {
      // Handle array of objects: recursively define interface for array element
      const nestedInterfaceName = capitalizeFirstLetter(key);
      jsonToInterface(json[key][0], nestedInterfaceName, project, typesMap); // Recursively create nested interfaces for the array of objects
      return {
        name: key,
        type: `${nestedInterfaceName}[]`, // Return as array of nested objects
      };
    } else {
      return {
        name: key,
        type: valueType,
      };
    }
  });

  // Create interface structure
  const interfaceStructure: InterfaceDeclarationStructure = {
    name: name,
    isExported: true,
    properties: properties,
    kind: StructureKind.Interface,
  };

  const sourceFile = project.createSourceFile(
    `${name}.ts`,
    {},
    { overwrite: true }
  );
  sourceFile.addInterface(interfaceStructure);
  typesMap[name] = sourceFile.getFullText(); // Store generated interface in the map

  console.log(`Interface ${name} generated`);
}
