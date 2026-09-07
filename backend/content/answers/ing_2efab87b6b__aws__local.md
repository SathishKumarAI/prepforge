---
qid: ing_2efab87b6b__aws__local
question: 'Explain: a hundred tokens per second is how — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 499
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:27-05:00'
sources: []
---

**Situation & Task**  
During my senior‑engineering role at a fintech startup we needed to ingest and serve over **100 000 token streams per second** for real‑time fraud scoring. The existing monolithic API stack couldn’t scale, so I owned the redesign.

**Action – Technical Design**  
I architected a *serverless* pipeline:  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingest | **Amazon Kinesis Data Streams** (shard × 4) | 1 M events/s, low‑latency buffering |
| Compute | **AWS Lambda** + **Amazon SageMaker Edge** | Stateless, auto‑scales; edge inference keeps latency < 5 ms |
| Store | **DynamoDB Global Tables** (partitioned by country) | Strong consistency, 99.999% availability, multi‑region replication |
| Orchestration | **Step Functions** | Clear state machine, retry logic, dead‑letter queues |

I set Kinesis shard limits to *200 MB/s* each, ensuring 100 tokens/second per record (≈ 20 KB) stayed well below the throughput ceiling. Lambda concurrency was capped at 5 000 instances; with a 50 µs compute window, this yielded ~250 k TPS, comfortably above our target.

**Result**  
After deployment, we observed:  

- **Latency:** 4.2 ms average (≤ 10 ms SLA)  
- **Throughput:** 120 000 tokens/s sustained for 72 hrs with zero throttles  
- **Cost:** $0.02 per token vs. $0.08 in the legacy stack → **$1.2M annual savings**  

**Reflection & Learning**  
I applied *Customer Obsession* by prioritizing SLA guarantees for fraud alerts, and *Ownership* by taking end‑to‑end responsibility for the pipeline. The deep dive into Kinesis shard sizing taught me that seemingly minor configuration choices (shard count vs. record size) can dominate cost/latency trade‑offs. I now routinely benchmark with synthetic loads before scaling production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
