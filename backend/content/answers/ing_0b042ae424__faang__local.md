---
qid: ing_0b042ae424__faang__local
question: You retrieved 50 candidate passages for a query but the model's useful context
  budget is ~10. How do you choose, and how do you know your choices are good?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 442
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:09:53-05:00'
sources: []
---

**Clarify**  
You have 50 candidate passages for a user query but the LLM can only ingest ~10 k tokens of context. The goal is to pick a subset that maximizes answer quality while staying within budget. Key assumptions:  
* All passages are pre‑ranked by relevance (e.g., BM25 or vector similarity).  
* Passages vary in length; some may be very long.  
* You have access to an evaluation oracle (human or automated metric) to validate quality.

**Approach**  
1. **Greedy token budgeting** – iterate through the ranked list, adding passages until adding another would exceed the budget.  
2. **Length‑aware scoring** – compute a relevance / token ratio for each passage and sort by that; pick top‑k by this score subject to the budget.  
3. **Cluster & diversify** – group passages into semantic clusters (e.g., via k‑means on embeddings) and select one representative from each cluster to avoid redundancy.

**Depth**  
- Compute `score_i = relevance_i / len_i`.  
- Sort descending, then accumulate tokens until total ≤ budget. Complexity: O(n log n).  
- For clustering, use a small k (e.g., 5–10) to keep overhead low; choose the most relevant passage per cluster.

**Edge Cases**  
* Extremely long single passages that exceed budget alone – truncate or split.  
* Highly similar top passages – may inflate redundancy; clustering mitigates this.  
* No clear relevance ranking – fallback to length‑only selection.

**Optimize & Communicate**  
- Validate with a held‑out set: run the LLM on selected subsets and measure BLEU/F1 against ground truth answers.  
- Iterate: adjust k or the relevance weighting if performance drops.  
- Explain trade‑offs: higher relevance scores yield better content but risk exceeding budget; clustering improves diversity at slight computational cost. This systematic, data‑driven selection ensures consistent, high‑quality responses within context limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
