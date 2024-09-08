# JSON to TypeScript Interface Converter
## Overview
The JSON to TypeScript Interface Converter is a CLI tool designed to convert JSON files into TypeScript interfaces. This tool helps in generating TypeScript interfaces from JSON objects, making it easier to work with strongly typed data in TypeScript projects.

## Features
- Convert JSON to TypeScript interfaces.
- Generate separate interfaces for nested objects.
- Create type definitions for arrays and primitive types.
- Specify a custom name for the root interface.
## Installation
### Global Installation
To install the CLI tool globally, use the following command:
```npm install -g json-to-ts-cli```

### Local Installation
To install the CLI tool locally within a project, use:

``` npm install json-to-ts-cli ``` 

## Usage
### Command-Line Interface
The CLI tool is invoked using the json-to-ts command:
```json-to-ts <input> <output> [rootInterfaceName]```
```<input>: Path to the input JSON file.```
```<output>: Path to the output TypeScript file.```
```[rootInterfaceName] (Optional): Name for the root TypeScript interface. If not provided, defaults to RootInterface.``` 

### Example
Convert input.json to output.ts with a custom root interface name:

```json-to-ts input.json output.ts CustomRootInterface```
Convert input.json to output.ts using the default root interface name:

```json-to-ts input.json output.ts```

## Development
### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
### Setup
#### Clone the Repository

```git clone <repository-url>```
```cd <repository-directory>```
#### Install Dependencies
```npm install```
#### Build the Project
```npm run build```

##### Directory Structure
- src/ - Contains source TypeScript files.
- cli.ts - Entry point for the CLI tool.
- convert.ts - Contains logic for converting JSON to TypeScript interfaces.
- dist/ - Output directory for compiled JavaScript files.
- package.json - Contains project metadata and dependencies.
- tsconfig.json - TypeScript configuration file.
##### Scripts
- Build: Compile TypeScript files to JavaScript.
- ```npm run build```
- ```Link```: Create a symlink for local development.

- ```npm link```
- Start: Build and run the CLI tool
- npm start
## Example JSON File
Here’s a sample JSON file to test the converter:

```{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "isActive": true,
  "roles": ["admin", "user"],
  "profile": {
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "zipcode": "12345"
    }
  }
} 
```
### Generated TypeScript Output
For the sample JSON above and using the root interface name CustomRootInterface, the generated TypeScript file will look like this:

```ts
export interface CustomRootInterface {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  roles: string[];
  profile: Profile;
}

export interface Profile {
  age: number;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  zipcode: string;
}
```
## Contributing
- Fork the Repository - Create a fork of the repository on GitHub.
- Create a Branch - Create a new branch for your changes.

- git checkout -b feature/your-feature
- Make Changes - Implement your changes and test them.
- Commit Changes - Commit your changes with a descriptive message.

- ```git add .```
- ```git commit -m "Add feature or fix description"```
- ```Push Changes - Push your branch to your fork.```

- ```git push origin feature/your-feature```
- ```Create a Pull Request - Open a pull request from your fork to the main repository.```

## License
This project is licensed under the MIT License. See the LICENSE file for details.
