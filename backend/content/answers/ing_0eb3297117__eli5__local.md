---
qid: ing_0eb3297117__eli5__local
question: 'Explain: When to unshard a collection — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 231
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:58:47-05:00'
sources: []
---

**When to “unshard” a collection in MongoDB?**

Think of sharding like splitting a big library into many tiny branches so each branch only holds a portion of the books. Each branch (shard) handles requests for its own section, speeding up access and keeping any one branch from getting overloaded.

Sometimes the library’s layout changes: maybe the books are now arranged by author instead of genre, or the collection is so small that sending every request to many branches just adds unnecessary traffic. In these cases it’s better to bring all the books back into a single building—**unsharding**.

You unshard when:
- The data set shrinks and no longer needs distribution.
- Workloads become uneven, with one branch getting most of the traffic.
- You want simpler backup, restore, or management because everything sits in one place.

Unsharding is like closing all the branches and moving everyone back to a single, well‑organized library. It reduces complexity and can improve performance when the extra distribution isn’t needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
