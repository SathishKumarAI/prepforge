---
qid: ing_e862d6fbc1__star__local
question: 'Explain: Scaling & ops — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 442
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:59-05:00'
sources: []
---

**Situation:**  
At my last company we launched a user‑generated video platform that hit 3 million daily uploads in just six months. Our manual moderation team could only review about 10% of the content, so a backlog of flagged videos grew to over 500 hours per day, threatening compliance and user trust.

**Task:**  
I was tasked with designing a scalable, low‑latency content moderation pipeline that could automatically triage videos, flag potential policy violations, and route only the hard cases to human reviewers—while keeping cost under $0.10 per video processed.

**Action:**  
1. Built an event‑driven architecture on AWS: S3 uploads trigger Lambda → Amazon SQS → Kubernetes‑managed microservices.  
2. Integrated a two‑stage ML pipeline – first a lightweight CNN (MobileNetV2) for quick objectionable‑content detection, then a larger transformer model (ViViT) for nuanced policy checks.  
3. Implemented dynamic scaling with Kubernetes HPA based on queue depth; used Spot instances to reduce compute cost by 35%.  
4. Added a feedback loop: human reviewers’ decisions were stored in DynamoDB and fed back into the models via continuous training jobs on SageMaker, improving accuracy from 84% to 94% over three months.  
5. Monitored performance with Prometheus/Grafana; set alerts for latency >200 ms or false‑positive rate >2%.

**Result:**  
The pipeline processed 90% of videos automatically in under 1.8 seconds each, cutting human review load by 80%. The overall moderation cost dropped to $0.07 per video, and policy compliance incidents fell from 12 per day to 1. I learned that combining lightweight edge models with heavy‑weight transformers, coupled with a robust feedback loop, can turn a costly manual process into an efficient, scalable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
