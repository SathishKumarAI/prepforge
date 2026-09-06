---
qid: ing_5234d2b69f__think__local
question: How is a system prompt for a long-running agent different from one for a
  single-shot feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 460
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:25:33-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- *System prompt* refers to the initial instruction given to an LLM that shapes its behavior throughout a session.  
- *Long‑running agent*: an entity that keeps interacting over time (e.g., a chatbot, a task‑planner).  
- *Single‑shot feature*: a one‑off request where the model produces a single output and then stops.  
Assume both use the same underlying LLM but differ in interaction pattern.

**2️⃣ Mental model: “Stateful vs Stateless”**  
Think of the prompt as setting up a *context window* that persists or resets.  
- **Stateless** (single‑shot): context is only what’s sent with the request; no memory of prior turns.  
- **Stateful** (long‑running agent): context includes past dialogue, goals, and any internal variables.

**3️⃣ Step‑by‑step reasoning**  
1. Identify *what must be remembered* (user intent, task plan, constraints).  
2. Design the prompt to embed that memory or provide a mechanism for the model to retrieve it (e.g., “You are an assistant… keep track of X”).  
3. For long runs, include directives about updating state (“After each turn, append your response to the context”).  
4. For single‑shot, keep the prompt concise; no need to mention continuity or updates.

**4️⃣ Common traps**  
- Assuming a single prompt can magically remember everything: it can’t unless you feed past turns back in.  
- Overloading the system prompt with too many rules for a short task—reduces flexibility.  
- Forgetting that longer context consumes token budget; balance detail vs length.

**5️⃣ Sanity‑check & verbalize**  
Ask yourself: “If I were to replay this session, would the model still know what happened earlier?” If yes, it’s stateful. If no, it’s single‑shot. Explain that a long‑running prompt explicitly includes continuity instructions; a single‑shot does not. This reasoning pattern can be reused whenever distinguishing between persistent and one‑off AI interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
