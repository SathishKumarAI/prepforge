---
qid: ing_8baf9bca2f__aws__local
question: 'Explain: Step 5: Message Creation and Formatting — Design Notification
  Service | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 482
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:52-05:00'
sources: []
---

**Situation & Task**  
In a recent project I led the redesign of our **Notification Service** (Step 5: Message Creation & Formatting) after customer churn rose 12% because alerts were delayed or malformed. My goal was to deliver real‑time, schema‑flexible messages that scale to millions of events per day while keeping costs under $200k/yr.

**Action**  
1. **Requirements** – Messages must support JSON and XML, contain user‐level personalization tags, and be routed to SNS topics or SQS queues depending on priority.  
2. **Design** – I built a stateless microservice on **AWS Lambda** triggered by an **API Gateway** REST endpoint.  
   * Input → **Step Functions** orchestrate validation (using AWS Schemas), enrichment (lookup in DynamoDB for user prefs), and formatting via Jinja templates stored in S3.  
   * Output is published to **SNS** (high‑throughput) or sent to **SQS** for batch processing.  
3. **Scalability/Availability** – Lambda auto‑scales; Step Functions retries with exponential back‑off, ensuring 99.95% availability.  
4. **Cost** – Using S3 for templates eliminates storage cost spikes; SNS/SQS pricing is pay‑per‑message (~$0.50/million). Total projected spend: $180k/yr.

**Result**  
Post‑deployment, message latency dropped from 2 s to <200 ms, and the error rate fell by **85%**. Customer satisfaction scores rose 18 points within two months, directly contributing to a 7% lift in renewal rates.

**Learnings & Bar‑Raiser Notes**  
* Took full ownership of cross‑team dependencies (DevOps, Product).  
* Dived deep into AWS native services to avoid vendor lock‑in.  
* Quantified impact with clear metrics (latency, error rate, churn).  
* Iterated after a failed prototype that used a monolithic Spring app—learned to favor serverless for elasticity and cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
