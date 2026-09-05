---
qid: vq_2094ba915c__star__local
question: When To Use Two Pointers?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 327
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:55-05:00'
sources: []
---

**Situation:**  
At my last internship I was asked to build a feature that highlighted duplicate product listings on an e‑commerce platform. The dataset had 1.2 million SKU IDs, already sorted by category and then by ID. Our goal was to flag any consecutive duplicates so the UI could collapse them into a single card.

**Task:**  
I needed an algorithm that ran in linear time with minimal memory overhead, because the service was called millions of times per day.

**Action:**  
Instead of hashing or building a map, I applied a two‑pointer technique. One pointer (`i`) started at the first element; the second pointer (`j`) lagged one step behind. As I iterated through the array, I compared `sku[i]` with `sku[j]`. If they matched, I marked both as duplicates and advanced `i`; if not, I moved both pointers forward. This O(n) scan required only a few integer variables and no extra data structures.

**Result:**  
The duplicate‑flagging routine ran in 0.8 seconds on the full dataset, shaving 40% off the original map‑based approach. It also reduced memory usage from ~50 MB to under 1 KB. I learned that two pointers are ideal for problems involving sorted sequences where you need to examine adjacent or paired elements with constant space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
