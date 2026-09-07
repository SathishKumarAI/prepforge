---
qid: ing_b4fb317ea6__aws__local
question: 'Explain: Alibaba Cloud Hot Products — What is TPS, what is QPS, and what
  is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 567
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:37-05:00'
sources: []
---

**Context – Interview Prompt**  
During a recent project at Alibaba Cloud I was asked to explain the difference between **TPS (Transactions Per Second)** and **QPS (Queries Per Second)** for their Hot Products service, while also showing how I’d design a scalable solution on AWS.

---

### Situation
The product team needed a real‑time analytics dashboard that could ingest millions of user interactions daily. They wanted to know whether we should benchmark the system in TPS or QPS because they were concerned about latency and cost.

### Task
Explain the two metrics clearly, justify why one might be preferred for their use case, and sketch an AWS‑based architecture that supports both with high availability and low cost.

### Action

| Metric | Definition | Typical Use |
|--------|------------|-------------|
| **TPS** | Number of *complete transactions* (e.g., a purchase, a payment settlement) processed per second. | Captures business value; used when the unit of work is an atomic operation that changes state. |
| **QPS** | Number of *individual queries* or read operations per second. | Ideal for analytics, search, and any stateless request pattern. |

I explained that **TPS inherently includes validation, locking, and potential rollbacks**, making it heavier than a simple QPS hit. For Hot Products, where we mainly serve catalog look‑ups and clickstreams, QPS is the right metric; TPS would over‑penalize us for read‑heavy traffic.

#### AWS Design
1. **API Gateway + Lambda** – stateless request handling (QPS).
2. **Amazon DynamoDB** – provisioned throughput with auto‑scaling to match QPS spikes.
3. **AWS Step Functions** – orchestrate multi‑step transactions if needed, thus measuring TPS.
4. **CloudWatch Metrics & Alarms** – separate dashboards for QPS and TPS; set alerts at 95th percentile thresholds.

### Result
Implemented the architecture in <4 weeks. Achieved a **30% cost reduction** (by using DynamoDB on-demand for read‑heavy traffic) while maintaining **99.999% availability**. QPS grew from 12k to 35k during peak sales, and TPS stayed below SLA thresholds.

---

### Leadership Principles Highlighted
- **Customer Obsession** – chose the metric that truly reflects user experience.
- **Ownership & Dive Deep** – dissected transaction semantics, designed a cost‑effective AWS solution, and validated with real data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
