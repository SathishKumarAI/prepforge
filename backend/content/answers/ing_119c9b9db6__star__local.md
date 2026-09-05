---
qid: ing_119c9b9db6__star__local
question: 'Q: When would you use A2A for multi-agent orchestration versus keeping
  all agents in a single framework?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 355
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:56-05:00'
sources: []
---

**Situation:**  
At my last company we launched a smart‑home platform that had to coordinate dozens of device‑specific AI agents—speech, vision, motion control, and energy management—all while scaling to thousands of users per region. Our existing monolithic framework started choking on latency spikes during peak usage.

**Task:**  
I needed to redesign the orchestration layer so that each agent could run independently yet still collaborate in real time, without sacrificing end‑to‑end response times or developer productivity.

**Action:**  
I introduced an A2A (Agent‑to‑Agent) communication protocol built on lightweight gRPC streams and a message bus. Each micro‑agent was containerized with its own inference engine (TensorFlow Lite for vision, PyTorch Mobile for speech). We defined clear contracts: an “Intent” agent emits intents; a “Context” agent subscribes to relevant intents via the bus, enriches them, and publishes enriched events. I also added a lightweight orchestrator that only handled fail‑over routing, not state management. This separation let us scale agents horizontally and swap models without redeploying the whole stack.

**Result:**  
Latency dropped from 450 ms to under 120 ms during peak hours, and we cut deployment time for new agent versions by 70 %. The team also reported a 30 % reduction in bug‑related incidents because each agent could be tested in isolation. I learned that A2A shines when agents are naturally decoupled but still need tight coordination; keeping everything in one framework works best when the workload is small and tightly coupled, but it becomes a bottleneck as complexity grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
