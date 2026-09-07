---
qid: ing_fd0f08c5e4__aws__local
question: 'Explain: Problem — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 521
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:08-05:00'
sources: []
---

**Problem – Pattern – Saga (ML)**  
I was tasked with building a *real‑time recommendation engine* for an e‑commerce platform that had to handle 10 M daily users and deliver personalized product suggestions within 50 ms. The existing monolith sent every user event to a single Kafka topic, then a Spark batch job updated models nightly – latency was unacceptable.

**Solution (Saga Pattern)**  
I broke the workflow into *independent micro‑services* that could run in parallel yet remain transactionally consistent—essentially a Saga:

| Step | Service | AWS Tech |
|------|---------|----------|
| 1. Capture event | Event Listener | Kinesis Data Streams |
| 2. Update feature store | Feature Store Service | DynamoDB + S3 (data lake) |
| 3. Train/Update model | Model Trainer | SageMaker Pipelines, Step Functions |
| 4. Serve predictions | Prediction API | Lambda + API Gateway (Edge) |

Each step emits a *correlation ID* and writes to DynamoDB; if any step fails, the Saga compensates by rolling back the previous steps (e.g., delete stale feature rows). This guarantees eventual consistency while keeping latency low.

**Why it works**

- **Scalability:** Kinesis scales to 10 M events/sec; Lambda auto‑scales for prediction calls.  
- **Availability:** Multi‑AZ deployments of DynamoDB and Step Functions with retry policies.  
- **Cost:** Serverless components (Lambda, API Gateway) keep idle spend near zero; only pay for compute when needed.

**Result**  

*Before:* 1 s latency, 20 % churn on recommendations.  
*After:* <50 ms latency, recommendation accuracy ↑15 %, churn ↓8 %. Monthly cost dropped from $120k to $45k (≈60 % savings).

**Leadership Principles Reflected**

- **Customer Obsession:** Delivered faster, more accurate suggestions → higher conversion.  
- **Ownership & Dive Deep:** I mapped every event path, instrumented metrics, and iterated until latency met SLA.  

**Bar‑raiser takeaways**

- Clear ownership of each Saga step.  
- Quantified impact (latency, churn).  
- Learned from a failed batch‑job trial: “If you can’t ship fast enough, ship fast.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
