---
qid: ing_666ed132ea__faang__local
question: Define pass@k. Why is the naive way of computing it problematic, and what's
  the fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 427
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:32-05:00'
sources: []
---

**Clarify**  
*Pass@k* measures whether a model’s correct answer appears in its top‑k ranked outputs. For a query q, we generate an ordered list L of candidate answers and check if the ground truth is among the first k items. We assume a deterministic ranking mechanism, a single ground‑truth label per query, and that every candidate can be compared to the target.

**Approach**  
1. Generate all candidate answers for each q.  
2. Rank them (e.g., by confidence).  
3. For each q, see if the correct answer is in L[0:k].  
4. Compute the fraction of queries that satisfy this condition.

**Depth**  
The naive implementation loops over every query and scans its top‑k list until it finds a match or exhausts k. This yields O(Q × k) time and, more critically, can lead to *overcounting* when multiple identical answers appear in the ranked set—each occurrence may be counted as a separate success, inflating Pass@k.

**Fix**  
Treat each query’s candidate list as a **set** of unique predictions. After ranking, deduplicate before checking the top‑k window. This guarantees that each correct answer contributes at most once per query and eliminates bias from duplicate high‑confidence outputs. Complexity remains O(Q × k), but correctness is restored.

**Edge Cases**  
- Empty candidate set → Pass@k = 0.  
- k > |L| → treat as full list; still deduplicate first.  
- Multiple ground truths → extend to multi‑label Pass@k by checking any match.

**Optimize & Communicate**  
Use a hash set for O(1) deduplication and early exit once the correct answer is found. Explain that this preserves the metric’s intent—whether the model *has* the right answer in its top suggestions—while guarding against inflated scores due to duplicates, a subtle bug often missed in naive implementations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
