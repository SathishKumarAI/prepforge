---
qid: ing_88039a21bd__star__local
question: 'Explain: second so if the load stays at — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 338
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:37-05:00'
sources: []
---

**Situation** – In 2020 I was part of a team tasked with redesigning the session‑store for our global e‑commerce platform. The existing DynamoDB table was hitting hot partitions during flash sales, causing read latency to spike from <10 ms to >200 ms, and our SLA demanded <50 ms.

**Task** – My goal was to implement a sharding strategy that would keep per‑partition write throughput below the 3,000 WCU limit while preserving strong consistency for user sessions. I had to do this without rewriting the client SDK or breaking backward compatibility.

**Action** – I introduced a “second‑so” hashing scheme: every session key was prefixed with a deterministic hash of its user ID and the current second (Unix epoch). This spread writes evenly across 1,024 partitions over time. I updated the application layer to append this prefix automatically and added a small TTL on the secondary index so that old shards aged out cleanly. We monitored CloudWatch metrics and used DynamoDB’s Auto Scaling to adjust provisioned capacity in real time.

**Result** – During a subsequent high‑traffic promotion, read latency dropped from 180 ms to 25 ms and write throughput stabilized at ~2,800 WCU per partition. The system handled a 4× traffic surge with no throttling events. I learned that even a simple “second‑so” key trick can transform a hot‑spot problem into a scalable design without costly infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
