---
qid: ing_81a4b972b2__aws__local
question: 'Explain: Moderating content — Moderating content - Amazon Rekognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 432
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:55-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑functional team to launch an automated moderation pipeline for user‑generated video on our marketplace. The goal was to reduce the 12 % monthly churn caused by policy violations while keeping latency below 2 s per clip.

**Task (T)**  
Build a real‑time content filter that scales to millions of uploads, delivers 99.9 % availability, and costs <$0.03 per moderation request.

**Action (A)**  
- **Ownership & Dive Deep:** I mapped the entire data flow, from S3 ingestion → Lambda → Rekognition → DynamoDB flags.  
- **AWS services chosen:**  
  - *Amazon Rekognition Video* for face, object, and text detection.  
  - *Step Functions* orchestrate multi‑stage analysis (pre‑filter, deep‑scan).  
  - *Kinesis Data Streams* buffer uploads to avoid throttling.  
  - *SQS* decouples downstream review queues.  
- **Cost & scalability:** By enabling the *Rekognition “Detect Moderation Labels”* API in batch mode and caching recurring clips in ElastiCache, we cut per‑request cost from $0.12 → $0.025. Auto‑scaling Lambda reserved concurrency ensures 99.95 % availability even during flash sales.  
- **Bias for Action:** Deployed a canary rollout; after 1 week metrics showed a 30 % drop in policy breaches and a 4 % lift in user satisfaction scores.

**Result (R)**  
Within three months, the system processed 2 M clips/day with <0.5 s latency, reduced moderation backlog by 85 %, and saved $120k annually. The project exemplified **Customer Obsession**—protecting buyers—and **Ownership**, delivering measurable business value while learning to balance accuracy vs cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
