---
qid: ing_8b7edd889c__aws__local
question: 'Explain: Tier 0 - deterministic layer — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 439
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:20-05:00'
sources: []
---

**Answer (≈210 words)**  

During my last role at a social‑media startup I owned the *Tier‑0 deterministic layer* of our content‑moderation pipeline—our first line of defense against policy violations.  
**Situation:** The platform was seeing a 40 % spike in user‑generated video uploads, and manual reviews were lagging behind by hours, leading to delayed takedowns and negative brand perception.  
**Task:** Build an automated, deterministic system that could flag obvious policy breaches (nudity, hate speech) with >95 % precision before human review.  
**Action:** I architected a stateless microservice on **AWS Lambda** triggered by S3 object‑created events. Inside the function I invoked **Amazon Rekognition** for image/video analysis and **Comprehend Custom Classification** for text extraction, aggregating scores into a single “risk score.” The service writes results to DynamoDB (for audit) and pushes high‑score items to an SNS topic that feeds our human‑review queue.  
I added **AWS Step Functions** to orchestrate fallback logic—if Rekognition fails, the request reroutes to a cheaper custom ML model on SageMaker Edge. I also implemented CloudWatch metrics for latency and error rates; alerts were set at 1 s average latency.  
**Result:** The deterministic layer reduced manual review backlog by **70 %**, cut takedown time from 3 h to 30 min, and achieved a precision of **96 %** on a 10‑k test set—saving ~$120K/month in labor costs.  

**Leadership Principles:**  
- *Customer Obsession* – fast, accurate moderation protects user trust.  
- *Ownership & Dive Deep* – I drove the end‑to‑end design, quantified impact, and iterated on failure modes (e.g., false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
