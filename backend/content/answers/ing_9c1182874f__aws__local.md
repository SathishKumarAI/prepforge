---
qid: ing_9c1182874f__aws__local
question: 'Explain: Cache Invalidation — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 399
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:42-05:00'
sources: []
---

**Situation / Task** – I was tasked to build a real‑time recommendation engine that served personalized content within **50 ms** of user interaction. The data source (CRM) updated user profiles continuously, so the cache behind the recommendation service had to stay fresh without pulling from the database on every request.

**Action** –  
1️⃣ **Capture changes**: I wired the CRM’s RDS MySQL instance to an Amazon **DynamoDB Streams** via a *Change Data Capture* (CDC) Lambda that parsed INSERT/UPDATE events.  
2️⃣ **Invalidate cache**: The Lambda published the key‑value pair to an **Amazon SNS topic**, which triggered another Lambda that performed a `DELETE` on the relevant entry in **ElastiCache Redis**.  
3️⃣ **Fallback strategy**: If the cache miss persisted for > 5 s, the service read directly from RDS and repopulated Redis.

I chose **SNS + Lambda** over Kinesis because the event rate (~200 k events/day) was modest and latency was critical; SNS guarantees < 10 ms delivery. Using **ElastiCache** keeps reads in‑memory, satisfying the 50 ms SLA while keeping RDS under load.

**Result** – Cache hit ratio rose from **68 % to 97 %**, cutting recommendation latency from 120 ms to 42 ms and reducing RDS read traffic by **70 %**. The system scaled horizontally with minimal cost (≈$0.15/hr for Lambda + $0.30/hr for Redis).  

**Reflection** – I learned that *ownership* means anticipating failure modes: the fallback read path prevented recommendation stalls during cache propagation delays, a key lesson for future CDC designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
