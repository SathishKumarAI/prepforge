---
qid: ing_a9a7388809__aws__local
question: 'Explain: Search Use Cases — MongoDB: The World\u2019s Leading Modern Data
  Platform | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 538
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:58-05:00'
sources: []
---

**Context (Situation):**  
When I joined the data‑platform team at a fintech startup, our search layer was a single‑node MongoDB cluster that struggled under 10 k concurrent queries per day, leading to >300 ms latency for 90% of requests. The CTO asked me to evaluate whether MongoDB’s modern search features could replace our legacy Elastic stack.

**Task (Goal):**  
Design a scalable, cost‑effective search solution using MongoDB Atlas that guarantees <150 ms latency at peak load while keeping monthly spend under $15k.

**Action (Approach & Design):**  

| AWS Service | Role |
|-------------|------|
| **Amazon EC2 + EBS** | Host MongoDB Atlas cluster (sharded, 3‑node replica set). |
| **AWS Lambda + API Gateway** | Stateless search API layer; auto‑scales to traffic spikes. |
| **Amazon CloudWatch & X-Ray** | Metrics and tracing for latency and error budgets. |
| **AWS Cost Explorer** | Continuous cost monitoring. |

1. **Sharding strategy:** 3 shards, each with 2 nodes (primary + secondary) to distribute writes/reads.  
2. **Atlas Full‑Text Search Indexes** on `title`, `description`, `tags`.  
3. **Read/write split:** 80% reads served from secondaries; write traffic routed to primaries via read preference “secondaryPreferred.”  
4. **Auto‑scaling Lambda:** Concurrency target set to 1,000; cold starts mitigated with provisioned concurrency.  
5. **Cost controls:** Spot instances for secondary nodes; reserved capacity for primary.  

**Result (Impact):**  
- Latency dropped from 300 ms to **115 ms average**, 95th percentile <180 ms.  
- Query throughput increased by **4×** without downtime.  
- Monthly cost reduced from $22k to **$13.5k** (≈40% savings).  

**Reflection (Learning & Ownership):**  
I proactively monitored query patterns, discovered a hotspot in the `tags` field, and added a compound index—this prevented future performance regressions. By owning the end‑to‑end pipeline, I demonstrated *Ownership* and *Dive Deep*, turning a legacy pain point into a scalable, cost‑efficient asset that aligns with Amazon’s *Deliver Results* principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
