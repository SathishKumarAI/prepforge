---
qid: ing_6df4b506cb__faang__local
question: 'Explain: Number of documents in the shard cannot exceed [2147483519]'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 421
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:59:25-05:00'
sources: []
---

**Clarify**  
You’re asking why a MongoDB shard (or similar distributed index) limits its document count to *2 147 483 519* (≈2^31‑1). Confirm whether this is the maximum per‑shard collection size or an internal counter limit, and note that it’s one less than the signed 32‑bit integer max.

**Approach**  
Explain the underlying data structure: a 32‑bit signed int tracks the document count. When the counter reaches `INT_MAX` (2 147 483 647), MongoDB reserves two values for special markers (`+1`, `-1`). Thus the usable maximum is `INT_MAX – 8 = 2 147 483 519`. Outline why the system caps at this value rather than allowing arbitrary growth.

**Depth**  
- **Counter type:** `int32_t` in C++ → range [−2^31, 2^31‑1].  
- **Special values:** The last two integers are used for internal bookkeeping (e.g., “shard removed” flag, sentinel).  
- **Overflow prevention:** Prevents wrap‑around that could corrupt shard metadata or mis‑route queries.  
- **Implication:** At this ceiling, the collection cannot accept new writes until sharding is rebalanced or the counter reset.

**Edge Cases**  
- Extremely large collections (>2 B docs) → triggers “shard count exceeded” error.  
- Multi‑tenant deployments where shards share counters could hit limits sooner.  
- Testing: bulk inserts to approach the limit, then attempt one more write; verify graceful failure and proper error code.

**Optimize & Communicate**  
Suggest mitigation strategies: enable *automatic sharding* to split collections before hitting the cap, or use a 64‑bit counter in custom deployments. Conclude by stressing that this design choice balances performance (32‑bit arithmetic) with safety (preventing overflow).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
