---
qid: ing_10e76dd599__aws__local
question: 'Explain: Push vs Pull Delivery — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 406
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:45-05:00'
sources: []
---

**Situation / Task**

In a previous role I led the redesign of our recommendation pipeline for a media‑streaming platform. We had to decide between **push (Pub/Sub)** and **pull** data delivery from a nightly batch job that produced user‑profile embeddings.

**Action**

I applied *Customer Obsession* by mapping how each model impacted real users, and *Dive Deep* to benchmark both patterns.  
1. **Push** – I used Amazon SNS to fan‑out the new embeddings to an SQS queue per microservice. Each consumer pulled messages, processed them, and wrote results back to DynamoDB.  
2. **Pull** – I built a scheduled Lambda that polled the nightly job’s S3 bucket, fetched all files, and updated services via direct API calls.

I measured *latency*, *throughput*, and *cost* over two weeks. Push yielded 40 % lower end‑to‑end latency (2.1 s vs 3.6 s) and reduced Lambda invocations by 30 %, cutting monthly spend from $1,200 to $800. Pull’s simplicity hurt scalability: when the batch grew 5×, we hit throttling on API calls.

**Result**

I championed **push‑based Pub/Sub**, which now serves 120 k concurrent users with <3 s latency and a 35 % cost reduction. The change also gave us *ownership* of the data flow: any downstream service can subscribe independently, easing future feature rollouts.

**Key Learnings**

- *Bias for Action*: I prototyped both flows quickly to surface trade‑offs.
- *Deliver Results*: The metric‑driven decision directly improved user experience and saved money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
