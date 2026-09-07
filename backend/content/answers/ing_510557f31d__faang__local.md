---
qid: ing_510557f31d__faang__local
question: 'Explain: Multi-agent and subagents — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 409
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:52:33-05:00'
sources: []
---

**Clarify**  
You’re asking how *multi‑agent* systems and *sub‑agents* (or “tool agents”) differ and why we use them for AI tool‑use tasks. I’ll assume: 1) the goal is to perform a complex task by delegating subtasks, 2) agents can communicate or share state, and 3) each sub‑agent has a specialized skill set.

**Approach**  
1. Define what constitutes an agent (autonomous, goal‑driven).  
2. Contrast single‑agent vs multi‑agent architectures.  
3. Explain sub‑agents as lightweight, domain‑specific modules.  
4. Show how they coordinate to solve higher‑level problems (e.g., a “plan” → “search”, “summarize”).  

**Depth**  
- *Multi‑agent*: Multiple autonomous entities that may negotiate or cooperate. Each maintains its own policy; overall behavior emerges from interaction.  
- *Sub‑agents*: Hierarchical layers where a master agent delegates to specialized workers (e.g., an image‑caption sub‑agent). Communication is usually via message passing or shared memory.  
- Tool use: The master agent issues a “call” request, receives output, and may revise the plan. This pattern reduces sample complexity because each sub‑agent can be pre‑trained on its niche.

**Edge Cases**  
- Deadlock if agents wait on each other.  
- Misaligned incentives (sub‑agent optimizing local reward).  
- Overhead of context switching or serialization.  

**Optimize & Communicate**  
To improve, use a *central planner* that caches sub‑agent results and reuses them, lowering latency. For interviewers: emphasize the trade‑off between modularity (easier debugging) vs coordination cost. Conclude by noting this architecture scales to thousands of tools in production AI assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
