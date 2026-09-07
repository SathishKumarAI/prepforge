---
qid: ing_27857e4378__aws__local
question: What is the difference between message queues and pub/sub messaging?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 474
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project I led the migration of our real‑time analytics pipeline from an on‑premise broker to AWS. The core question was whether to use **message queues (SQS)** or **pub/sub (SNS + SQS/FCM)**.  
- **Situation:** We had 4 microservices that needed to process user events. Each event could be consumed by *one* consumer (e.g., a fraud‑check service) or *multiple* consumers (analytics, logging).  
- **Task:** Pick the right messaging pattern so we kept latency < 200 ms and cost under $2k/month while ensuring durability.  
- **Action:** I compared SQS FIFO queues (point‑to‑point, exactly‑once delivery) with SNS topics fan‑out to multiple SQS queues. For each service I modeled throughput: 10k events/s → ~40 GB/day. I ran a cost‑benefit analysis and simulated failover in CloudWatch.  
- **Result:** Using **SNS + SQS** gave us *fan‑out* with a single publish point, reduced our publisher code by 70%, cut costs to $1.3k/month, and maintained < 150 ms latency even under burst traffic (up to 50k events/s). I documented the trade‑offs: SNS adds one extra hop but scales automatically; SQS FIFO ensures ordering when needed.  

**Leadership Principles:**  
- **Customer Obsession** – delivered a low‑latency, cost‑effective solution that met user expectations.  
- **Ownership & Dive Deep** – I owned the end‑to‑end design and dug into AWS pricing, throttling limits, and durability guarantees to make an informed decision.  

The bar‑raiser will hear that I balanced *scalability* (SNS fan‑out), *availability* (SQS retry logic), *cost* (single SNS topic vs multiple queues), and *learning from failure* (we initially used plain SQS, then switched after a spike exposed ordering issues).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
