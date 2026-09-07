---
qid: ing_b3430e3e37__aws__local
question: 'Explain: Characteristic #3: It’s thoughtfully stateful or stateless'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 358
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:08-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* Our recommendation engine was lagging during peak hours—latency spiked to 1 s and click‑through dropped 12%.  
*Task:* Redesign the inference pipeline so it could scale elastically while maintaining state where needed.  
*Action:* I evaluated a stateless Lambda+Step Functions flow versus a stateful ECS + Redis cache. The stateless model used **Amazon SageMaker Runtime** for on‑demand scoring; the stateful version kept user session embeddings in **ElastiCache‑Redis** and leveraged **AppConfig** to toggle between modes.  
*Result:* Switching to the hybrid design cut average inference latency from 1 s to 220 ms (a 78% improvement) and increased CTR by 9% during peak, saving ~$350k annually on EC2 capacity. The stateful cache also reduced SageMaker endpoint invocations by 35%, lowering costs.

**Dive Deep & Deliver Results**

I instrumented the pipeline with CloudWatch metrics and traced each request through X-Ray to identify bottlenecks. The key insight was that session‑specific embeddings were reused for up to 30 minutes; caching them avoided redundant recomputation. I documented trade‑offs: stateless is simpler and fully serverless, but stateful offers lower latency when user context matters.  

**Bar‑raiser takeaway:** Ownership of the end‑to‑end flow, deep dive into performance data, and quantifying impact with real metrics demonstrate a clear value‑add to AWS customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
