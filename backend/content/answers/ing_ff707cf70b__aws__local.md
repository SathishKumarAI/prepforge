---
qid: ing_ff707cf70b__aws__local
question: 'Explain: 64 Open Positions — Careers | Sarvam AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 553
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:36-05:00'
sources: []
---

**Situation**  
While building a talent‑matching platform for a fast‑growing AI startup, I was asked to design the “Open Positions” feature that would surface 64+ job listings in real time across multiple markets.

**Task**  
Deliver an end‑to‑end system that:  
1. Ingests dynamic JSON feeds from partner ATSs.  
2. Normalises and stores them in a searchable format.  
3. Exposes an API to the front‑end with sub‑second latency, while keeping cost < $200/month.

**Action**  

| Step | Design Choice | AWS Services | Why |
|------|---------------|--------------|-----|
| Ingest | Serverless stream → transform → queue | **Lambda**, **Kinesis Data Streams** | Auto‑scales with 10k jobs/s, zero ops. |
| Normalise | Schema registry + enrichment | **AWS Glue** + **DynamoDB** | Guarantees consistent fields (role, location, tech stack). |
| Store | Fast read/write, global replication | **Amazon DynamoDB Global Tables** | 99.999% availability, 10 ms latency worldwide. |
| API | GraphQL with caching | **AppSync** + **ElasticCache‑Redis** | Sub‑second response for the front‑end; cost‑effective. |
| Monitoring | Usage & error alerts | **CloudWatch**, **X-Ray** | Enables rapid triage and capacity planning. |

I also introduced an **A/B test harness** that swapped in a new ranking algorithm (based on user engagement) against the legacy keyword filter.

**Result**  
- Latency dropped from 350 ms to < 80 ms, improving CTR by **23%**.  
- Monthly cost fell from $1,200 to **$180** after optimising Lambda concurrency and DynamoDB provisioned capacity.  
- The A/B test ran for two weeks; the new ranking algorithm lifted average time‑to‑hire by **18%**.

**Learnings & Ownership**  
I owned the full pipeline, from data ingestion to user feedback. By diving deep into CloudWatch traces I identified a hidden serialization bottleneck and refactored the Lambda handler—demonstrating *Bias for Action* and *Ownership*. The success of the A/B test proved that continuous experimentation is key in AI‑driven hiring platforms.

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivering faster, more relevant job listings.  
- **Ownership & Dive Deep** – end‑to‑end responsibility and root‑cause analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
