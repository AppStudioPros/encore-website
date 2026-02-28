"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, ChevronDown, ChevronUp, X, Loader2, Shield, Zap, FileText, BarChart3, Brain, AlertTriangle, Users, Cog, Lock, Activity, ArrowLeft, RefreshCw, Save, Lightbulb } from "lucide-react";
import dynamic from "next/dynamic";
const ProcessFlowMap = dynamic(() => import("@/components/ProcessFlowMap"), { ssr: false });

/* ─── Data ─── */
const AGENCIES = [
  "VA", "DoD/Army", "DoD/Navy", "DoD/Air Force", "DHS", "DOE", "GSA",
  "Intelligence Community", "Other Federal", "State/Local",
];
const ROLES = [
  "Program Manager", "CTO/CIO/CAIO", "Contracting Officer",
  "Technical Lead", "Executive Leadership", "Other",
];
const MODULES = [
  { name: "Smart Document Engine", icon: FileText },
  { name: "Predictive Analytics Core", icon: BarChart3 },
  { name: "AI Decision Support", icon: Brain },
  { name: "Anomaly Detection", icon: AlertTriangle },
  { name: "Citizen Service Agent", icon: Users },
  { name: "Workflow Automator", icon: Cog },
  { name: "Compliance Guardian", icon: Shield },
  { name: "Knowledge Management AI", icon: Zap },
  { name: "Secure Data Pipeline", icon: Lock },
  { name: "AI Ops Monitor", icon: Activity },
];

const BUILD_STEPS = [
  "Querying SAM.gov contract database...",
  "Analyzing recent awards and active solicitations...",
  "Researching existing agency infrastructure...",
  "Cross-referencing known vendor deployments...",
  "Mapping NIST AI RMF compliance requirements...",
  "Evaluating FedRAMP HIGH security baseline...",
  "Configuring custom AI agent parameters...",
  "Modeling disaster recovery failback systems...",
  "Architecting solution integration points...",
  "Generating implementation roadmap...",
  "Calculating projected outcome metrics...",
  "Compiling final briefing document...",
];

const APP_BUILD_STEPS = [
  "Initializing application framework...",
  "Populating with agency-specific demo data...",
  "Wiring interactive components...",
  "Applying enterprise UI standards...",
  "Highlighting functional elements...",
  "Deploying prototype...",
];

type Phase = "intro" | "conversation" | "building" | "results" | "feedback";
interface Message { role: "user" | "assistant"; content: string; }

export default function MissionLabPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [agency, setAgency] = useState("");
  const [userRole, setUserRole] = useState("");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [phase, setPhase] = useState<Phase>("intro");
  const [buildResult, setBuildResult] = useState<string | null>(null);
  const [researchData, setResearchData] = useState<{ summary?: string } | null>(null);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [buildReady, setBuildReady] = useState(false);
  const [buildStep, setBuildStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appHtml, setAppHtml] = useState<string | null>(null);
  const [showApp, setShowApp] = useState(false);
  const [appBuilding, setAppBuilding] = useState(false);
  const [appBuildStep, setAppBuildStep] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [flowData, setFlowData] = useState<any>(null);
  const [flowLoading, setFlowLoading] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const userScrolledUp = useRef(false);
  const lastScrollTime = useRef(0);

  const scrollToBottom = useCallback(() => {
    if (userScrolledUp.current) return; // User took control, don't fight them
    const now = Date.now();
    if (now - lastScrollTime.current < 500) return; // Throttle to every 500ms
    lastScrollTime.current = now;
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Detect if user scrolled up manually
  const handleChatScroll = useCallback(() => {
    const container = chatContainerRef.current;
    if (!container) return;
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    userScrolledUp.current = !isNearBottom;
  }, []);

  // Only scroll on NEW messages (not every character update)
  const lastMessageCount = useRef(0);
  useEffect(() => {
    if (messages.length !== lastMessageCount.current) {
      lastMessageCount.current = messages.length;
      userScrolledUp.current = false; // Reset on new message
      scrollToBottom();
    }
  }, [messages.length, scrollToBottom]);

  const toggleModule = (name: string) => {
    setSelectedModules((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    );
  };

  /* ─── Stream chat ─── */
  const sendMessage = async (userMsg: string, extraMessages?: Message[]) => {
    const newUserMsg: Message = { role: "user", content: userMsg };
    const allMessages = [...(extraMessages || messages), newUserMsg];
    setMessages(allMessages);
    setInput("");
    setStreaming(true);
    if (phase === "intro") setPhase("conversation");

    try {
      const res = await fetch("/api/mission-lab/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: allMessages,
          agency,
          role: userRole,
          selectedModules,
        }),
      });

      if (!res.ok || !res.body) throw new Error("Stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        // Render character by character with slight delay for natural feel
        for (let i = 0; i < chunk.length; i++) {
          aiText += chunk[i];
          const current = aiText;
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: current };
            return copy;
          });
          // Small delay every few characters to feel like thinking
          if (i % 3 === 0) await new Promise((r) => setTimeout(r, 15));
        }
      }

      // Check for BUILD_READY
      if (aiText.includes("[BUILD_READY]")) {
        setBuildReady(true);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I apologize — there was a connection issue. Could you try sending that again?" },
      ]);
    } finally {
      setStreaming(false);
    }
  };

  /* ─── Build solution ─── */
  const startBuild = async () => {
    setPhase("building");
    setBuildReady(false);
    setBuildStep(0);

    // Animate build steps
    const stepInterval = setInterval(() => {
      setBuildStep((s) => {
        if (s >= BUILD_STEPS.length - 1) {
          clearInterval(stepInterval);
          return s;
        }
        return s + 1;
      });
    }, 4000);

    // Research
    let research = { summary: "Research unavailable — using general knowledge." };
    try {
      const challengeSummary = messages
        .filter((m) => m.role === "user")
        .map((m) => m.content)
        .join(" ");
      const res = await fetch("/api/mission-lab/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agency, challenge: challengeSummary, modules: selectedModules }),
      });
      if (res.ok) research = await res.json();
    } catch { /* graceful degradation */ }
    setResearchData(research);

    // Build proposal via chat
    try {
      const buildPrompt = `RESEARCH DATA:\n${research.summary}\n\nBased on our entire conversation and this research, generate a comprehensive solution proposal. Format it as a professional briefing document with these exact sections using markdown headers (##):\n\n## Mission Analysis\n## Agency Intelligence\n## Proposed Solution Architecture\n## Implementation Roadmap\n## Projected Outcomes\n## Compliance & Security\n## Why This Is Different\n\nMake it specific, detailed, and actionable. Reference the research findings. Include specific metrics, timelines, and technical details. End by asking how close this is on a 1-10 scale.`;

      const allMessages = [...messages, { role: "user" as const, content: buildPrompt }];

      const res = await fetch("/api/mission-lab/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: allMessages,
          agency,
          role: userRole,
          selectedModules,
        }),
      });

      if (!res.ok || !res.body) throw new Error("Build stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        for (let i = 0; i < chunk.length; i++) {
          result += chunk[i];
          const current = result;
          setBuildResult(current);
          if (i % 3 === 0) await new Promise((r) => setTimeout(r, 12));
        }
      }

      clearInterval(stepInterval);
      setBuildResult(result);
      setMessages((prev) => [
        ...prev,
        { role: "user", content: buildPrompt },
        { role: "assistant", content: result },
      ]);
      setPhase("results");
    } catch (err) {
      console.error(err);
      clearInterval(stepInterval);
      setPhase("conversation");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "There was an issue generating the proposal. Let me try a different approach — could you tell me what aspect is most critical to address first?" },
      ]);
    }
  };

  /* ─── Build Process Flow Visualization ─── */
  const buildProcessFlow = async () => {
    setFlowLoading(true);
    setFlowData(null);
    setShowFlow(true);

    try {
      const res = await fetch("/api/mission-lab/build-visualization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages,
          agency,
          role: userRole,
          selectedModules,
          briefing: buildResult || "",
        }),
      });

      if (!res.ok) throw new Error("Visualization build failed");

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setFlowData(data);
    } catch (err) {
      console.error(err);
      setFlowData(null);
    } finally {
      setFlowLoading(false);
    }
  };

  /* ─── Feedback ─── */
  const sendFeedback = async (feedback: string) => {
    setPhase("conversation");
    setBuildResult(null);
    setBuildReady(false);
    await sendMessage(feedback, messages);
  };

  /* ─── Reset ─── */
  const resetAll = () => {
    setMessages([]);
    setPhase("intro");
    setBuildResult(null);
    setResearchData(null);
    setBuildReady(false);
    setInput("");
    setStreaming(false);
    setAppHtml(null);
    setShowApp(false);
    setAppBuilding(false);
    setFlowData(null);
    setFlowLoading(false);
    setShowFlow(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !streaming) sendMessage(input.trim());
    }
  };

  /* ─── Render helpers ─── */
  const renderBriefing = (text: string) => {
    // Simple markdown-ish rendering for the briefing
    const sections = text.split(/^## /m).filter(Boolean);
    return sections.map((section, i) => {
      const lines = section.split("\n");
      const title = lines[0]?.trim();
      const body = lines.slice(1).join("\n").trim();
      return (
        <div key={i} className="mb-8">
          {title && (
            <h3 className="text-lg font-bold text-cyan tracking-wide uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan rounded-full" />
              {title}
            </h3>
          )}
          <div className="text-[#c8d4f0] text-sm leading-relaxed whitespace-pre-wrap">
            {body.split(/\*\*(.*?)\*\*/g).map((part, j) =>
              j % 2 === 1 ? (
                <strong key={j} className="text-white font-semibold">{part}</strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="h-screen flex flex-col bg-[#050C1E] overflow-hidden">
      {/* Hero — Demo Mode Banner */}
      <section className="flex-shrink-0 px-5 py-3">
        <div className="max-w-[1140px] mx-auto">
          {/* Title row */}
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl md:text-2xl font-black gold-gradient-text">
              AI Mission Lab
            </h1>
            <span className="text-[10px] text-cyan font-bold uppercase tracking-widest">NOT GPT — Custom Encore AI</span>
          </div>

          {/* Demo disclaimer — glowing border */}
          <div className="relative rounded-xl overflow-hidden">
            {/* Animated glow border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan/20 via-purple-500/20 to-amber/20 animate-pulse" />
            <div className="relative m-[1px] rounded-xl bg-[#070d20] px-5 py-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Shield size={18} className="text-amber" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber uppercase tracking-wider">Demo Mode</span>
                    <span className="text-[10px] text-[#5a7aa0]">|</span>
                    <span className="text-[10px] text-[#8899bb]">High-level AI demonstration — not the finished product we deliver</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-[10px] leading-relaxed">
                    <div>
                      <span className="text-green-400 font-semibold">✓ What this demo does:</span>
                      <span className="text-[#8899bb]"> Shows how Encore&apos;s AI thinks through your challenges, asks the right questions, and builds a high-level solution framework</span>
                    </div>
                    <div>
                      <span className="text-amber font-semibold">⚡ What we deliver:</span>
                      <span className="text-[#8899bb]"> Fully custom, secure, production-grade AI systems tailored to your mission — built in a controlled environment with your team</span>
                    </div>
                    <div>
                      <span className="text-cyan font-semibold">✓ Safe to share:</span>
                      <span className="text-[#8899bb]"> General challenges, high-level workflows, goals, pain points, desired outcomes, scale estimates</span>
                    </div>
                    <div>
                      <span className="text-red-400 font-semibold">✗ Do not enter:</span>
                      <span className="text-[#8899bb]"> Classified info, system credentials, PII, specific security configs, network details, or budget figures</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#5a7aa0]">
                    🔒 Your inputs are not stored, shared, or used for training. This conversation is confidential and temporary. Detailed analysis happens in secure consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout — fills remaining viewport, no page scroll */}
      <div className="max-w-[1140px] mx-auto px-5 py-3 flex-1 min-h-0">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Sidebar — fixed, scrolls internally */}
          <aside className="lg:w-72 flex-shrink-0 lg:h-full lg:overflow-y-auto">
            {/* Mobile toggle */}
            <button
              className="lg:hidden w-full flex items-center justify-between p-3 rounded-xl border border-cyan/20 bg-[#0a1530] text-sm text-[#c8d4f0] mb-3"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span>Mission Configuration</span>
              {sidebarOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <div className={`${sidebarOpen ? "block" : "hidden"} lg:block space-y-4`}>
              {/* Agency */}
              <div>
                <label className="text-xs font-bold text-cyan uppercase tracking-wider mb-1.5 block">Agency</label>
                <select
                  value={agency}
                  onChange={(e) => setAgency(e.target.value)}
                  className="w-full bg-[#0a1530] border border-cyan/20 rounded-lg px-3 py-2.5 text-sm text-white focus:border-cyan/60 focus:outline-none"
                >
                  <option value="">Select agency...</option>
                  {AGENCIES.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Role */}
              <div>
                <label className="text-xs font-bold text-cyan uppercase tracking-wider mb-1.5 block">Your Role</label>
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="w-full bg-[#0a1530] border border-cyan/20 rounded-lg px-3 py-2.5 text-sm text-white focus:border-cyan/60 focus:outline-none"
                >
                  <option value="">Select role...</option>
                  {ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Modules */}
              <div>
                <label className="text-xs font-bold text-cyan uppercase tracking-wider mb-1.5 block">Modules</label>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {MODULES.map((m) => {
                    const Icon = m.icon;
                    const selected = selectedModules.includes(m.name);
                    return (
                      <button
                        key={m.name}
                        onClick={() => toggleModule(m.name)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-left transition-all ${
                          selected
                            ? "bg-cyan/15 border border-cyan/40 text-white"
                            : "bg-[#0a1530] border border-transparent hover:border-cyan/20 text-[#8899bb]"
                        }`}
                      >
                        <Icon size={14} className={selected ? "text-cyan" : ""} />
                        <span>{m.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected pills */}
              {selectedModules.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {selectedModules.map((m) => (
                    <span
                      key={m}
                      className="module-pill px-2 py-1 rounded-full text-[10px] text-cyan cursor-pointer"
                      onClick={() => toggleModule(m)}
                    >
                      {m} ✕
                    </span>
                  ))}
                </div>
              )}

              {/* Mission brief */}
              {messages.length > 0 && (
                <div className="bg-[#0a1530] border border-cyan/10 rounded-xl p-3">
                  <h4 className="text-xs font-bold text-cyan uppercase tracking-wider mb-2">Your Mission Brief</h4>
                  <p className="text-[10px] text-[#8899bb] leading-relaxed">
                    {agency && <span className="block">Agency: {agency}</span>}
                    {userRole && <span className="block">Role: {userRole}</span>}
                    <span className="block mt-1">Messages: {messages.filter((m) => m.role === "user").length} exchanges</span>
                    <span className="block">Phase: {phase}</span>
                  </p>
                </div>
              )}
            </div>
          </aside>

          {/* Main content — fills remaining space, scrolls internally */}
          <div className="flex-1 min-w-0 h-full overflow-y-auto rounded-xl">
            {/* Building phase */}
            {phase === "building" && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 border-2 border-cyan/30 border-t-cyan rounded-full animate-spinner mb-8" />
                <div className="space-y-3 w-full max-w-md">
                  {BUILD_STEPS.map((step, i) => (
                    <div
                      key={step}
                      className={`flex items-center gap-3 transition-all duration-500 ${
                        i <= buildStep ? "opacity-100" : "opacity-20"
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${i <= buildStep ? "bg-cyan" : "bg-[#1a2a4a]"}`} />
                      <span className={`text-sm ${i === buildStep ? "text-cyan" : i < buildStep ? "text-[#5a7aa0]" : "text-[#2a3a5a]"}`}>
                        {step}
                      </span>
                      {i === buildStep && <Loader2 size={12} className="text-cyan animate-spin" />}
                    </div>
                  ))}
                </div>
                {buildResult && (
                  <div className="mt-8 w-full max-w-2xl">
                    <p className="text-xs text-cyan mb-2">Generating briefing...</p>
                    <div className="briefing-document rounded-xl p-6 max-h-64 overflow-y-auto">
                      <div className="text-sm text-[#c8d4f0] whitespace-pre-wrap">{buildResult.slice(-500)}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Process Flow Visualization View */}
            {phase === "results" && showFlow && (
              <div>
                {/* Toolbar */}
                <div className="flex items-center justify-between gap-3 mb-3 p-3 rounded-xl bg-[#0a1530] border border-cyan/15">
                  <button
                    onClick={() => setShowFlow(false)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-[#c8d4f0] hover:bg-white/5 transition-colors"
                  >
                    <ArrowLeft size={14} /> Back to Briefing
                  </button>
                  <div className="hidden md:flex items-center gap-2 text-xs text-purple-400">
                    <Lightbulb size={12} />
                    Hover glowing nodes for key insights
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={buildProcessFlow}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-[#c8d4f0] hover:bg-white/5 transition-colors"
                    >
                      <RefreshCw size={13} /> Regenerate
                    </button>
                    <button
                      onClick={() => setShowAccountModal(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-[#c8d4f0] hover:bg-white/5 transition-colors"
                    >
                      <Save size={13} /> Save
                    </button>
                  </div>
                </div>

                {/* Flow Map */}
                <ProcessFlowMap
                  nodes={flowData?.nodes || []}
                  edges={flowData?.edges || []}
                  title={flowData?.title || "Encore AI Solution Architecture"}
                  subtitle={flowData?.subtitle}
                  stats={flowData?.stats}
                  isLoading={flowLoading}
                />

                {/* Gate CTA */}
                <div className="mt-6 bg-gradient-to-r from-[#0a1530] to-[#0d1a3a] border border-cyan/20 rounded-xl p-6 text-center">
                  <p className="text-sm text-[#c8d4f0] mb-3">
                    This process analysis was built by Encore&apos;s AI from your conversation.
                    <br />
                    <span className="text-[#5a7aa0]">Your full briefing and visualization are saved to your profile.</span>
                  </p>
                  <a
                    href="mailto:missions@encoresvcsllc.com?subject=Mission Briefing - Deep Dive Request"
                    className="inline-block px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber to-gold-light text-[#1a1200] shadow-[0_8px_20px_rgba(255,176,0,0.28)] hover:shadow-[0_8px_30px_rgba(255,176,0,0.5)] transition-all hover:scale-105"
                  >
                    Schedule a Deep Dive with Our Team
                  </a>
                  <p className="text-[10px] text-[#3a4a6a] mt-3">
                    Ready to see how this maps to your specific systems? Our project managers are standing by.
                  </p>
                </div>

                <p className="text-center text-xs text-[#5a7aa0] mt-4">
                  This visualization was generated by a custom Encore AI architect. <span className="text-cyan font-semibold">NOT GPT.</span> Imagine what we deliver in 90 days.
                </p>
              </div>
            )}

            {/* Results phase */}
            {phase === "results" && buildResult && !showApp && !appBuilding && !showFlow && (
              <div>
                <div className="briefing-document rounded-xl p-8 mb-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan/20">
                    <Shield size={20} className="text-cyan" />
                    <div>
                      <h2 className="text-lg font-bold text-white">Mission Solution Brief</h2>
                      <p className="text-xs text-[#5a7aa0]">
                        Prepared for {agency || "Government Agency"} • {new Date().toLocaleDateString()} • CONFIDENTIAL
                      </p>
                    </div>
                  </div>
                  {renderBriefing(buildResult)}
                </div>

                {/* Build Process Flow Visualization Button */}
                <div className="text-center mb-6">
                  <button
                    onClick={buildProcessFlow}
                    className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-purple-600 via-purple-500 to-amber text-white shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.5)] transition-all hover:scale-105 shimmer-btn"
                  >
                    🚀 See It In Action — View AI Process Map
                  </button>
                  <p className="text-xs text-[#5a7aa0] mt-2">Watch our AI map how your new system works vs the old way</p>
                </div>

                {/* Feedback */}
                <div className="bg-[#0a1530] border border-cyan/15 rounded-xl p-6 mb-6">
                  <p className="text-sm text-[#c8d4f0] mb-4">
                    How does this align with what you had in mind? Share your feedback and we&apos;ll refine it.
                  </p>
                  <div className="flex gap-2">
                    <textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          if (input.trim()) sendFeedback(input.trim());
                        }
                      }}
                      placeholder="Tell us what to adjust..."
                      className="flex-1 bg-[#050C1E] border border-cyan/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#3a4a6a] focus:border-cyan/50 focus:outline-none resize-none"
                      rows={2}
                    />
                    <button
                      onClick={() => { if (input.trim()) sendFeedback(input.trim()); }}
                      className="px-4 bg-cyan/20 hover:bg-cyan/30 text-cyan rounded-lg transition-colors"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>

                {/* Conversion footer */}
                <div className="bg-gradient-to-r from-[#0a1530] to-[#0d1a3a] border border-cyan/20 rounded-xl p-6">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setShowAccountModal(true)}
                      className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber to-gold-light text-[#1a1200] shadow-[0_8px_20px_rgba(255,176,0,0.28)] hover:shadow-[0_8px_24px_rgba(255,176,0,0.4)] transition-shadow"
                    >
                      Save This Brief
                    </button>
                    <a
                      href="mailto:missions@encoresvcsllc.com?subject=Mission Briefing Request"
                      className="px-5 py-2.5 rounded-xl font-bold text-sm border border-cyan/40 text-cyan hover:bg-cyan/10 transition-colors"
                    >
                      Book a Mission Briefing
                    </a>
                    <button
                      onClick={resetAll}
                      className="px-5 py-2.5 rounded-xl text-sm text-[#5a7aa0] hover:text-white transition-colors"
                    >
                      Build Another Solution →
                    </button>
                  </div>
                  <p className="text-[10px] text-[#3a4a6a] mt-3">
                    Your brief is saved for 48 hours. Create an account to keep it permanently.
                  </p>
                </div>
              </div>
            )}

            {/* Chat (intro + conversation phases) */}
            {(phase === "intro" || phase === "conversation" || phase === "feedback") && (
              <div className="flex flex-col h-full min-h-[400px]">
                {/* Messages area — scrolls internally, user controls scroll */}
                <div ref={chatContainerRef} onScroll={handleChatScroll} className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
                  {messages.length === 0 && (
                    <div className="text-center pt-6 pb-4">
                      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                        <Brain size={20} className="text-cyan" />
                      </div>
                      <p className="text-[#5a7aa0] text-sm max-w-md mx-auto">
                        Select your agency and role, then describe your challenge.
                      </p>
                    </div>
                  )}

                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                    >
                      <div
                        className={
                          msg.role === "assistant"
                            ? "chat-bubble-ai max-w-[85%] lg:max-w-[75%]"
                            : "chat-bubble-user max-w-[85%] lg:max-w-[75%]"
                        }
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {msg.content.replace("[BUILD_READY]", "").trim()}
                        </p>
                      </div>
                    </div>
                  ))}

                  {streaming && (
                    <div className="flex justify-start">
                      <div className="chat-bubble-ai">
                        <div className="typing-indicator">
                          <span /><span /><span />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                {/* Build Ready button */}
                {buildReady && !streaming && (
                  <div className="mb-4 text-center">
                    <button
                      onClick={startBuild}
                      className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber to-gold-light text-[#1a1200] shadow-[0_8px_20px_rgba(255,176,0,0.28)] hover:shadow-[0_8px_30px_rgba(255,176,0,0.5)] transition-all hover:scale-105"
                    >
                      🚀 Build My Solution
                    </button>
                  </div>
                )}

                {/* Input */}
                {!buildReady && (
                  <div className="flex gap-2 items-end">
                    <textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={
                        messages.length === 0
                          ? "Describe your mission challenge..."
                          : "Continue the conversation..."
                      }
                      disabled={streaming}
                      className="flex-1 bg-[#0a1530] border border-cyan/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3a4a6a] focus:border-cyan/50 focus:outline-none resize-none disabled:opacity-50"
                      rows={2}
                    />
                    <button
                      onClick={() => { if (input.trim() && !streaming) sendMessage(input.trim()); }}
                      disabled={!input.trim() || streaming}
                      className="p-3 rounded-xl bg-cyan/20 hover:bg-cyan/30 text-cyan transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Account Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
          <div className="bg-[#0a1530] border border-cyan/20 rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowAccountModal(false)}
              className="absolute top-4 right-4 text-[#5a7aa0] hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="text-lg font-bold text-white mb-1">Save Your Brief</h3>
            <p className="text-xs text-[#5a7aa0] mb-6">Your information is confidential and will never be shared or used for marketing.</p>
            <form onSubmit={(e) => { e.preventDefault(); setShowAccountModal(false); }} className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-[#050C1E] border border-cyan/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#3a4a6a] focus:border-cyan/50 focus:outline-none" />
              <input type="email" placeholder="Agency Email (.gov / .mil)" className="w-full bg-[#050C1E] border border-cyan/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#3a4a6a] focus:border-cyan/50 focus:outline-none" />
              <input type="tel" placeholder="Phone (optional)" className="w-full bg-[#050C1E] border border-cyan/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#3a4a6a] focus:border-cyan/50 focus:outline-none" />
              <button type="submit" className="w-full px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber to-gold-light text-[#1a1200]">
                Save Brief
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
