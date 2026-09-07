---
qid: ing_aabb9935ee__faang__local
question: 'Explain: Ambiguity clarification — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 436
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:26-05:00'
sources: []
---

**Clarify**  
The question asks how a “Text‑to‑SQL” agent resolves ambiguous natural‑language queries before generating SQL. I’ll assume the agent is NLP‑based, has access to a schema, and must produce a single correct query for execution.

**Approach**  
1. **Parse intent & entities** → tokenize, POS tag, dependency parse.  
2. **Map tokens to schema elements** → table/column disambiguation using name similarity + context.  
3. **Identify ambiguity sources** → multiple tables with same column name, vague aggregation, missing filters.  
4. **Resolve via constraints** → (a) ask the user for clarification, (b) infer from prior interactions or defaults, (c) rank candidate interpretations.

**Depth**  
- *Entity resolution*: Levenshtein distance + schema‑specific synonyms; if two tables share “id”, use column usage patterns to decide.  
- *Uncertainty quantification*: Bayesian NER gives a probability per mapping; if the top two scores are within 0.1, flag as ambiguous.  
- *Clarification dialog*: Prompt “Did you mean table A or B?” and wait for user input. If no response, fall back to the most frequent usage in the knowledge base.  
- Complexity: O(|tokens| · log n) for lookup; interactive clarification adds negligible overhead.

**Edge Cases**  
- User refers to a non‑existent column → agent should return an informative error instead of a syntax error.  
- Contextual ambiguity (e.g., “last month”) needs date parsing and time zone handling.  
- Multi‑step queries: if the user’s intent spans several tables, the agent must chain subqueries.

**Optimize & Communicate**  
Improvements include caching resolved mappings for common phrases and incorporating a learning component that updates priors from successful clarifications. I would explain to interviewers that my solution balances automated inference with human‑in‑the‑loop clarification, ensuring correctness while keeping latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
