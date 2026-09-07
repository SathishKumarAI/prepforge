---
qid: ing_e9bf5000e1__aws__local
question: 'Explain: Advanced Questions - July 2026 — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 557
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:37-05:00'
sources: []
---

**Situation & Task**

In mid‑2026, I led the launch of an “AI‑powered Personal Health Coach” for our Amazon Care platform. The goal was to deliver real‑time, personalized wellness insights while ensuring HIPAA compliance and 99.9 % availability across 12 time zones.

**Action – Technical Design**

1. **Data ingestion** – *Amazon Kinesis Data Streams* captured sensor events (step count, heart rate) at 10 kpps; *AWS Glue* performed schema‑driven ETL into *Amazon Timestream* for low‑latency analytics.
2. **Model inference** – Trained a transformer model in SageMaker, deployed as an endpoint behind *Amazon API Gateway*. To reduce cost, I enabled **SageMaker Neo** to compile the model for AWS Inferentia chips, cutting inference latency from 200 ms to <30 ms and saving ~40 % on compute.
3. **Personalization engine** – Built a microservice in *AWS Lambda* (Python 3.12) that queries Timestream, applies rule‑based logic plus the ML score, and returns a daily recommendation. The service is autoscaled via **Lambda Provisioned Concurrency** to maintain <5 ms cold start.
4. **Security & compliance** – Used *Amazon Cognito* for user auth, *AWS Key Management Service (KMS)* for data at rest encryption, and enabled **VPC endpoints** for all data flows.

**Result**

- 99.97 % uptime during the first 3 months; SLA exceeded by 0.08 %.
- User engagement rose from 12 % to 58 % daily active users (≈ 350 k users) within two weeks.
- Operational cost dropped 30 % vs. a GPU‑based inference stack.

**Leadership Principles Highlighted**

- **Customer Obsession** – Delivered instant, actionable insights that improved health metrics for 350 k patients.
- **Ownership & Dive Deep** – I architected end‑to‑end data flow, tuned every component, and iterated on failure modes (e.g., latency spikes) to keep the system robust.

**Bar‑raiser takeaways**

- Demonstrated *ownership* by handling every layer from ingestion to compliance.
- Showed *depth* with a data‑driven design, quantified impact, and cost trade‑offs.
- Learned from early inference latency failures, pivoting to Inferentia and Lambda concurrency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
