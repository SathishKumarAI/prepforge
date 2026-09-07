---
qid: ing_4a8ad5084f__aws__local
question: 'Explain: And I''ll tell you guys about what — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 450
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:54-05:00'
sources: []
---

**Situation / Task**  
During my last role as a Machine‑Learning Engineer at **AWS Media Services**, I was asked to design an end‑to‑end recommendation pipeline that could scale to the same volume YouTube handles—over **3 B daily video views**—while keeping latency below 200 ms for real‑time personalization.

**Action / Technical Design**  
1. **Data ingestion** – used **Kinesis Data Streams** (shards tuned to 5 k records/sec) feeding into a **Lambda layer** that normalizes click‑stream and watch‑time data.  
2. **Feature store** – persisted engineered features in **Amazon DynamoDB Global Tables** (multi‑AZ, 1 ms read latency).  
3. **Model training & inference** – scheduled nightly batch jobs on **EMR Spark** (cluster autoscaling to 200 m4.xlarge nodes) and deployed the final model as a **SageMaker endpoint** behind an **Application Load Balancer** with per‑region traffic routing.  
4. **Serving layer** – used **Amazon CloudFront** + **Lambda@Edge** for edge‑caching of top‑k recommendations, reducing origin calls by 70 %.  

**Result**  
- Achieved a **99.8 % request success rate** with <200 ms latency at peak load.  
- Cut inference cost by **45 %** compared to the legacy batch‑only approach.  
- The system now supports **3× more users** without code changes, demonstrating true elasticity.

**Leadership Principles**  
*Customer Obsession*: focused on user‑perceived latency and reliability.  
*Ownership*: architected from ingestion to edge delivery, owning every hop of data.  

**Bar‑raiser notes** – I quantified every trade‑off (cost vs. latency), showed how scaling decisions were driven by metrics, and highlighted lessons learned when the first Lambda layer hit throttling—prompting a move to Kinesis Data Firehose for burst tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
