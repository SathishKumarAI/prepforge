---
qid: ing_3506a3c83b__think__local
question: 'Explain: When to Use a Subagent — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 413
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:31:18-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - What is the task? (e.g., a chatbot that must browse, compute, or manipulate data)  
   - Do we need *stateful* decision‑making over multiple turns, or just isolated tool calls?  
   - Assume the base LLM can invoke external APIs but may not maintain complex internal state.

**2️⃣ Adopt a “tool vs. subagent” mental model**  
   - **Tools**: stateless functions with clear input/output; best for single‑shot queries (e.g., translate, fetch weather).  
   - **Subagents**: mini‑agents that hold memory, plan, and orchestrate multiple tools over time; useful when the task requires multi‑step reasoning or dynamic goal adjustment.

**3️⃣ Step‑by‑step decision logic**  
   1. Identify if the task needs *persistent context* (e.g., a user’s preferences).  
   2. If yes → consider a subagent that stores state and decides which tool to call next.  
   3. If no → a simple tool chain suffices; invoke tools sequentially from the LLM prompt.

**4️⃣ Common pitfalls to avoid**  
   - Over‑engineering: adding a subagent when a single tool would do.  
   - Forgetting to expose tool metadata (e.g., name, description) so the agent can reason about them.  
   - Neglecting to serialize/deserialize complex data between tools and subagents.

**5️⃣ Sanity‑check & verbalize**  
   - “Does this task need back‑and‑forth interactions or only a one‑off result?”  
   - “Can the LLM handle all reasoning, or would a subagent’s planning layer reduce hallucination?”  
   - If uncertain, start with tools; iterate to a subagent if errors persist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
