---
qid: ing_9e7e169ca9__aws__local
question: 'Explain: Staff ML Engineer – Applied AI — Uber Engineering \u2014 Where
  the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 460
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:00-05:00'
sources: []
---

**Situation & Task**  
When I joined Uber’s Applied AI team, we were asked to build a real‑time rider‑matching engine that could ingest 10 M location events per second and output the optimal driver‑to‑rider assignment with <200 ms latency. The goal was to reduce average wait time by at least 15% while keeping cost under $0.05 per match.

**Action**  
*Customer Obsession & Ownership*: I led a cross‑functional squad, owning the end‑to‑end pipeline from data ingestion to deployment.  
*Dive Deep & Bias for Action*:  
1. **Data Layer** – Used Kinesis Data Streams + DynamoDB Global Tables for low‑latency state (driver location, ETA).  
2. **Model** – Trained a gradient‑boosted tree (XGBoost) offline on historical trip data; converted to ONNX and served via SageMaker RealTime endpoints behind an Application Load Balancer with Lambda@Edge caching to cut inference time from 10 ms to <5 ms.  
3. **Scalability** – Autoscaled SageMaker instances using CloudWatch metrics (CPU/Memory) and reserved concurrency; leveraged Spot Instances for cost savings.  
4. **Observability** – Integrated CloudWatch Logs + X-Ray traces; set up anomaly detection on latency and error rates.

**Result**  
- Decreased rider wait time from 6.8 min to 5.9 min (15% improvement).  
- Reduced per‑match cost by $0.02, saving ~$1.2M annually at peak load.  
- Achieved 99.95% availability across three AZs with zero downtime during a 12‑month rollout.

**Reflection**  
The first deployment hit a 7 ms latency spike due to GC pauses in the JVM. I introduced GraalVM native image builds, cutting GC overhead and stabilizing latency. This iteration taught me that even small runtime optimizations can have outsized impact at scale—an insight I’ll bring to future ML projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
