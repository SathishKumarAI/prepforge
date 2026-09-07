---
qid: ing_da05523cdf__aws__local
question: 'Explain: Context — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 492
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:35-05:00'
sources: []
---

**Context – Problem & Scope**  
In a real‑time fraud detection pipeline, we needed to capture every transaction event (create, update, delete) for audit and model retraining while keeping latency <10 ms.

**Task – What I owned**  
I designed an *event‑sourced* architecture that would let us replay any state snapshot, feed it into a nightly batch training job, and serve predictions with zero downtime.  

**Action – Technical design & AWS services**  
| Component | Service | Reasoning |
|-----------|---------|-----------|
| Event store | Amazon Kinesis Data Streams + DynamoDB Streams | Durable, scalable ingestion; auto‑scales to 100 k TPS. |
| Snapshotting | AWS Lambda (triggered by stream) writing to S3 | Cost‑effective storage; enables point‑in‑time restores. |
| Model training | SageMaker Training Jobs on spot instances | Cuts GPU cost 60 % while still meeting 2‑hour window. |
| Serving | Amazon SageMaker Endpoint + API Gateway | 99.95 % availability, auto‑scales to 10k RPS. |

I added a **deduplication layer** (DynamoDB TTL) and an *audit* microservice that writes each event to CloudWatch Logs for compliance.

**Result – Quantified Impact**  
- Latency dropped from 25 ms to <9 ms (30 % improvement).  
- Training data volume grew by 4× without extra cost.  
- Incident response time reduced from 12 h to 45 min due to instant replay capability.  

**Learning & Bar‑raiser Signals**  
*Ownership*: I led the cross‑team effort, drafted SLAs, and managed the budget.  
*Dive Deep*: I benchmarked Lambda cold starts, tuned DynamoDB read/write capacity, and logged every retry path.  
*Bias for Action*: The prototype shipped in 3 weeks, ahead of the 6‑week sprint plan.  

By anchoring to **Customer Obsession** (fast fraud detection) and **Ownership** (end‑to‑end delivery), I built a resilient event‑sourced ML pipeline that scales with business growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
