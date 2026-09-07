---
qid: ing_689d6d1dfd__aws__local
question: 'Explain: Blocking vs Non-Blocking Algorithms — Blocking vs Non-Blocking
  Queue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 384
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:48-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last company we built a real‑time fraud detector for credit cards. The model had to score millions of transactions per second while guaranteeing no customer was denied service because of latency spikes. I needed to decide whether to process scores on a *blocking* or *non‑blocking* queue.

**Action (Dive Deep & Ownership)**  
I benchmarked two designs:

| Design | Architecture | Throughput (txn/s) | Avg Latency (ms) |
|--------|--------------|---------------------|------------------|
| **Blocking Queue** | SQS FIFO → Lambda → RDS | 12 k | 350 |
| **Non‑Blocking Queue** | Kinesis Data Streams → Fargate microservice → DynamoDB | 45 k | 120 |

The non‑blocking approach used a *Kinesis shard* per data source, allowing parallel consumer pods. I added a *retry buffer* in SQS for back‑pressure and configured Auto Scaling on Fargate to maintain 99.9% availability.

**Result (Deliver Results)**  
We achieved a **3× throughput increase** while cutting latency by **65 %**, reducing denied transactions from 0.8 % to <0.1 %. Cost dropped 20 % due to better resource utilization. The system survived a sudden spike (2× normal traffic) without SLA breach, proving the non‑blocking design’s resilience.

**Bar‑raiser takeaway**  
The interviewee shows *ownership* by driving the experiment, *deep dive* through metrics and trade‑offs, quantifies impact, and learns from the failure of the blocking approach to adopt a more scalable pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
