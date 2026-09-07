---
qid: ing_940debb1cd__faang__local
question: 'Explain: The Decision Framework — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 459
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:38-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *“Decision Framework – Tools vs. Subagents”* in AI agents and how to build them without over‑engineering. I’ll assume we’re talking about autonomous systems that can call external services (tools) or instantiate lightweight sub‑components (subagents), all orchestrated by a single decision engine.

**Approach**  
1. Define the *Decision Engine* as the core policy loop (perception → plan → act).  
2. Distinguish **Tools** (stateless APIs, e.g., language models, vision services) from **Subagents** (stateful micro‑tasks with internal memory and policies).  
3. Map a high‑level workflow: *select*, *invoke*, *integrate*.

**Depth**  
- **Decision Engine**: uses a prompt‑based or RL policy to choose the next action type.  
- **Tools**: invoked via function calls; minimal context, fast latency, easy rollback.  
- **Subagents**: encapsulate recurring logic (e.g., scheduling, negotiation), maintain internal state, can learn locally.  
- *Over‑engineering* is avoided by limiting subagent complexity to the smallest reusable unit that still solves a clear problem, and by favoring tools for one‑shot or stateless tasks.

**Edge Cases**  
- Tool failures → fallback to a safe subagent.  
- Subagent drift (state corruption) → periodic checkpoint/restart.  
- Latency spikes when many subagents run concurrently.

**Optimize & Communicate**  
- Use a lightweight registry to cache tool/subagent outputs, reducing redundant calls.  
- Measure *time‑to‑completion* and *memory footprint*; iterate on the granularity of subagents.  
- Narrate by framing each component as a “decision node” that can be swapped or upgraded without touching the core engine—this keeps evolution linear and testable.

This framework balances flexibility with simplicity, ensuring agents remain maintainable while still leveraging powerful tools and modular sub‑components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
