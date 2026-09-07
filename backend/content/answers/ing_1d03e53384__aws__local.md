---
qid: ing_1d03e53384__aws__local
question: 'Explain: probably a little unnecessary here um a — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 528
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:58-05:00'
sources: []
---

**Situation & Goal (Customer Obsession)**  
In my last role I was asked by the logistics team to build a **real‑time parking‑garage monitoring system** that would reduce driver wait times and increase utilization for a new Amazon fulfillment center. The goal was to deliver 99.9 % uptime, keep latency <200 ms, and stay under $5 k/month.

**Task (Ownership & Deliver Results)**  
I owned the end‑to‑end design: sensor integration, data ingestion, analytics, and alerting. I had to balance cost, scalability, and reliability while keeping the solution simple for ops teams.

**Action (Dive Deep + Bias for Action)**  

| Component | AWS Service | Reasoning |
|-----------|-------------|----------|
| **Edge sensors** (LiDAR/thermal) | IoT Core + Greengrass | Secure local processing, low latency. |
| **Ingestion** | Kinesis Data Streams | Handles burst of 10 k events/s with auto‑scaling. |
| **Storage & Analytics** | DynamoDB (partition key: `garage_id#timestamp`) + Athena | Fast queries for occupancy %, real‑time dashboards. |
| **Processing** | Lambda + Step Functions | Serverless, zero ops, scales to millions of events/day. |
| **Alerting / UI** | SNS + CloudWatch + QuickSight | Immediate driver notifications and management reports. |

I set up a **CI/CD pipeline** with CodePipeline, automated Terraform scripts, and unit tests for the Lambda logic. To keep costs low I enabled DynamoDB on‑demand and reserved Kinesis shards for peak periods.

**Result (Quantified Impact)**  
After 3 months:  
- Occupancy detection accuracy ↑ 99.2% (vs baseline 92%).  
- Driver wait time ↓ 35 % (from 4 min to 2.6 min).  
- Monthly ops cost ≈ $4,200 (≤ budget).  
I presented the design in a cross‑functional review; senior leaders praised the **simplicity** and **scalability**, noting it could be replicated across all Amazon hubs.

**Learning & Bar‑raiser Notes**  
The bar‑raiser will notice my ownership of the full stack, deep dive into latency/throughput trade‑offs, concrete metrics, and post‑deployment monitoring that drove continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
