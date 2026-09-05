---
qid: ing_3306225352__think__local
question: 'Explain: Tools vs. Subagents: Building Effective AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 456
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:27:21-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - *What is meant by “tools” vs. “sub‑agents”?* Assume tools are stateless functions or APIs (e.g., a calculator, database query) that an agent calls on demand. Sub‑agents are mini‑models with their own internal state and policy, acting like autonomous sub‑tasks.  
   - *Goal:* build agents efficiently without excessive engineering.  

**2. Adopt a mental model of hierarchical planning**  
   - Treat the main agent as a high‑level planner that delegates to either a tool (function call) or a sub‑agent based on task complexity and statefulness needed.  

**3. Step‑by‑step reasoning**  
   1. **Identify stateless, well‑defined operations** → map them to tools; they’re cheap, deterministic, and easy to audit.  
   2. **Spot tasks that require memory or iterative refinement** → assign a sub‑agent with its own policy loop.  
   3. **Design the interface**: standardize input/output signatures for both tools and sub‑agents so the planner can invoke them uniformly.  
   4. **Implement fallback logic**: if a tool fails, hand over to a sub‑agent that can recover or retry.  

**4. Common traps to avoid**  
   - *Over‑engineering*: building a complex sub‑agent for a simple calculation.  
   - *Redundant state*: letting both the main agent and a sub‑agent maintain overlapping context.  
   - *Opaque interfaces*: poorly defined tool signatures that force ad‑hoc parsing.  

**5. Sanity‑check & verbalize**  
   - Run through a sample scenario (e.g., booking a flight). Ask: “Which steps are pure lookups?” → tools; “Which need negotiation or adaptation?” → sub‑agents.  
   - Explain the decision to a peer in plain terms, ensuring that each component’s role is clear and justified. This verbal check confirms you haven’t conflated tools with sub‑agents and keeps the architecture lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
