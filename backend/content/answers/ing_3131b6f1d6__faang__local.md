---
qid: ing_3131b6f1d6__faang__local
question: 'Explain: What Subagents Are — Tools vs. Subagents: Building Effective AI
  Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 484
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:38:46-05:00'
sources: []
---

**Clarify**  
The interview asks: *“What are sub‑agents? How do they differ from tools, and how can we build effective agents without over‑engineering?”* I’ll assume the context is large‑language‑model (LLM) systems that orchestrate multiple components to solve a task.

**Approach**  
1. Define “tool” vs. “sub‑agent.”  
2. Explain why sub‑agents add value beyond simple tools.  
3. Outline minimal design principles for practical agents.  
4. Highlight pitfalls of over‑engineering (e.g., too many layers, brittle pipelines).

**Depth**  
- **Tools** are stateless API wrappers or scripts that perform a single function (e.g., web search, database query). The LLM calls them directly; the tool returns raw data.  
- **Sub‑agents** are autonomous mini‑LLMs (or domain‑specific models) with their own memory, planning loop, and interface. They can *reason*, *plan*, and *invoke other tools* internally before returning a consolidated result to the main agent.  
- Sub‑agents reduce cognitive load on the root LLM: it delegates complex sub‑tasks instead of “brain‑frying” everything.  
- Effective design keeps each sub‑agent focused (single responsibility), uses lightweight prompt templates, and limits recursion depth to avoid infinite loops.

**Edge Cases**  
- **Tool failure**: sub‑agents should have retry or fallback logic.  
- **State leakage**: ensure memory isolation between agents.  
- **Latency spikes**: monitor cumulative round‑trip times; too many nested calls can hurt performance.

**Optimize & Communicate**  
Start with a *single* orchestrator + one generic “execution” sub‑agent that handles all tool calls. Add specialized sub‑agents only when the task complexity grows (e.g., natural language generation vs. data extraction). Communicate this evolution clearly: “We’ll begin with minimal tooling, then iteratively add sub‑agents as needed, keeping the hierarchy shallow to avoid over‑engineering.”  

This structured answer demonstrates clear problem framing, a pragmatic plan, technical depth, awareness of edge cases, and an optimization mindset—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
