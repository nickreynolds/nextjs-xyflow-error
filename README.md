# NextJS + ReactFlow Error Demo App

This app reproduces several errors encountered when trying to use the ReactFlow library in a NextJS app.

This app was built by running `npx create-next-app@latest` with default options, then installing `@xyflow/react`, and building a very simple demo app based on the examples in the [React Flow Quickstart](https://reactflow.dev/learn).

Even with this simple example, there are several type errors found.

In the file `MindmapForm.tsx` we see the following errors:

## Line 32-36:

```
const initialNodes: Node[] = [];

const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
```

Fails to compile with the following error:
```
Type error: Argument of type 'Node[]' is not assignable to parameter of type 'import("/Users/nick/dec/nextjs-xyflow-error/node_modules/.pnpm/@xyflow+react@12.3.1_@types+react@18.3.9_react-dom@18.3.1_react@18.3.1/node_modules/@xyflow/react/dist/esm/types/nodes").Node[]'.
  Type 'Node' is not assignable to type 'import("/Users/nick/dec/nextjs-xyflow-error/node_modules/.pnpm/@xyflow+react@12.3.1_@types+react@18.3.9_react-dom@18.3.1_react@18.3.1/node_modules/@xyflow/react/dist/esm/types/nodes").Node'.
    Type 'Node' is missing the following properties from type 'NodeBase<Record<string, unknown>, string>': id, position, data
```

## Lines 40-43:

```
	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);
```

Gives a type error of:
```
Parameter 'params' implicitly has an 'any' type.
```

## Line 57:

```
setNodes((nds) => nds.concat(newNode));
```

Gives an error of:
```
No overload matches this call.
  Overload 1 of 2, '(...items: ConcatArray<Node>[]): Node[]', gave the following error.
    Argument of type '{ id: string; position: XYPosition; data: { sp123ID: string; }; origin: number[]; type: string; }' is not assignable to parameter of type 'ConcatArray<Node>'.
      Type '{ id: string; position: XYPosition; data: { sp123ID: string; }; origin: number[]; type: string; }' is missing the following properties from type 'ConcatArray<Node>': length, join, slice
  Overload 2 of 2, '(...items: (Node | ConcatArray<Node>)[]): Node[]', gave the following error.
    Argument of type '{ id: string; position: XYPosition; data: { sp123ID: string; }; origin: number[]; type: string; }' is not assignable to parameter of type 'Node | ConcatArray<Node>'.
      Type '{ id: string; position: XYPosition; data: { sp123ID: string; }; origin: number[]; type: string; }' is not assignable to type 'Node'.
        Type '{ id: string; position: XYPosition; data: { sp123ID: string; }; origin: number[]; type: string; }' is not assignable to type 'NodeBase<Record<string, unknown>, string>'.
          Types of property 'origin' are incompatible.
            Type 'number[]' is not assignable to type '[number, number]'.
              Target requires 2 element(s) but source may have fewer.
```

## Line 80:

```
<Background variant="dots" gap={12} size={1} />
```

Gives an error of:
```
Type '"dots"' is not assignable to type 'BackgroundVariant | undefined'.ts(2322)
types.d.ts(29, 5): The expected type comes from property 'variant' which is declared here on type 'IntrinsicAttributes & BackgroundProps'
```


## NextJS Boilerplate README Below

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install Dependencies:

```bash
pnpm i
```

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
