---
qid: ing_3b8aaec747__aws__local
question: 'Explain: Build an AI-powered application from the ground up in our Deep
  Learning Course .'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 358
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:52-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup, we were asked to launch an AI‑driven fraud detection platform within six months. The goal was 99% true‑positive rate while keeping latency under 200 ms for real‑time transactions.

**Action**  
*Ownership & Bias for Action*: I led a cross‑functional squad and mapped the full data pipeline—Kafka ingestion → Lambda preprocessing → SageMaker training → API Gateway inference.  
*Dive Deep*: We performed feature engineering on over 1M historical logs, discovered an imbalance of 0.5% fraud, so we used SMOTE + class‑weighting.  
*Invent & Simplify*: Built a modular PyTorch model that auto‑scales via SageMaker Endpoint with Multi‑Target Deployment (CPU & GPU).  
AWS services: **Kinesis** for streaming, **S3** for raw/processed data, **Glue** for cataloging, **DynamoDB** for feature store, **SageMaker Studio** for rapid experimentation, **CloudWatch** for observability.

**Result**  
- 99.2% precision / 97.8% recall (vs baseline 92%).  
- Latency dropped from 350 ms to 180 ms.  
- Cost reduced by 35% using spot instances + autoscaling.  

**Reflection**  
The first week we underestimated the data volume, causing a training timeout; that failure drove us to implement incremental batch learning. I now routinely run post‑mortems to capture “what went wrong” and iterate on our ML ops pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
