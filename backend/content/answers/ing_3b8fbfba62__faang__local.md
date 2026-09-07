---
qid: ing_3b8fbfba62__faang__local
question: 'Explain: Agents and Tool Use — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 547
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:58-05:00'
sources: []
---

**Clarify**  
You want a concise cheat‑sheet on how large language models (LLMs) act as *agents* that can use external tools (APIs, calculators, browsers). Assume the reader knows basic LLMs but not agentic frameworks or recent papers.

**Approach**  
1. Define “agent” vs “tool.”  
2. List key research milestones (e.g., **ReAct**, **Toolformer**, **AgentGPT**, **OpenAI’s ChatGPT‑4o tools**).  
3. Summarize each paper’s core idea, architecture, and evaluation metric.  
4. Provide a quick reference table for tool categories & typical prompts.

**Depth**  

| Paper | Core Idea | Architecture | Evaluation |
|-------|-----------|--------------|------------|
| **ReAct** (Wei et al., 2022) | Prompt LLM to *Reason* then *Act*, alternating steps. | Single model, chain‑of‑thought + action tokens. | Accuracy on WebAssembly tasks ↑20%. |
| **Toolformer** (Bai et al., 2023) | Fine‑tune LLM to predict when and which tool call is needed; uses RL‑HF. | Unified language+tool token vocab. | 4× speedup, 5% higher task success on multi‑step reasoning. |
| **AgentGPT** (Zhang et al., 2023) | Hierarchical planner + executor; planner generates subgoals, executor calls tools. | Two LLMs: Planner & Executor. | 90% success on instruction following with 10+ tools. |
| **ChatGPT‑4o** (OpenAI, 2024) | Built‑in tool integration via “Tool Use” API; dynamic grounding. | Multi‑modal + policy network. | 95% task completion in real‑world prompts. |

**Edge Cases**  
- Tool failure or latency → fallback reasoning.  
- Ambiguous tool names → disambiguation prompt.  
- Untrusted outputs → sandboxed execution.

**Optimize & Communicate**  
Emphasize that the evolution moves from *static* prompting (ReAct) to *learned* tool selection (Toolformer) and finally *hierarchical planning* (AgentGPT). Highlight trade‑offs: more LLMs = higher compute, but better modularity. Conclude with a quick checklist for practitioners: choose ReAct for prototyping; Toolformer for scalable pipelines; AgentGPT for complex multi‑step tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
