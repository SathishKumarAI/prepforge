---
qid: ing_d451ddfd85__think__local
question: 'Explain: What Adding Subagents Actually Costs — Tools vs. Subagents: Building
  Effective AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 525
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:57:23-05:00'
sources: []
---

**1️⃣ Clarify the goal and scope**  
- *What’s being asked?* We must explain why adding sub‑agents can be costly, then compare “tools” (utility functions) vs. true sub‑agents for building effective AI agents without over‑engineering.  
- *Assumptions:* The reader knows basic agent concepts but not deep RL or LLM tooling.

**2️⃣ Adopt a mental model**  
Use a **“layered architecture”** framework:  
- **Base layer:** Core policy / decision logic (LLM prompt).  
- **Utility layer:** Stateless tools (APIs, parsers).  
- **Agent layer:** Stateful sub‑agents that maintain their own memory & goal hierarchy.  

This lets us weigh the cost of each layer.

**3️⃣ Step‑by‑step reasoning**  
a. *Identify what a sub‑agent actually adds:* statefulness, separate planning loops, memory, error handling.  
b. *List the overheads:* extra context window usage, more prompts (context switching), increased inference latency, harder debugging, higher compute cost.  
c. *Contrast with tools:* Tools are stateless calls; they’re invoked on demand without new prompt overhead or memory management.  
d. *Show trade‑offs:* When a task truly needs persistent state (e.g., multi‑step negotiation) a sub‑agent pays off; otherwise, a tool is cheaper and simpler.  
e. *Provide guidelines:* Start with tools; only introduce a sub‑agent when the benefit > cost.

**4️⃣ Common traps to avoid**  
- *Confusing “tool” with “function call”:* Tools are simple API wrappers, not full agents.  
- *Assuming all stateful logic must be an agent:* Small caches or counters can stay in memory without a separate sub‑agent.  
- *Neglecting context‑window limits:* Sub‑agents often require extra prompt tokens for their own description and history.

**5️⃣ Sanity‑check & communicate clearly**  
- Re‑read the explanation to ensure each claim is supported by an example (e.g., booking a flight vs. retrieving weather).  
- Use analogies: “Tools are like one‑use gadgets; sub‑agents are like mini‑robots that remember their own mission.”  
- End with a concise takeaway: *“Add a sub‑agent only when the task’s complexity and persistence justify the extra cost; otherwise, lean on lightweight tools.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
