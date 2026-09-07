---
qid: ing_7934da3277__aws__local
question: 'Explain: Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 495
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:15-05:00'
sources: []
---

**Situation (S)**  
At my last role I led the redesign of a real‑time recommendation engine for an e‑commerce platform that served ~10 M requests/day. The team was asked to keep latency <200 ms while increasing throughput by 3×.

**Task (T)**  
I had to decide how to balance *latency*, *throughput*, and *bandwidth* in a distributed ML inference pipeline, and design an architecture that met the SLA without blowing costs.

**Action (A)**  

| Metric | What it means | Design choice |
|--------|---------------|----------------|
| **Latency** | Time from request to response. Critical for UX. | Deployed Amazon SageMaker endpoint behind CloudFront + Lambda@Edge; used 2 GB memory instances and autoscaled on CPU utilization, keeping average <170 ms. |
| **Throughput** | Requests processed per second. Needed 3× increase. | Added a sharded Kafka topic (AWS MSK) to buffer requests; each shard fed parallel SageMaker inference containers. Autoscaling based on queue depth maintained ~15k RPS. |
| **Bandwidth** | Data moved per unit time (model size, feature vectors). | Serialized features with Parquet & compressed to 3:1 ratio; used Amazon EFS for shared model storage, reducing network traffic by 40 %. |

I performed a *Dive Deep* analysis of CloudWatch metrics, discovered that the bottleneck was CPU‑bound inference containers. I introduced **Spot Instances** (up to 70 % cost savings) and **SageMaker Model Parallelism**, trading a slight increase in latency for higher throughput.

**Result (R)**  
- Latency dropped from 280 ms to 170 ms (−39 %).  
- Throughput increased from 5k to 15k RPS (+200 %).  
- Bandwidth usage fell by 40 %, saving ~$12K/month.  

The architecture earned a **“Customer Obsession”** tag in the quarterly review because we reduced page‑load times, directly boosting conversion rates by 7 %. It also demonstrated *Ownership* and *Bias for Action*, with measurable impact and lessons learned from iterative A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
