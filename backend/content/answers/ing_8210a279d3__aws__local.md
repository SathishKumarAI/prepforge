---
qid: ing_8210a279d3__aws__local
question: 'Explain: Who this is for — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 446
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:55-05:00'
sources: []
---

**Situation**  
During a recent AWS mobile‑app redesign I was asked to design an ML‑driven recommendation engine that runs on-device and syncs with the cloud. The goal: boost user engagement while respecting privacy and battery limits.

**Task**  
Create a system that (1) trains models in the cloud, (2) delivers lightweight inference binaries to millions of Android/iOS devices, and (3) aggregates anonymized feedback for continuous improvement—all within 5 % of our baseline latency budget.

**Action**  
- **Cloud side:** Use SageMaker Pipelines + Glue for data prep; train a LightGBM model on 10 TB of clickstream data. Deploy via SageMaker Edge Manager to package the model as an ONNX bundle.  
- **Edge delivery:** Store bundles in Amazon S3 with CloudFront CDN, signed URLs for secure, per‑user caching. Devices pull updates via AWS IoT Core (MQTT) and cache locally using SQLite.  
- **Feedback loop:** Each app writes a 50 B telemetry record to Kinesis Data Streams; Lambda aggregates it into daily batches sent back to SageMaker for retraining.  
- **Scalability/Availability:** Edge bundles served from 99.99% S3 availability, CDN edge caches reduce latency <30 ms globally. Retraining pipelines run on Spot instances (cost +$120k/yr savings).  

**Result**  
Within six months:  
- Recommendation click‑through rate rose **18 %** (from 4.2 % to 5.0 %).  
- Device CPU usage dropped by **27 %** compared to server‑side inference.  
- Data transfer costs fell 35 % due to CDN caching.  

*Leadership Principles:* **Customer Obsession** – delivered a faster, privacy‑respecting experience; **Ownership** – drove the full ML lifecycle from data prep to on-device inference. *Bar‑raiser focus:* depth of AWS service choice, quantifiable ROI, and iterative learning from early telemetry failures (e.g., adjusting model size after battery drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
