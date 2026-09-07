---
qid: ing_60f4a22185__aws__local
question: 'Explain: Message Queue — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 461
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:50-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a migration of an on‑prem microservice stack to ECS/EKS. The legacy services used shared memory for high‑throughput event passing, but scaling out caused data races and dropped messages.

**Task (T)**  
I had to design a fault‑tolerant inter‑process communication layer that kept latency < 2 ms while supporting 10× traffic growth.

**Action (A)**  

| Requirement | Design Choice | AWS Service / Linux Feature |
|-------------|---------------|----------------------------|
| Decouple producers/consumers | Publish–Subscribe queue | Amazon SQS FIFO + SNS for fan‑out |
| Low latency & in‑process speed | In‑memory Redis Streams (or ZeroMQ) | `redis` on ECS, `libzmq` on Linux |
| Durability & retry | Dead‑letter queue + visibility timeout | SQS DLQ, SNS retry policy |
| Scalability | Partitioned queues per shard | Auto‑scaling group with CloudWatch alarms |

I implemented a hybrid: critical events go to an in‑memory ZeroMQ pipe for < 1 ms delivery; non‑critical or burst traffic is forwarded to SQS FIFO, guaranteeing at‑least‑once semantics. I added health checks and exponential back‑off retries.

**Result (R)**  
- Latency dropped from 12 ms to **< 2 ms** for 90th percentile.  
- Throughput increased from 5k msgs/s to **50k msgs/s** without new hardware.  
- Cost fell by 18 % thanks to reduced CPU usage and SQS’s pay‑per‑message model.

**Leadership Principles** – *Customer Obsession* (delivering reliable, low‑latency service) & *Ownership* (architecting a robust, maintainable solution). I documented failure scenarios, ran chaos tests, and iterated on queue depth—an example of *Dive Deep* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
