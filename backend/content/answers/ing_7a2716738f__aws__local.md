---
qid: ing_7a2716738f__aws__local
question: 'Explain: Typical flow — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:28-05:00'
sources: []
---

**Situation / Task**  
I was asked to sketch a mobile‑app ML pipeline that recommends personalized workouts in real time. The goal: <u>deliver a 95 % recommendation accuracy while keeping latency under 200 ms and daily cost <$0.05 per active user</u>.

**Action – Design & AWS stack**  

| Layer | Service(s) | Why |
|-------|------------|-----|
| **Edge inference** | Amazon SageMaker Edge Manager + TensorFlow Lite model | Low‑latency, offline inference on device; updates via OTA. |
| **Feature store** | DynamoDB (partitioned by user_id) + DAX cache | 10 k concurrent reads/writes with <10 ms latency; auto‑scaling throughput. |
| **Model training & scoring** | SageMaker Pipelines + Lambda + EventBridge | CI/CD for nightly retrain; Lambda triggers when new data lands in S3; EventBridge routes to SageMaker endpoints. |
| **Real‑time scoring (fallback)** | API Gateway + Lambda + SageMaker Runtime | 99.9 % availability, auto‑scaling with provisioned concurrency. |
| **Analytics & monitoring** | CloudWatch + Athena on S3 logs | Quantify hit‑rate, latency, cost per inference. |

**Results (Quantified Impact)**  
- Latency dropped from 350 ms to <180 ms after edge deployment.  
- Recommendation accuracy improved from 86 % to 94.5 %.  
- Cost reduced by 70 %: $0.12 → $0.04 per active user/day.  

**Reflection & Learning**  
I owned the end‑to‑end loop, diving deep into DynamoDB hot key patterns and SageMaker model size trade‑offs. A mis‑estimated cache TTL initially caused spikes; I added a “warm‑up” Lambda to pre‑populate DAX, turning a 15 % SLA dip into zero impact. This experience sharpened my bias for action—deploying incremental edge updates—and reinforced the importance of continuous metrics to drive ownership and innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
