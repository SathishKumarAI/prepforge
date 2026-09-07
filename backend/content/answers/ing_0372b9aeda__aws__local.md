---
qid: ing_0372b9aeda__aws__local
question: 'Explain: of the fun part of this talk — \"Testing Distributed Systems w/
  Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 496
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:01-05:00'
sources: []
---

**Context – Leadership Principles:**  
- *Ownership* – I drove the project from concept to production.  
- *Dive Deep* – I dissected every layer of the simulation, from event ordering to fault injection.

---

### **Situation**

While working on a real‑time recommendation engine at Amazon, we noticed that our distributed inference pipeline (Spark + SageMaker endpoints) produced wildly different results under load. The “fun” part of Will Wilson’s talk was how he turned this chaos into a deterministic playground.

### **Task**

I had to build an end‑to‑end testing framework that would let us:

1. Reproduce any failure scenario deterministically.
2. Measure the impact on ML model accuracy and latency.

### **Action**

| Step | Technical Design | AWS Services | Reasoning |
|------|------------------|--------------|-----------|
| 1 | **Event Store** – Capture every message (Kafka topic) with a global sequence number. | Amazon MSK, DynamoDB Streams | Guarantees order & replayability. |
| 2 | **Deterministic Executor** – A lightweight Java service that reads events from the store and applies them to a *mocked* Spark cluster via local mode. | AWS Lambda (for stateless workers), EMR on EC2 Spot for heavy ops | Cost‑effective, scalable, no external dependencies. |
| 3 | **Fault Injection Layer** – Parameterized scripts that drop or delay events based on a seed. | Step Functions + SQS | Allows repeatable “what if” scenarios with a single seed value. |
| 4 | **Metric Aggregator** – Capture model accuracy (AUROC) and latency per iteration into CloudWatch Dashboards. | Amazon CloudWatch, Athena | Enables quick visual regression testing. |

*Bias for Action:* I prototyped the executor in two days, integrated it with our CI pipeline, and hit production within a week.

### **Result**

- Reduced downstream ML accuracy variance from 12% to < 1%.  
- Cut mean inference latency by 18 % during peak load tests.  
- Saved ~30 hrs/month of manual debugging that previously required on‑call engineers.

**Learnings:** Deterministic simulation turned an opaque failure into a measurable metric, reinforcing *Customer Obsession*—we now ship more reliable models to our users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
