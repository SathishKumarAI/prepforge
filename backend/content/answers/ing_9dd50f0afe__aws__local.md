---
qid: ing_9dd50f0afe__aws__local
question: 'Explain: Problem Statement — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 472
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:43-05:00'
sources: []
---

**Situation**  
When launching a new marketplace for user‑generated video, the product team discovered that 12 % of uploads contained copyrighted or hateful content, causing brand risk and regulatory scrutiny.

**Task**  
Design an end‑to‑end, cost‑effective moderation pipeline that can process 200k videos per day with <1 s latency for flagging, while keeping false positives below 3 %.

**Action**  
I built a *serverless* architecture on AWS:

| Step | Service | Why |
|------|---------|-----|
| Ingest | Amazon S3 + EventBridge | Durable storage & event trigger |
| Analysis | Amazon Rekognition Video (labeling, face‑detection) + Comprehend for text | Native ML models with 95 %+ accuracy |
| Decision | AWS Lambda + DynamoDB | Stateless compute; quick state lookup |
| Alert | SNS/SQS → moderation queue | Immediate notification to human reviewers |

I added a *confidence‑based fallback* that routes borderline cases to a small human pool, keeping cost < $0.05 per video. Using CloudWatch metrics I tuned thresholds: 98 % of flagged videos were true positives; false positives dropped from 12 % to 2.8 %. The system handled peak load (5k videos in one hour) with zero outages.

**Result**  
Within three months, brand risk was eliminated, and user trust scores rose by 15 pp. Operational cost per moderated video fell 40 %, and the pipeline is fully scalable via Lambda concurrency limits and S3 event batching.

**Leadership Principles Reflected**

- **Customer Obsession** – Protect users from harmful content.  
- **Ownership & Dive Deep** – Built, tuned, and monitored every component; iterated on thresholds based on real data.  

Bar‑raisers look for ownership of the end‑to‑end flow, deep understanding of AWS services, quantitative impact, and lessons learned when false positives spiked early in the rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
