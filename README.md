#### init project

```
npm init
npm i -D jest
npm i -D @types/jest
```

##### configure npm to use bit.dev as a secondary registry

```
npm login --registry=https://node.bit.dev --scope=@bit
```

#### init Bit.dev

```
bit init
bit import bit.envs/compilers/typescript --compiler
bit import bit.envs/testers/jest --tester`
```

##### create _tsconfig.json_

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "commonjs",
    "target": "es2018",
    //
    "lib": ["es2018", "dom"],
    // ambiant declarations for jest
    "types": ["jest"]
  },
  "include": ["src/*.ts", "src/components/Sum/*.ts"],
  "exclude": ["*.test.ts"]
}
```

#### create source files

```
mkdir components
mkdir components/Sum
```

##### create index.ts

##### create index.test.ts

#### create sum component

```
bit add 'components/Sum/*.ts' -t 'components/Sum/*.test.ts' --id sum
bit status
```
