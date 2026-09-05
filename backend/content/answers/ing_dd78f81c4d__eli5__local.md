---
qid: ing_dd78f81c4d__eli5__local
question: 'Explain: Durability — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 172
total_tokens: 331
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:24:59-05:00'
sources: []
---

**Durability – the “sealed‑letter” guarantee**

Think of a database transaction like writing a letter on paper and putting it in an airtight, fireproof safe. Once you close the safe (commit), the paper can’t be lost or altered—no matter what happens next (power failure, crash). That’s *durability*: after a commit, the data stays forever.

In system design, durability is achieved by writing changes to a durable medium first (a log on disk) before marking them “done.” If the machine crashes, the log can be replayed to recover the exact state. Just as you trust that your sealed letter will survive a fire, users trust that committed data will never disappear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
