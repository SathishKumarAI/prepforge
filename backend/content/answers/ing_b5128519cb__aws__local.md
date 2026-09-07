---
qid: ing_b5128519cb__aws__local
question: 'Explain: 1-Tier Architecture — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 565
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:45-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science squad at a fintech startup, we were asked to launch a real‑time fraud detection tool for merchants. The product had to scale from 1 k transactions/sec to >100 k within six months without compromising latency (<50 ms).  

**Task (T)**  
Design the system architecture that would allow rapid iteration on ML models while guaranteeing high availability and cost efficiency.

**Action (A)**  
I proposed a **3‑tier client–server architecture**:

| Tier | Purpose | AWS Services | Rationale |
|------|---------|--------------|-----------|
| 1️⃣ Client (Web/SDK) | Ingest transaction payloads | API Gateway + Lambda Edge | Low‑latency, auto‑scaling entry point. |
| 2️⃣ Server (Inference) | Run ML inference & rule engine | EC2 Spot + SageMaker Real‑Time Endpoint | Spot reduces cost by ~70%; SageMaker handles model versioning and A/B tests. |
| 3️⃣ Persistence / Analytics | Store raw events, audit logs, and model metrics | DynamoDB + Kinesis Data Streams + Redshift | DynamoDB gives sub‑ms reads; Kinesis buffers high‑volume streams for downstream analytics; Redshift feeds BI dashboards. |

*Dive Deep*: I modeled the data path (10 MB payload → 1 ms API latency → 20 ms inference → <50 ms total). Using CloudWatch metrics, we identified a 30 % CPU bottleneck in the EC2 tier and added an autoscaling group with target tracking at 70 %.  

*Bias for Action*: Deployed the architecture within two weeks, rolled out the first model version (0.83 F1‑score) to 20 % of traffic, then gradually increased to 100 % over a month.

**Result (R)**  
- Latency dropped from 120 ms to **45 ms** on average.  
- Throughput scaled from 1 k to 150 k tx/sec with a **$0.02 per transaction** cost, a 60 % reduction versus the legacy monolith.  
- Model accuracy improved by 12 % after iterative A/B testing.

**Learning**  
The first failure was an over‑provisioned EC2 pool that inflated costs; we pivoted to Spot + SageMaker and introduced automated rollback on model drift. This reinforced **Ownership** and **Customer Obsession**, ensuring the solution stayed performant, reliable, and affordable for merchants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
