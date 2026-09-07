---
qid: ing_927823187b__aws__local
question: 'Explain: Building a Webhook Receiver — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 605
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:21-05:00'
sources: []
---

**Situation & Task (S)**  
I led the redesign of our event‑driven pipeline for a SaaS product that receives hundreds of thousands of third‑party webhooks per day. The legacy HTTP endpoint was throttling at ~300 req/s, causing 15 % SLA violations and customer churn.

**Action (A)**  
1. **Architectural shift** – Replaced the monolithic Flask app with an *API Gateway → Lambda* pattern for low‑latency ingestion.  
2. **Durable queue** – Each Lambda pushes the raw payload to an *SQS FIFO* queue; duplicates are naturally de‑duplicated and ordering preserved.  
3. **Processing tier** – A fleet of *EC2 Spot Instances* running a lightweight containerized worker (Docker, ECS) pulls from SQS, validates signatures, enriches data, and writes to *DynamoDB* for downstream analytics.  
4. **Observability & scaling** – CloudWatch metrics trigger an Auto Scaling group on the worker tier; a Lambda publishes failure events to SNS → PagerDuty.  

**Result (R)**  
- Throughput increased from 300 req/s to 35,000 req/s with zero downtime.  
- SLA violations dropped from 15 % to <0.1 %.  
- Operational cost fell by 40 % thanks to Spot Instances and serverless components.

---

### Technical Highlights  

| Requirement | AWS Service | Reasoning |
|-------------|------------|-----------|
| Low‑latency API | **API Gateway + Lambda** | Cold starts mitigated via provisioned concurrency; auto‑scales with traffic. |
| Durable, ordered queue | **SQS FIFO** | Guarantees exactly‑once processing and order for webhook sequences. |
| Cost‑efficient compute | **EC2 Spot + ECS** | Workers can be scaled up/down quickly; spot pricing saved ~30 % vs on‑demand. |
| No single point of failure | **Multi‑AZ deployments** | API Gateway, Lambda, SQS, DynamoDB all natively replicated. |

---

### Bar‑raiser signals I hit  

* **Ownership** – Took full responsibility for SLA impact and drove the migration end‑to‑end.  
* **Dive Deep** – Benchmarked Lambda cold starts, measured queue latency, tuned Spot Instance types.  
* **Quantified Impact** – 35× throughput, 99.9% availability, 40 % cost reduction.  
* **Learning from Failure** – Initial rollout hit a race condition; we added idempotent writes to DynamoDB and re‑architected the worker’s message lock logic.

---

> *Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**, **Deliver Results**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
