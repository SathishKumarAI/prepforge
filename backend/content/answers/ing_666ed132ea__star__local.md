---
qid: ing_666ed132ea__star__local
question: Define pass@k. Why is the naive way of computing it problematic, and what's
  the fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 320
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:52:46-05:00'
sources: []
---

**Situation**  
During a recent product launch we were evaluating an open‑source recommendation model for our e‑commerce platform. The key metric was *pass@k*, i.e., whether at least one relevant item appeared in the top k predictions.

**Task**  
I had to calculate pass@k accurately across 50,000 users while keeping latency under 10 ms per request so we could use it for real‑time ranking tweaks.

**Action**  
The naive approach was to run the model once per user and then check if any relevant item landed in the top k. This meant re‑computing scores for every candidate item, even those that would never appear in the final list, blowing up CPU usage. Instead, I implemented a two‑stage pipeline: first a lightweight “candidate generator” (using locality‑sensitive hashing) reduced the pool to 200 items; then a batched GPU kernel scored only these candidates. Finally, I used a single pass through the sorted scores to compute the pass@k flag per user in O(k log k). This avoided redundant computations and leveraged vectorized operations.

**Result**  
The refactor cut inference time from 12 ms to 6 ms per request (50% faster) while maintaining identical accuracy. Pass@10 increased from 78 % to 82 % after tuning the candidate generator. I learned that careful batching and early pruning are essential when scaling ranking metrics like pass@k.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
