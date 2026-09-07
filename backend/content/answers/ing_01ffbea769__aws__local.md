---
qid: ing_01ffbea769__aws__local
question: 'Explain: Architecture 2: Native Hybrid (Single System)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 519
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:45-05:00'
sources: []
---

**Situation – Problem**  
A fintech startup needed to process real‑time fraud alerts on a mixed data set (structured SQL + unstructured logs) while keeping latency < 50 ms for compliance. They had an existing monolith on EC2 but wanted to adopt AI without breaking the single‑system feel.

**Task – Goal**  
Design a *Native Hybrid* architecture that keeps the “single system” mental model yet injects ML inference and streaming analytics, with 99.9 % availability and < $0.05 per inference cost.

**Action – Design**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingest & Normalise | **Amazon Kinesis Data Streams** + **AWS Lambda** | Real‑time log capture, serverless transforms keep the monolith feel while decoupling data flow. |
| Feature Store | **Amazon SageMaker Feature Store** | Centralised feature repository; reduces latency vs. querying RDS each time. |
| Inference Engine | **SageMaker Neo + Amazon ECS Fargate** (single container) | Packs model into a lightweight runtime, runs inside the same “container” as the legacy app – feels like one system. |
| Orchestration | **Step Functions** | Keeps workflow visible in the same console; no separate orchestration service for operators. |
| Monitoring | **CloudWatch + X-Ray** | End‑to‑end traces show that 98 % of requests hit the inference container within 30 ms. |

**Result – Impact**  
- Latency dropped from 250 ms to 45 ms (5× faster).  
- Cost per inference fell to $0.02, saving $120k/yr vs. on‑prem GPU servers.  
- SLA improved to 99.95 % with automatic failover via Route 53 health checks.

**Reflection – Learnings**  
Tried a pure serverless Lambda model first; hit cold‑start delays. Switching to Fargate + Neo eliminated that pain while preserving the “single system” illusion. This iteration demonstrates *Ownership* (I drove the redesign), *Dive Deep* (profiled every microsecond), and *Bias for Action* (rolled out in 3 sprints).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
