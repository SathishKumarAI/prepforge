---
qid: ing_5c719b4f38__think__local
question: 'Explain: Distinguish working memory from persistent memory in agent design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 420
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:05:17-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - *Working memory* = short‑term, task‑specific buffer that holds information needed for current reasoning or action planning.  
   - *Persistent memory* = long‑term store of facts, experiences, policies that survive across episodes and can be retrieved later.  
   Assume we’re talking about a symbolic/structured agent architecture (e.g., BDI) rather than raw neural nets.

**2. Adopt a mental model**  
   Think of the agent as having two layers: an *online* layer (working memory, active plans) that is volatile and an *offline* layer (persistent memory) that is durable. Use the “buffer + database” analogy.

**3. Step‑by‑step reasoning**  
   - Identify what data needs to be instantly accessible (e.g., current sensory input, goal hierarchy).  
   - Map that to working memory: it can be overwritten, limited in size, refreshed each cycle.  
   - Determine what must survive long runs (e.g., learned rules, world model).  
   - Place that in persistent memory: indexed for efficient retrieval, subject to consolidation.

**4. Common traps to avoid**  
   - Confusing “short‑term” with “temporary”; working memory can persist across a few cycles but not forever.  
   - Overloading working memory with long‑term knowledge—this slows planning.  
   - Assuming persistence implies immutability; memories are often updated or pruned.

**5. Sanity‑check & communicate**  
   • Ask: “If the agent restarts, does this data survive?” → persistent.  
   • If it’s needed only for the current action sequence, label it working.  
   Explain that efficient agents dynamically transfer useful information from persistent to working memory just before use, then possibly write back updates afterward. This clear separation keeps reasoning fast while still enabling learning over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
