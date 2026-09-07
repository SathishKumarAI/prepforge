---
qid: ing_11b9b1f994__aws__local
question: Disengagement rate is a weak safety proxy. How would you actually measure
  whether the Driver is safe enough to ship?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 471
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:42-05:00'
sources: []
---

**Situation** – At my last role as Lead for an autonomous‑driving platform, the engineering team relied on *disengagement rate* to gauge safety before a feature rollout. In a recent sprint we saw a 12 % drop in disengagements, yet post‑deployment incident logs revealed several near‑misses that the metric had missed.

**Task** – I was tasked with building a robust, data‑driven safety measurement framework that could be deployed in CI/CD pipelines and used by product owners to decide on ship‑readiness.

**Action** –  
1. **Define hard KPIs**:  
   - *Collision probability* (events/10 000 km)  
   - *Near‑miss rate* (threshold distance < 0.5 m for > 2 s)  
   - *Lane‑keeping error density* (meters per 100 km).  
2. **Collect telemetry**: Leveraged AWS IoT Greengrass on each vehicle to stream high‑frequency sensor data to Amazon Kinesis Data Streams.  
3. **Process & analyze**: Deployed an Apache Flink job on Amazon EMR Serverless to compute the KPIs in near real‑time; results stored in DynamoDB for quick lookup by the Release Manager.  
4. **Integrate with PR checks**: Created a Lambda that queries DynamoDB and fails a pull request if any KPI exceeds predefined thresholds (e.g., collision probability > 0.1/10k km).  
5. **Iterate & validate**: After rollout, our new metric set reduced post‑deployment incidents by **35 %** while maintaining the same throughput of feature releases.

**Result** – The new safety measurement pipeline became a mandatory gate in the release process, cutting downstream crash investigations by 40 % and earning a “Customer Obsession” kudos from leadership.  

*Leadership Principles*: **Ownership** (I took responsibility for redefining safety metrics), **Dive Deep** (engineered end‑to‑end data pipelines), **Deliver Results** (quantified impact on incident reduction).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
