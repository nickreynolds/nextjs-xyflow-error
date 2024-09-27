import { ReactFlowProvider } from "@xyflow/react";
import { MindmapForm } from "./MindmapForm";

export function MindmapFormWrapper() {
	return (
		<ReactFlowProvider>
			<MindmapForm />
		</ReactFlowProvider>
	);
}
