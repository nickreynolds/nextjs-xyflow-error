import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";

export type NodeData = Node<{ label: string }>;
function MindMapNode({ data }: NodeProps<NodeData>) {
	return (
		<div className="bg-green-400 p-10 rounded-sm border-1 text-gray-700">
			<input defaultValue={data.label} />

			<Handle type="target" position={Position.Top} />
			<Handle type="source" position={Position.Bottom} />
		</div>
	);
}

export default MindMapNode;
