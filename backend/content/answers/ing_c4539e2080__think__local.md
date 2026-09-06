---
qid: ing_c4539e2080__think__local
question: 'Tradeoffs: Where Does Fact X Go? — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 459
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:55:18-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
* Identify what “Fact X” refers to (a piece of knowledge, a belief, or data).  
* Decide whether we’re talking about *short‑term* vs. *long‑term* memory in an AI agent.  
* Assume the agent has limited capacity and must decide where to store new facts.

**2️⃣ Adopt a mental model**  
Use the classic **“working memory ↔ long‑term memory” trade‑off**:  
* Working (short‑term) = fast, context‑sensitive, volatile.  
* Long‑term = durable, generalizable, slower access.  
Map this onto *state* (the agent’s current situational variables) vs. *memory* (knowledge base).

**3️⃣ Reason step by step**  
1. Determine if Fact X is *temporally bound* (only needed for the current episode). → Store in state/working memory.  
2. If it has *general applicability* or will be reused across episodes, encode into long‑term knowledge.  
3. Check resource constraints: if working memory is saturated, consider offloading to a cache or external DB.  
4. Evaluate *confidence*: high‑certainty facts go to long‑term; uncertain ones stay in state until verified.

**4️⃣ Avoid common traps**  
* Don’t assume all facts belong in long‑term—over‑filling slows retrieval.  
* Don’t treat “state” as static; it evolves, so some facts may migrate from state to memory over time.  
* Beware of circular dependencies: a fact used to update state but also stored in memory can cause redundancy.

**5️⃣ Sanity‑check & communicate**  
* Re‑explain the decision logic aloud: “Fact X is context‑specific, so it stays in working memory; if we later need it elsewhere, we’ll promote it.”  
* Verify edge cases (e.g., a fact that becomes relevant after several episodes).  
* Summarize the trade‑off: *“Store in state for immediacy, in memory for persistence and reuse.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
