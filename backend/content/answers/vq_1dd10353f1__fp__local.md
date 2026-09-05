---
qid: vq_1dd10353f1__fp__local
question: What is a Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 386
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:26-05:00'
sources: []
---

A **table** in data‑structure‑and‑algorithm (DSA) parlance is not merely an array; it is the *canonical mapping* that turns a key into a value through deterministic computation.  
Fundamentally, we face the problem of *associative retrieval*: given an input \(k\), produce an output \(v\) in time independent of the number of stored pairs \(|S|\). The naive solution scans all pairs, yielding \(O(|S|)\) time. To beat this we need a function that maps keys to storage locations with negligible collision probability.

The table’s design is guided by three principles:

1. **Uniform hashing** – a hash function \(h(k)\) distributes keys evenly over \(n\) slots, making the expected load per slot constant.
2. **Conflict resolution** – collisions are handled (open addressing, chaining, or probing), preserving the overall \(O(1)\) amortized access time.
3. **Space‑time trade‑off** – allocating more slots reduces collisions but increases memory; resizing balances this dynamically.

Thus a table is essentially a *probabilistic data structure* that leverages randomness (hashing) to achieve deterministic performance guarantees on average.

> **Non‑obvious insight:** The *load factor* \(\alpha = |S|/n\) governs not just speed but also the *expected number of probes* in open addressing. Even with a good hash function, if \(\alpha > 0.7\), probe sequences balloon exponentially, turning an \(O(1)\) average into \(O(n)\). Hence maintaining \(\alpha < 0.75\) is critical—often overlooked when focusing solely on the hash function itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
