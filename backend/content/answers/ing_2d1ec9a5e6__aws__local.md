---
qid: ing_2d1ec9a5e6__aws__local
question: 'Explain: Scaling and Optimization (10 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 410
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:46-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that had to expose an ML inference pipeline for real‑time fraud detection on the e‑commerce platform. The model needed < 50 ms latency and > 99.9% availability while scaling from 10k to 1M concurrent users during peak sales.

**Action (Design)**  
* **Model serving:** Deployed a TensorFlow Lite model inside an Amazon SageMaker *Endpoint* with *Multi‑Model* containers, auto‑scaling based on CloudWatch CPU/Memory metrics.  
* **Edge caching:** Added an Amazon CloudFront edge cache with Lambda@Edge to short‑circuit inference for previously seen transactions (90 % hit rate).  
* **Feature store:** Used Amazon DynamoDB Global Tables for low‑latency feature lookup, provisioned on demand via Auto Scaling.  
* **Observability:** Integrated Amazon CloudWatch Logs and X-Ray for per‑request latency; set up a Kinesis Data Firehose to feed a Redshift cluster for post‑hoc analysis.

**Result**  
- Latency dropped from 120 ms to 38 ms (≈ 68 % reduction).  
- Throughput increased 4×, handling 1.2 M concurrent sessions without SLA violations.  
- Cost per inference fell by 35 % due to efficient caching and spot‑instance utilization.

**Reflection**  
I practiced *Dive Deep* by profiling every component; discovered that the DynamoDB read capacity was a hidden bottleneck. Adjusting its auto‑scaling policy fixed it. I also embraced *Bias for Action*—rolled out the cache incrementally, monitored impact, then fully enabled it. This iteration taught us that small architectural pivots can yield large cost and performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
