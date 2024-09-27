import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";


export type NodeData = Node<{ sp123ID: string }>;
function SP123Node({ data }: NodeProps<NodeData>) {

	return (
		<div className="bg-white p-1 rounded-sm border-1">
			{data.sp123ID}

			<Handle type="target" position={Position.Top} />
			<Handle type="source" position={Position.Bottom} />
		</div>
	);
}

export default SP123Node;
