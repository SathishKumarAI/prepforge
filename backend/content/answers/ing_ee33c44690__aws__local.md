---
qid: ing_ee33c44690__aws__local
question: 'Explain: Example Workflow — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 529
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:41-05:00'
sources: []
---

**Situation / Task**  
At my previous company we launched a URL‑shortening service for our partner network. The goal was to reduce the average click latency by **>30 %** and support **10 M requests/day** while guaranteeing 99.9 % uptime.

**Action – Design**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **API Gateway + Lambda** | Serverless front‑end | Low cold‑start latency, auto‑scale to traffic spikes (up to 50 k RPS). |
| **DynamoDB (partition key = short_id)** | Fast key‑value store | Single‑write throughput of 200 WCU, read‑throughput 400 RCU; provides eventual consistency with <10 ms latency. |
| **S3 + CloudFront** | Static landing page & analytics logs | Global edge caching reduces origin hits by ~70 %. |
| **Step Functions (Python)** | URL validation pipeline | Decouples third‑party domain checks, retries on failure – improves reliability by 99.9 % SLA. |
| **Amazon Kinesis + Redshift** | Analytics stream | Real‑time traffic dashboards; monthly cost <$200 for 10 M records. |

**Scaling & Availability**  
- DynamoDB auto‑scales with CloudWatch alarms; provisioned throughput is capped to control cost (~$1.50/day).  
- Lambda concurrency throttles protect downstream services, and API Gateway’s usage plans enforce quota limits.  
- Multi‑AZ deployment of Redshift ensures HA for reporting.

**Result**  
- Latency dropped from 150 ms → **45 ms** (30 % improvement).  
- Traffic handled 12 M RPS with no outages; SLA hit 99.97 %.  
- Operational cost stayed under **$4k/month**, a 25 % reduction vs the legacy monolith.

**Reflection (Bar‑raiser)**  
I owned every layer, diving deep into DynamoDB’s partitioning to avoid hot keys. When validation failures spiked during peak hours, I iterated the Step Function logic—adding exponential backoff—which lowered error rates by **40 %**. Learned that “bias for action” must be balanced with “invent & simplify”; the serverless stack removed unnecessary VM overhead while keeping reliability high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
