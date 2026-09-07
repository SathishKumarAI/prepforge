---
qid: ing_8ff5ca79fb__aws__local
question: 'Explain: Cross Layer KV Sharing — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 583
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:35-05:00'
sources: []
---

**Scenario (S):**  
At my last role I led a team that built *Kaiju*, a large‑scale conversational AI platform for an enterprise messaging app. The core challenge was to enable **cross‑layer key‑value (KV) sharing** so that lower‑level language models could reuse context from higher‑level dialogue states without duplicating data or compromising latency.

**Task (T):**  
Architect a distributed KV store that supports real‑time read/write across three model layers, scales to 10⁶ concurrent sessions, and guarantees sub‑20 ms inference latency while keeping costs below $2 M/yr.

**Action (A):**  

| Step | Technical Choice | Rationale |
|------|------------------|-----------|
| Data ingestion | **Amazon Kinesis Data Streams** → micro‑batching to **DynamoDB Global Tables** for geo‑replication. | Low latency writes, multi‑region consistency. |
| KV lookup | **Elasticache Redis Cluster** (cluster mode) with *hash tags* per session ID. | In‑memory speed; sharding ensures 10⁶ keys without hot spots. |
| Persistence & analytics | **Amazon S3 + Athena** for audit logs and trend analysis. | Cost‑effective long‑term storage, ad‑hoc SQL. |
| Model orchestration | **AWS Lambda@Edge** to route inference requests; **Amazon SageMaker Endpoint** for the actual model. | Serverless scaling, pay‑per‑invocation. |

We added a **TTL layer** in Redis (30 s) to purge stale KV pairs and an *event‑driven* Lambda that pushes expired keys to S3 for compliance.

**Result (R):**  
- Reduced inference latency from 45 ms to **18 ms** (≈60% improvement).  
- Cut infrastructure cost by **32%** ($2.8 M → $1.9 M).  
- Enabled 90% of cross‑layer KV hits in a single read, boosting user satisfaction scores by **15 points** on our internal NPS survey.

---

### Leadership Principles Reflected
- **Customer Obsession:** Delivered faster, more reliable conversations for millions of users.  
- **Ownership & Dive Deep:** Built the end‑to‑end pipeline, profiled every component, and iterated based on real metrics.  

A bar‑raiser would notice my insistence on measurable KPIs, the choice of serverless components to avoid over‑provisioning, and the learning loop that turned a 5 % performance shortfall into a 60 % win through iterative A/B testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
