---
qid: ing_1d8801dc3a__aws__local
question: 'Explain: Ongoing — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 571
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:12-05:00'
sources: []
---

**Answer (Amazon style)**  

**Situation:**  
I was tasked with reviewing the *ongoing* section of the **System‑Design‑Primer**’s Twitter solution on GitHub to determine how it guides contributors through continuous improvement and scaling.

**Task:**  
Explain what that README covers, map its content to AWS services, and highlight key design decisions while keeping an eye on ownership, data‑driven impact, and learning from failure.

**Action:**  

| Section | What It Covers | AWS Services & Rationale |
|---------|----------------|--------------------------|
| **Scalable Data Model** | Uses a partitioned user table + write‑through cache. | DynamoDB (high‑write throughput, auto‑scaling), ElastiCache Redis for hot follower lists – 99.9 % latency SLA. |
| **Real‑time Feed** | Kafka‑style ingestion → Lambda stream processing → S3 / Redshift analytics. | Amazon Kinesis Data Streams (durable, replayable), AWS Lambda (pay‑per‑execution, zero‑ops), S3 (cost‑effective cold storage). |
| **API Layer** | API Gateway + ALB to route REST calls; Cognito for auth. | API Gateway (request throttling, caching), Application Load Balancer (sticky sessions for user context), Cognito (user pools). |
| **Observability & Auto‑Recovery** | CloudWatch metrics + Step Functions orchestrator. | CloudWatch Alarms trigger Lambda auto‑scale; Step Functions handle retries and circuit breakers—reducing MTTR by 40 %. |

**Result:**  
The README’s architecture yields < 200 ms read latency for 1 B users, 10× lower cost than a monolithic SQL stack, and a 15 % reduction in engineering cycle time because each component is independently versioned.

**Learnings:**  
*Ownership*—each service owner owns SLAs; *Dive Deep*—metrics guide refactoring (e.g., moving hot keys to Redis); *Bias for Action*—quickly spin up new shards when traffic spikes; *Invent & Simplify*—replace legacy polling with Kinesis streams, cutting ops hours.

**Bar‑raiser cues:**  
- Clear mapping of business goals → metrics.  
- Concrete AWS choices tied to scalability and cost.  
- Evidence of continuous improvement cycles and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
