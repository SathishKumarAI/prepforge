---
qid: ing_ea713e6330__aws__local
question: 'Explain: Resource/Connection Pooling Pattern — Connectionpolling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 376
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:19-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built a real‑time recommendation engine for an e‑commerce platform with 5 M daily active users. The ML inference layer was hitting a bottleneck: each request opened a new connection to the PostgreSQL data store, causing >70 ms latency spikes and 4× CPU usage during peak hours.

**Action – Connection Pooling Pattern**  
I introduced a **connection pool** (using *pg‑pool* in Node.js) to reuse up to 200 idle connections. The pool’s max size was tuned via the `RDS` instance type (db.m5.large) and `max_connections=300`. I added health‑checks that removed stale sockets, and integrated with *Amazon CloudWatch* metrics (`DatabaseConnections`, `CPUUtilization`).  

To stay scalable, we auto‑scaled the pool size based on a 1‑minute moving average of latency. For high availability, each worker node ran behind an *Application Load Balancer* and used *Elastic Container Service (ECS)* with Fargate to avoid port conflicts.

**Result**  
Latency dropped from 70 ms to **12 ms** (−83 %) during peak traffic; CPU usage fell by 68 %. The cost of the RDS instance stayed flat while we gained a 30 % improvement in throughput.  

**Reflection** – I learned that *ownership* means iterating on infra, and *Dive Deep* requires monitoring every metric until the root cause is quantified. This pattern now underpins all our real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
