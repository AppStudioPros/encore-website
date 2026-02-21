"use client";

import { useCallback, useEffect, useState, memo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Position,
  Handle,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

interface FlowNodeData {
  label: string;
  subtitle?: string;
  icon?: string;
  insight?: string;
  insightMetric?: string;
  type?: "start" | "process" | "ai" | "parallel" | "team" | "end" | "loop";
  isKey?: boolean; // key difference node — gets extra glow
  [key: string]: unknown;
}

interface ProcessFlowMapProps {
  nodes: Node<FlowNodeData>[];
  edges: Edge[];
  title?: string;
  subtitle?: string;
  stats?: { label: string; value: string }[];
  isLoading?: boolean;
}

/* ═══════════════════════════════════════════
   CUSTOM NODE COMPONENT
   ═══════════════════════════════════════════ */

const FlowNode = memo(({ data, selected }: NodeProps<Node<FlowNodeData>>) => {
  const [showInsight, setShowInsight] = useState(false);
  const d = data as FlowNodeData;
  const isKey = d.isKey;
  const nodeType = d.type || "process";

  const colorMap: Record<string, { bg: string; border: string; glow: string; text: string }> = {
    start: { bg: "rgba(0, 200, 150, 0.15)", border: "rgba(0, 200, 150, 0.6)", glow: "0 0 20px rgba(0, 200, 150, 0.3)", text: "#00c896" },
    process: { bg: "rgba(56, 189, 248, 0.1)", border: "rgba(56, 189, 248, 0.4)", glow: "0 0 15px rgba(56, 189, 248, 0.2)", text: "#38bdf8" },
    ai: { bg: "rgba(168, 85, 247, 0.15)", border: "rgba(168, 85, 247, 0.6)", glow: "0 0 25px rgba(168, 85, 247, 0.4)", text: "#a855f7" },
    parallel: { bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.5)", glow: "0 0 18px rgba(56, 189, 248, 0.25)", text: "#38bdf8" },
    team: { bg: "rgba(255, 176, 0, 0.15)", border: "rgba(255, 176, 0, 0.6)", glow: "0 0 25px rgba(255, 176, 0, 0.3)", text: "#ffb000" },
    end: { bg: "rgba(0, 200, 150, 0.15)", border: "rgba(0, 200, 150, 0.6)", glow: "0 0 20px rgba(0, 200, 150, 0.3)", text: "#00c896" },
    loop: { bg: "rgba(168, 85, 247, 0.12)", border: "rgba(168, 85, 247, 0.5)", glow: "0 0 20px rgba(168, 85, 247, 0.3)", text: "#a855f7" },
  };

  const colors = colorMap[nodeType] || colorMap.process;

  return (
    <div
      className="relative group"
      onMouseEnter={() => d.insight && setShowInsight(true)}
      onMouseLeave={() => setShowInsight(false)}
    >
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-3 !h-3" />
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-0 !w-3 !h-3" id="left" />

      {/* Node body */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: Math.random() * 0.5 }}
        className="relative"
      >
        {/* Outer glow for key nodes */}
        {isKey && (
          <div
            className="absolute -inset-2 rounded-2xl animate-pulse"
            style={{ boxShadow: colors.glow, opacity: 0.6 }}
          />
        )}

        <div
          className="px-5 py-3.5 rounded-xl min-w-[160px] max-w-[220px] text-center transition-all duration-300 cursor-default"
          style={{
            background: colors.bg,
            border: `1.5px solid ${colors.border}`,
            boxShadow: selected ? colors.glow : isKey ? colors.glow : "none",
          }}
        >
          {/* Icon */}
          {d.icon && (
            <div className="text-2xl mb-1">{d.icon}</div>
          )}

          {/* Label */}
          <div className="font-bold text-sm text-white leading-tight">{d.label}</div>

          {/* Subtitle */}
          {d.subtitle && (
            <div className="text-[10px] mt-1 opacity-70" style={{ color: colors.text }}>
              {d.subtitle}
            </div>
          )}

          {/* Key indicator dot */}
          {isKey && (
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full animate-ping" style={{ background: colors.border }} />
          )}
        </div>

        {/* Insight tooltip */}
        <AnimatePresence>
          {showInsight && d.insight && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-64"
            >
              <div className="bg-[#0a1530] border border-cyan/30 rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                {d.insightMetric && (
                  <div className="text-lg font-black mb-1" style={{ color: colors.text }}>
                    {d.insightMetric}
                  </div>
                )}
                <div className="text-xs text-[#c8d4f0] leading-relaxed">{d.insight}</div>
              </div>
              {/* Arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a1530] border-l border-t border-cyan/30 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-3 !h-3" />
      <Handle type="source" position={Position.Right} className="!bg-transparent !border-0 !w-3 !h-3" id="right" />
    </div>
  );
});

FlowNode.displayName = "FlowNode";

/* ═══════════════════════════════════════════
   ANIMATED EDGE STYLES (CSS)
   ═══════════════════════════════════════════ */

const flowStyles = `
  .react-flow__edge-path {
    stroke-width: 2;
    stroke: rgba(56, 189, 248, 0.4);
  }

  .react-flow__edge.animated .react-flow__edge-path {
    stroke-dasharray: 8;
    animation: flowPulse 1.5s linear infinite;
  }

  @keyframes flowPulse {
    to { stroke-dashoffset: -16; }
  }

  .react-flow__controls {
    background: rgba(10, 21, 48, 0.9) !important;
    border: 1px solid rgba(56, 189, 248, 0.2) !important;
    border-radius: 12px !important;
    overflow: hidden;
  }

  .react-flow__controls button {
    background: transparent !important;
    border-bottom: 1px solid rgba(56, 189, 248, 0.1) !important;
    fill: rgba(56, 189, 248, 0.6) !important;
  }

  .react-flow__controls button:hover {
    background: rgba(56, 189, 248, 0.1) !important;
  }

  .react-flow__attribution {
    display: none !important;
  }

  .react-flow__background pattern line {
    stroke: rgba(56, 189, 248, 0.05) !important;
  }

  /* Glow animation for key edges */
  .edge-glow .react-flow__edge-path {
    stroke: rgba(168, 85, 247, 0.6);
    stroke-width: 2.5;
    filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.4));
  }

  /* Loop edge */
  .edge-loop .react-flow__edge-path {
    stroke: rgba(168, 85, 247, 0.5);
    stroke-dasharray: 5 3;
    animation: flowPulse 2s linear infinite reverse;
  }
`;

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

const nodeTypes = { flowNode: FlowNode };

export default function ProcessFlowMap({
  nodes: initialNodes,
  edges: initialEdges,
  title,
  subtitle,
  stats,
  isLoading,
}: ProcessFlowMapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  return (
    <div className="relative">
      <style dangerouslySetInnerHTML={{ __html: flowStyles }} />

      {/* Title bar */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <h3 className="text-xl font-black text-white flex items-center gap-3">
            <span className="w-2 h-8 rounded-full bg-gradient-to-b from-cyan to-purple-500" />
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-[#5a7aa0] mt-1 ml-5">{subtitle}</p>
          )}
        </motion.div>
      )}

      {/* Flow canvas */}
      <div className="w-full rounded-2xl border border-cyan/15 overflow-hidden bg-[#050a18]" style={{ height: "500px" }}>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="w-12 h-12 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
            <p className="text-sm text-[#5a7aa0]">AI is mapping your process flow...</p>
          </div>
        ) : (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            colorMode="dark"
            fitView
            fitViewOptions={{ padding: 0.3 }}
            proOptions={{ hideAttribution: true }}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={true}
            minZoom={0.5}
            maxZoom={1.5}
          >
            <Background color="rgba(56, 189, 248, 0.05)" gap={24} size={1} />
            <Controls showInteractive={false} />
          </ReactFlow>
        )}
      </div>

      {/* Stats bar */}
      {stats && stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0a1530] border border-cyan/15 rounded-xl p-4 text-center"
            >
              <div className="text-lg font-black text-cyan">{s.value}</div>
              <div className="text-[10px] text-[#5a7aa0] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Hover hint */}
      <p className="text-center text-[10px] text-[#3a4a6a] mt-3">
        Hover over glowing nodes to see key insights • Scroll to zoom • Drag to pan
      </p>
    </div>
  );
}
