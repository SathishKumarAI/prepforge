---
qid: ing_6df4b506cb__fp__local
question: 'Explain: Number of documents in the shard cannot exceed [2147483519]'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 526
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:58:24-05:00'
sources: []
---

In a shard the *document count* is stored as a single signed 32‑bit integer.  
That means the maximum positive value it can hold is  

\[
2^{31}-1 = 2147483647 .
\]

The shard limit of **2 147 483 519** is just 128 less than this theoretical ceiling.  
Why that small margin? Two things:

| Reason | Effect |
|--------|--------|
| **Reserved sentinel value** | The integer `-1` (or a very large positive number) is often used to signal “unknown” or “not yet calculated.” If we allowed the counter to reach exactly \(2^{31}-1\), an increment would overflow and wrap back to \(-2^{147\,483\,648}\), corrupting all subsequent counts.  By capping at \(2^{31}-1-128\) we keep a safety buffer for such sentinel values and for any internal bookkeeping that might temporarily add a few hundred documents during compaction or rebalancing. |
| **Consistency across distributed nodes** | Shards may be replicated, split, or merged. The counter is copied in the shard metadata; if one node reports a count slightly above the limit, another node could interpret it as an overflow and trigger a re‑synchronization. Keeping the count well below the int boundary eliminates that ambiguity. |

The deeper principle at play is **overflow safety in fixed‑width integer arithmetic**: when a counter is part of a distributed consensus protocol, any wrap‑around silently changes the logical state from “many documents” to “zero,” breaking invariants and potentially causing duplicate deletes or missing updates.

A non‑obvious insight people often miss is that this 128‑document buffer isn’t about storage capacity—it’s about *logical safety*. Even a single overflow can invalidate entire indexes, so the limit protects correctness more than space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
