---
qid: ing_10a3fc2f36__aws__local
question: 'Explain: Requirements — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 486
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:04-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to build a real‑time content moderation pipeline for a global marketplace that needed to flag offensive images, text, and audio before user‑generated content hit the platform. The goal was 99 % accurate detection with < 2 s latency per item while staying under $0.02 per moderation request.

**Action – Design & Implementation**  
*Requirements:*  
- *Accuracy*: ≥ 99 % precision/recall on multilingual text, multi‑modal images/audio.  
- *Latency*: ≤ 2 s end‑to‑end.  
- *Cost*: <$0.02 per moderation.  

I architected a serverless microservice using **Amazon S3** for raw uploads, **AWS Lambda** (Python) for orchestration, and **Amazon SageMaker endpoints** for inference:  
1. **Text** → Comprehend Custom & custom BERT model in SageMaker.  
2. **Images** → Rekognition + a fine‑tuned YOLOv5 on SageMaker.  
3. **Audio** → Transcribe via Amazon Transcribe, then pass text to the same BERT pipeline.  

All Lambda functions were event‑driven (S3 PUT) and used provisioned concurrency for burst traffic. Results were written back to a DynamoDB table with TTL for audit.  

*Scalability & Availability:*  
- Serverless guarantees auto‑scale; SageMaker endpoints use multi‑AZ deployment.  
- S3 provides 99.999% durability; Lambda has built‑in retry and dead‑letter queues.

**Result**  
Within three months, we achieved **99.2 % detection accuracy** (precision 98.7%, recall 99.5%) and an average latency of **1.6 s**. Cost per moderation dropped to **$0.015**, a 25 % savings over the legacy on‑prem solution.

**Reflection & Learning**  
Initially we underestimated the cost impact of synchronous SageMaker calls, so I introduced async batch inference for low‑priority content, cutting costs by another 10 %. This iteration taught me to *Dive Deep* into pricing models and to *Own* both performance and budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
