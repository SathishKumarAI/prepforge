---
qid: ing_9864cae37e__faang__local
question: 'Explain: When (and when not) to use agents — Building Effective AI Agents
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 503
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:39:11-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *when* it makes sense to build an “AI agent” per Anthropic’s framework and when we should opt for a simpler model or tool. I’ll assume the audience knows basic ML concepts but not the agent taxonomy.

**Approach**  
1. Define what an AI agent is (per Anthropic).  
2. List scenarios that justify agents: complex, multi‑step tasks, autonomy, continuous learning, and safety constraints.  
3. Contrast with simpler alternatives: stateless LLM prompts, rule‑based systems, or fine‑tuned models.  
4. Summarize trade‑offs (compute, latency, interpretability).  

**Depth**  
Anthropic’s agents are *goal‑driven*, *memory‑aware* loops that can query external tools and update internal state. Use them when:  
- **Sequential reasoning** is required (e.g., booking a trip or writing a multi‑chapter story).  
- The task involves **dynamic environment interaction**—the agent must observe, decide, act, and learn from feedback.  
- **Safety & alignment** are critical; agents can enforce guardrails via prompt injection and policy checks at each step.  
- There’s a need for **modular extensibility** (plug‑in APIs, custom tools).  

When not to build an agent:  
- For *single‑shot* classification or generation where a static prompt suffices.  
- When latency constraints forbid iterative loops.  
- If the problem is deterministic and doesn’t benefit from memory or tool use.  

Complexity scales with the number of steps and external calls; each round adds inference cost and potential error propagation, so keep the agent loop shallow unless necessary.

**Edge Cases**  
- **Non‑deterministic APIs** can break state consistency—use idempotent calls or checkpoints.  
- **Hallucinations** may accumulate over iterations—implement sanity checks or human‑in‑the‑loop overrides.  

**Optimize & Communicate**  
Start with a *prototype* that uses a single tool call; profile latency and accuracy. If performance degrades, consider caching results or reducing recursion depth. When explaining to stakeholders, emphasize the trade‑off: agents give autonomy and safety at the cost of higher compute and complexity. This structured rationale aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
