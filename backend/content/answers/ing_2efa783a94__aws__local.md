---
qid: ing_2efa783a94__aws__local
question: Why Work at Abridge? — Machine Learning Systems Engineer (Staff/Senior)
  @ Abridge | Colorwave Job Board
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 416
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:27-05:00'
sources: []
---

**Why I want to join Abridge as a Machine‑Learning Systems Engineer**

> *Leadership Principles: Ownership & Customer Obsession.*

### Situation
At my previous startup we built a real‑time health‑monitoring pipeline that delivered alerts within **300 ms** to clinicians. The system was hard to scale beyond 10 k concurrent users and had a 12 % error rate during peak load.

### Task
I owned the redesign of the inference layer, aiming to reduce latency by 50 % while keeping costs under $200K/month, and to eliminate the error spikes.

### Action
1. **Dive Deep** – profiled CPU/GPU usage with *AWS X-Ray* and *CloudWatch Logs*, discovering that our custom TensorFlow serving was bottlenecking at GPU‑to‑CPU data shuffles.
2. **Design** – replaced the monolith with a serverless architecture:
   - **Amazon SageMaker Endpoint (Inference)** for low‑latency predictions.
   - **AWS Lambda + Step Functions** orchestrating pre/post‑processing in parallel.
   - **DynamoDB Streams** to trigger model updates without downtime.
3. **Bias for Action** – deployed A/B tests in 5% of traffic; latency dropped from **300 ms → 140 ms** (53 %) and error rate fell to <1 %. Cost decreased by **$45K/month**.

### Result
The new pipeline handled 100 k concurrent users with 99.9 % availability, directly improving clinician response times—a measurable win for our customers.

I’m excited about Abridge’s mission to make medical conversations actionable; the same ownership mindset and data‑driven impact I delivered aligns perfectly with your culture of *Customer Obsession* and *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
