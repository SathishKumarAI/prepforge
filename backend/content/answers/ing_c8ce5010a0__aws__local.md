---
qid: ing_c8ce5010a0__aws__local
question: 'Explain: Workflow — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 613
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:56-05:00'
sources: []
---

**Machine‑Learning System Design – Interview Cheat Sheet**

*Leadership Principles:* **Ownership**, **Dive Deep**  
*Result:* Reduced model deployment latency from 15 s to < 2 s and cut infra cost by 32 % in our last sprint.

---

### 1️⃣ Understand the Problem (S)
- **Ask clarifying questions:** data volume, latency targets, SLA, compliance.  
- **Translate to metrics** (e.g., “predict churn within 30 days with ≥ 0.85 AUC”).

> *Bar‑raiser focus:* Clear articulation of constraints shows ownership.

### 2️⃣ Define High‑Level Architecture (T)
| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingest | **Amazon Kinesis** / **S3** | Near‑real‑time + batch ingestion |
| Storage | **Redshift** (feature store) | Low‑latency joins & ML ops |
| Training | **AWS SageMaker** | Managed Jupyter, hyper‑parameter tuning |
| Serving | **SageMaker Endpoint** + **Elastic Load Balancer** | Autoscaling, low‑latency inference |
| Monitoring | **CloudWatch**, **Amazon Lookout for Metrics** | Detect drift, performance degradation |

> *Bar‑raiser focus:* Choosing the right services shows depth and bias for action.

### 3️⃣ Data Pipeline Design (A)
- **ETL with Glue** → clean & enrich.  
- **Feature Store** in Redshift + DynamoDB cache.  
- **Batch vs. Streaming:** use Kinesis for real‑time features, S3 for historical data.

### 4️⃣ Scalability & Availability (R)
- **Multi‑AZ deployment**; auto‑scaling groups for endpoints.  
- **Cost trade‑off:** spot instances for training → 70 % savings, but keep on‑demand for inference to meet SLA.

### 5️⃣ Testing & Rollout
- **Canary releases** with SageMaker’s blue/green deployments.  
- **Metrics dashboard** in QuickSight for stakeholders.

---

#### STAR Example (Result)
> *Situation:* Our churn prediction model had a 15 s latency, causing missed upsell windows.  
> *Task:* Reduce inference time and cut costs.  
> *Action:* Migrated to SageMaker real‑time endpoints with a Redis cache for top 10k features; switched training to spot instances.  
> *Result:* Latency dropped to **1.8 s**, cost fell from $12k/month to **$8.2k/month** (32 % savings).  

*Learning:* Early profiling revealed that feature extraction was the bottleneck; caching solved it—an example of learning from failure and diving deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
