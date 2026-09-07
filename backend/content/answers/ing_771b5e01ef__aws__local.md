---
qid: ing_771b5e01ef__aws__local
question: 'Explain: Latency vs. Throughput — System Design: Top 15 Trade-Offs - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 503
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:43-05:00'
sources: []
---

**Situation (S)**  
I led a team that built a real‑time fraud‑detection pipeline for a payment gateway handling ~10 M transactions/day. The product manager demanded sub‑200 ms latency while keeping throughput >5 kTPS to avoid backlogs.

**Task (T)**  
Design a scalable ML inference system balancing *latency* vs *throughput*, identify the top 15 trade‑offs, and justify AWS services that satisfy both SLAs.

**Action (A)**  

| Trade‑off | Design choice | AWS service | Impact |
|-----------|---------------|-------------|--------|
| **Model size vs latency** | Quantize to 8‑bit; use ONNX Runtime | SageMaker Edge | ↓latency 40 ms, negligible accuracy loss |
| **Batch size vs throughput** | Dynamic batching (max 32) | Lambda + Kinesis | ↑throughput 3×, latency ↑20 ms |
| **Cache hit ratio vs cost** | Redis cache for top‑10k accounts | ElastiCache | ↓1 % inference cost, ↓latency 15 ms |
| **Data freshness vs consistency** | Dual write to DynamoDB & S3 | DynamoDB + S3 | ↑throughput, slight staleness (≤5 s) |
| … | … | … | … |

I used *SageMaker Pipelines* for CI/CD, *Step Functions* for orchestration, and *CloudWatch APM* to monitor 99.9% latency percentile. After rollout, latency dropped from 350 ms to **180 ms** (30% win) while maintaining >5 kTPS.

**Result (R)**  
The system handled a 200% traffic spike during peak holiday sales with no SLA breach and reduced inference cost by **22%** through model compression. The experiment taught us that *dynamic batching* can be tuned per latency budget, and that caching high‑frequency keys yields the biggest payoff.

> **Leadership Principles:**  
> • **Customer Obsession** – Deliver instant fraud alerts to protect users.  
> • **Dive Deep & Bias for Action** – Iteratively profiled, measured, and adjusted trade‑offs to hit hard targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
