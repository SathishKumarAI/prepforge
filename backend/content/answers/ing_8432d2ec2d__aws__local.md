---
qid: ing_8432d2ec2d__aws__local
question: 'Explain: Recent — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 458
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:03-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a project that needed real‑time traffic prediction for the METR‑LA sensor network (≈ 2000 loop detectors, ~ 10 Hz data). The goal was to reduce congestion by 15% and give drivers a 5‑minute ahead estimate.

**Action – Technical Design**  
I chose an end‑to‑end AWS stack:

| Layer | Service | Reason |
|-------|---------|--------|
| Ingestion | Kinesis Data Streams + Lambda | Handles ~ 20 k events/sec, auto‑scales with shard count. |
| Storage | S3 (raw) + DynamoDB (state) | Durable, low‑cost archive; fast key‑value lookups for model parameters. |
| Processing | SageMaker Pipelines (PyTorch) | Trains a Temporal Convolutional Network on 30 days of data weekly; uses Spot Instances to cut cost by 40%. |
| Serving | SageMaker Endpoint + API Gateway | Low‑latency (< 200 ms) predictions, autoscaling based on CloudWatch metrics. |

I introduced **Feature Store** (SageMaker Feature Store) to decouple feature engineering from training, reducing dev time by 50%.

**Result**  
- Prediction accuracy: MAE = 0.42 km/h vs baseline 1.12 km/h (≈ 63% improvement).  
- Congestion delay reduced by **17%**, exceeding the target of 15%.  
- Operational cost dropped 35% after moving to Spot and autoscaling.

**Reflection & Learning**  
I realized early that the shard count was a bottleneck; after monitoring I increased shards from 8 to 16, preventing data loss. This iteration taught me to **own the pipeline end‑to‑end** and validate assumptions with real metrics—exactly what Amazon expects from a bar‑raiser.

*Leadership Principles: Customer Obsession (delivering value), Ownership (full lifecycle control), Dive Deep (metrics & tuning).*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
