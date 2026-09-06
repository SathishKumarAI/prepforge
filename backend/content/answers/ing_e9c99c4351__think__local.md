---
qid: ing_e9c99c4351__think__local
question: 'Q: Your RAG evaluation pipeline costs $500/day in LLM judge calls. How
  do you reduce it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 481
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:27:58-05:00'
sources: []
---

**1. Clarify the problem and assumptions**  
   - *What* is being charged: only the LLM‑judge calls?  
   - *When* do they occur (every sample, every epoch, every iteration)?  
   - *How many* calls per day currently?  
   - Are there any constraints on accuracy or latency that must stay intact?

**2. Adopt a “cost–benefit” mental model**  
   - Treat each LLM call as an expensive resource: cost = price × number of calls.  
   - Goal: reduce the *number* of calls without hurting evaluation quality beyond acceptable limits.

**3. Step‑by‑step reasoning**  
   1. **Profile usage** – log how many calls per pipeline stage, and which stages are most frequent.  
   2. **Prune unnecessary calls** – e.g., skip judge on samples that clearly pass/fail by simple heuristics.  
   3. **Batch requests** – group multiple judgments in a single API call if the provider supports it.  
   4. **Cache results** – store judgments for identical inputs; reuse when the same sample appears again.  
   5. **Replace or augment judges** – use lightweight rule‑based checks or smaller LLMs for early filtering, reserving the expensive judge only for borderline cases.  
   6. **Schedule smarter** – run heavy evaluations during off‑peak pricing windows if the API offers variable rates.

**4. Avoid common traps**  
   - Don’t over‑simplify: removing all judge calls may collapse your metric.  
   - Beware of “caching too aggressively”: stale judgments can bias results.  
   - Don’t assume batch size always reduces cost—API pricing per token may still dominate.

**5. Sanity‑check & communicate**  
   - Calculate the projected new daily cost: `new_calls × price_per_call`.  
   - Validate that evaluation variance stays within acceptable limits (e.g., run a small pilot).  
   - Present the plan as “We’ll reduce calls by X%, keep accuracy Y% of baseline, and expect a $Z savings per day.” This shows both quantitative impact and risk mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
