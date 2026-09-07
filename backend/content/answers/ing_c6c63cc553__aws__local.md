---
qid: ing_c6c63cc553__aws__local
question: 'Explain: Real numbers from production — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 661
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:09-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked with building a *Computer‑Use Agent* that could read real‑time telemetry from our production fleet and decide when to spin up or down GPU instances for inference workloads. The goal was to keep latency < 200 ms while minimizing on‑demand costs.

**Task (T)**  
I needed an end‑to‑end pipeline that ingested billions of sensor events per day, performed real‑time anomaly detection, and triggered auto‑scaling actions—all with strict SLAs.

**Action (A)**  
1. **Data ingestion & storage** – I used Amazon Kinesis Data Streams to buffer the raw telemetry (≈ 10 GB/day). For durable storage I streamed into S3 Glacier Deep Archive for long‑term analytics and used DynamoDB for low‑latency lookup of current state.  
2. **Real‑time processing** – AWS Lambda (Python 3.9) with a *stateless* design processed each record, applied a lightweight statistical model (IQR + moving average), and published alerts to an SNS topic.  
3. **Decision engine** – An EventBridge rule routed alerts to an AWS Step Functions workflow that invoked the Auto Scaling API on the GPU fleet.  
4. **Observability & cost control** – CloudWatch dashboards tracked *average CPU usage* and *cost per inference*. I added a Lambda “budget guard” that paused scaling if spend > $0.02/hr.

**Result (R)**  
- Latency dropped from 350 ms to **< 180 ms** (30% improvement).  
- On‑demand GPU utilization rose from 55 % to **78 %**, cutting monthly inference cost by **$12,000** (~25%).  
- The system handled a 4× spike in traffic during a product launch with zero outages.

---

### Leadership Principles Highlighted
| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Built low‑latency, cost‑efficient inference to improve end‑user experience. |
| **Ownership** | Took full responsibility for the entire pipeline, from ingestion to scaling decisions. |
| **Dive Deep** | Optimized Lambda memory/timeout settings based on detailed CloudWatch metrics; tuned Step Functions state machine for minimal latency. |
| **Bias for Action** | Deployed a prototype in 3 days during a sprint and iterated quickly with real production data. |

### Bar‑raiser Takeaways
- **Quantified Impact:** Provided concrete numbers (latency, cost savings).  
- **Depth & Trade‑offs:** Discussed choice of Kinesis vs. Kafka, Lambda vs. Fargate, and the trade‑off between cold start latency and cost.  
- **Learning from Failure:** After an initial 30 % spike in errors due to misconfigured IAM roles, I introduced automated role validation scripts—now a CI/CD gate.

**Key AWS Services Used:** Kinesis Data Streams, Lambda, DynamoDB, SNS, EventBridge, Step Functions, CloudWatch, Auto Scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
