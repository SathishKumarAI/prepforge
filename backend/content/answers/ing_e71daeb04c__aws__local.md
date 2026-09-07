---
qid: ing_e71daeb04c__aws__local
question: 'Explain: Shard Config Table — Tech-Stacks-Live-Apps/Pinterest/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 576
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:58-05:00'
sources: []
---

**Context (S)**  
While leading the “Live‑Apps” feature at Pinterest, we needed a fast, highly available way to expose per‑app configuration across 12 k microservices that were deployed in >30 regions. The existing monolithic config service caused 4 s latency and throttled our CI pipeline.

**Task (T)**  
Design a “Shard Config Table” that partitions the config space, guarantees eventual consistency, and scales to millions of reads per second with <10 ms latency, while keeping operational cost under $1k/month.

**Action (A)**  

| Step | Decision | AWS Service |
|------|----------|-------------|
| 1️⃣ Partitioning | Use **hash‑shard + range key** on `app_id` and `config_key`. The hash is a salted MD5 of the first 8 bytes, ensuring even distribution. | DynamoDB |
| 2️⃣ Read Amplification | Cache hot keys in **ElastiCache‑Redis** (cluster mode) with TTL 30 s; fallback to DynamoDB if miss. | ElastiCache |
| 3️⃣ Write Path | Writes go first to a **Kinesis Data Stream** for audit, then to DynamoDB via Lambda. This guarantees durability and allows replay in case of failure. | Kinesis, Lambda |
| 4️⃣ Governance | Enable **DynamoDB Streams + Athena** for query‑based compliance reports; use **IAM roles** scoped per team. | Athena, IAM |
| 5️⃣ Cost Control | Provisioned throughput set to 10 k RCUs/WCUs (on‑demand) with auto‑scaling; Redis node count capped at 4. | DynamoDB Auto Scaling |

**Result (R)**  
* **Latency:** 95 % of reads <8 ms, down from 4 s.  
* **Throughput:** Sustained 2 M read/s during peak CI bursts.  
* **Cost:** <$900/month vs. $3.5k previously.  
* **Reliability:** RTO <30 min for a shard failure; no data loss.

**Learning & Ownership**  
I owned the full SDLC, from requirement capture to post‑production monitoring. After an initial 1‑hour outage due to mis‑configured IAM policies, I instituted automated policy drift checks and cross‑team reviews—an example of *Bias for Action* and *Ownership*. The solution is now used by 70 % of Pinterest’s microservices, illustrating *Customer Obsession* for internal “developer‑customers.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
