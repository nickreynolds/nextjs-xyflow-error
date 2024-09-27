import { useCallback } from "react";
import {
	Background,
	Controls,
	type Edge,
	type NodeOrigin,
	ReactFlow,
	addEdge,
	useEdgesState,
	useNodesState,
	useReactFlow,
} from "@xyflow/react";

import MindMapEdge from "./mind-map-edge/mind-map-edge";
import SP123Node from "./mind-map-node/sp123-node";

const nodeTypes = {
	sp123: SP123Node,
};

const edgeTypes = {
	mindmap: MindMapEdge,
};

// this places the node origin in the center of a node
const nodeOrigin: NodeOrigin = [0.5, 0.5];

// we have to import the React Flow styles for it to work
import "@xyflow/react/dist/style.css";
import { nanoid } from "nanoid";

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

export function MindmapForm() {
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const { screenToFlowPosition } = useReactFlow();

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	const addSp123Node = (sp123ID: string) => {
		const id = nanoid();
		const newNode = {
			id,
			position: screenToFlowPosition({
				x: 200,
				y: 200,
			}),
			data: { sp123ID: sp123ID },
			origin: [0.5, 0.5],
			type: "sp123",
		};
		setNodes((nds) => nds.concat(newNode));
	};

	return (
		<div
			className="w-5/6 h-5/6"
			onPaste={(e) => {
				const pastedText = e.clipboardData.getData("text");				
					addSp123Node(pastedText);
			}}
		>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				nodeOrigin={nodeOrigin}
				onConnect={onConnect}
				fitView
			>
				<Controls showInteractive={false} />
				<Background variant="dots" gap={12} size={1} />
			</ReactFlow>
		</div>
	);
}
