---
qid: ing_4c5ef7496e__aws__local
question: 'Explain: Service collaboration — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 459
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:40-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑domain team that needed to expose an ML inference service (image classification) to dozens of microservices while keeping latency < 50 ms and avoiding a single point of failure.

**Action – Pattern Language Design**  
1. **Service Registry + Discovery** – implemented with *AWS Cloud Map* so each consumer could query the current endpoint list without hard‑coding URLs.  
2. **API Gateway + Lambda Edge** – fronted the model via *Amazon API Gateway* and *Lambda@Edge* to offload request validation, caching (TTL = 30 s) and rate limiting.  
3. **Model Hosting on SageMaker Endpoint** – deployed the TensorFlow model as a real‑time endpoint with multi‑AZ deployment; autoscaling based on CPU utilization.  
4. **Event‑driven Collaboration** – for heavy batch jobs, microservices publish to *Amazon SQS* which triggers *SageMaker Batch Transform*, decoupling request traffic from training pipelines.  

**Result**  
- Reduced average inference latency from 120 ms to 45 ms (30% improvement).  
- Eliminated 99.9 % of service‑downtime incidents; mean time to recover dropped from 3 h to < 10 min.  
- Cut operational cost by 22 % by leveraging serverless components and autoscaling.

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered sub‑50 ms latency that directly improved end‑user experience.  
*Ownership & Dive Deep*: Designed the pattern from ground up, iterated on metrics, and learned to balance cost vs reliability after an initial outage caused by a stale registry entry.

**Bar‑raiser Takeaways**  
- Demonstrates ownership: owns entire inference pipeline.  
- Shows depth: explains each AWS service choice and trade‑offs.  
- Quantified impact: clear latency & cost numbers.  
- Learning from failure: iterated on the discovery mechanism after early outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
