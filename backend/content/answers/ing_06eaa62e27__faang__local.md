---
qid: ing_06eaa62e27__faang__local
question: Design a Text2SQL agent for business users querying a warehouse with 5,000
  tables. What's hard, and how do you evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 477
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:25-05:00'
sources: []
---

**Clarify**  
We need an NLP‑driven assistant that turns natural language into SQL over a data warehouse containing ~5 k tables. The goal: high precision/recall for business users, minimal friction, and safe execution (no destructive ops). Ask about schema visibility, user roles, latency targets, and whether we support only SELECT or DML as well.

**Approach**  
1. **Schema indexing & vector search** – embed table/column names + docstrings into a dense vector space for fast lookup.  
2. **Intent & slot extraction** – fine‑tune a transformer (e.g., T5) on business query corpora to pull out predicates, aggregates, joins.  
3. **SQL skeleton generation** – template‑based decoder conditioned on extracted slots; fallback to rule‑based expansion for rare patterns.  
4. **Safety & optimization** – run the generated SQL through a planner to detect costly scans, enforce read‑only mode, and offer auto‑index hints.  
5. **Feedback loop** – capture user corrections, retrain continuously.

**Depth**  
- *Complexity*: Query parsing O(|q|), schema lookup O(log N) with ANN; overall latency < 200 ms for most queries.  
- *Trade‑offs*: Full transformer inference is heavy—use distillation or beam‑pruned decoding to balance speed vs. accuracy.

**Edge Cases**  
- Ambiguous entities → prompt user (“Did you mean table X or Y?”).  
- Nested subqueries beyond the model’s horizon → detect depth > 3 and ask for simplification.  
- Schema drift (new tables) → re‑index nightly, flag unseen columns at runtime.

**Optimize & Communicate**  
Explain to stakeholders that we’ll start with a baseline “select * from table where …” accuracy of ~85 % on a held‑out business‑query set, then iterate. Highlight that safety checks guarantee no destructive DML and that performance tuning will reduce average query time by 30 % over the next sprint. This narrative shows structured problem solving, clear assumptions, technical depth, and a path to measurable improvement—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
