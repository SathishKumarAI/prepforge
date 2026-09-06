---
qid: ing_510557f31d__fp__local
question: 'Explain: Multi-agent and subagents — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 487
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:57:16-05:00'
sources: []
---

**Why agents need sub‑agents**

At its core an *agent* is a function \(f\) that maps observations \(o_t\) to actions \(a_t\).  
When the environment is complex—multiple goals, constraints, or modalities—\(f\) must solve several intertwined sub‑problems.  
Rather than hand‑crafting a monolithic policy, we decompose \(f\) into a *hierarchy*:

1. **High‑level manager**: chooses which sub‑task to pursue (e.g., “search the web”, “write code”).  
2. **Sub‑agents**: specialized modules that solve their own Markov decision processes (MDPs).  

This mirrors **optimal control**: the overall value \(V^\pi(s)\) satisfies Bellman’s equation, and by decomposing into sub‑MDPs we can write
\[ V(s)=\max_{k}\bigl(r_k + \gamma\,\mathbb{E}[V(T_k(s))]\bigr), \]
where each \(T_k\) is the transition induced by sub‑agent \(k\).  
The decomposition reduces variance and improves sample efficiency, because each sub‑agent can learn with a smaller state space and reward signal.

**Tool use as a special case**

When an agent calls an external API (e.g., language model or database), that call behaves like a *latent action*—the agent commits to a “tool” and receives the tool’s output.  
Treating each tool as a sub‑agent turns the problem into **multi‑modal policy learning**: the manager learns when to invoke which modality, while each tool learns its own mapping from prompts to outputs.

**Non‑obvious insight**

Most people assume that more sub‑agents simply add overhead. In fact, *information bottlenecks* arise only if sub‑agents share a single communication channel. By allowing **structured inter‑agent messages** (e.g., embeddings of intent), we preserve global coherence while keeping each sub‑agent’s complexity low—essential for scalable AI systems that truly “use tools” rather than just call them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
