---
qid: ing_d371a8dd14__think__local
question: MCP connects an agent to tools. What does A2A solve that MCP does not, and
  how do the two compose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 487
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:54:48-05:00'
sources: []
---

We need to produce a numbered thought process.**1️⃣ Clarify the question & assumptions**  
- *What is MCP?* Assume it’s “Model‑to‑Client” or “Multi‑Channel Pipeline” that connects an AI agent directly to external tools (e.g., APIs, databases).  
- *What is A2A?* Interpret as “Agent‑to‑Agent” communication—one agent invoking another agent’s capabilities.  
- *Goal:* Identify what A2A adds beyond MCP and how they can be composed.

**2️⃣ Mental model / framework**  
Use a layered abstraction diagram:  
```
User → Agent A (MCP) → Tool X
User → Agent A → Agent B (A2A) → Tool Y
```
- MCP handles low‑level tool execution.  
- A2A handles higher‑order orchestration, delegation, and coordination between agents.

**3️⃣ Step‑by‑step reasoning**  
1. List features of MCP: direct API calls, authentication, error handling for single tools.  
2. Identify gaps: no built‑in task decomposition, no semantic understanding across multiple agents, no shared context propagation.  
3. Show how A2A fills gaps: it can split a complex request into subtasks, route each to the most suitable agent, aggregate results, and maintain conversational state.  
4. Compose them: MCP becomes the execution engine for each sub‑agent; A2A orchestrates which MCP‑enabled agent runs when.

**4️⃣ Common traps**  
- Confusing *tool* with *agent*: remember MCP is tool‑centric, A2A is agent‑centric.  
- Overlooking context propagation: A2A must forward user intent to each sub‑agent; otherwise MCP will fail.  
- Ignoring error handling hierarchy: errors from tools should bubble up through the A2A layer for graceful degradation.

**5️⃣ Sanity check & verbal explanation**  
- Verify that every step of a composite task can be mapped to either an MCP call or an A2A delegation.  
- Explain aloud: “MCP is like a direct line to a tool; A2A is the traffic controller that decides which line each request should take and stitches the responses together.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
