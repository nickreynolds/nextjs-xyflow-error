import { ReactFlowProvider } from "@xyflow/react";
import { MindmapForm } from "./mindmap-form";

export function MindmapFormWrapper() {
	return (
		<ReactFlowProvider>
			<MindmapForm />
		</ReactFlowProvider>
	);
}
