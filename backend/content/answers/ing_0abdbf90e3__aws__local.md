---
qid: ing_0abdbf90e3__aws__local
question: 'Explain: This is just one instance of that — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 499
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:50:00-05:00'
sources: []
---

**Situation (S)**  
When I joined the AWS Video Services team, we were tasked with reducing the latency of YouTube’s live‑stream ingestion pipeline in Seattle by 30 % while keeping cost under a $5M cap. The existing system used a monolithic batch processor that stalled during traffic spikes.

**Task (T)**  
I owned the redesign: split the ingest flow into micro‑services, add real‑time anomaly detection using ML, and migrate to serverless for elasticity.

**Action (A)**  
1. **Requirements & Design** –  
   * Split the pipeline into three Lambda layers (ingest, metadata enrichment, transcoding).  
   * Deploy an Amazon SageMaker endpoint that predicts per‑segment buffer size based on historical bitrate patterns.  
   * Use Amazon Kinesis Data Streams to decouple producers and consumers, guaranteeing at‑least‑once delivery.  
2. **AWS Services** – Lambda (compute), SageMaker (model inference), Kinesis (streaming), DynamoDB (state store), CloudWatch & XRay (observability).  
3. **Scalability & Availability** – Auto‑scaling of Lambda functions, multi‑AZ Kinesis shards, and an ELB for the transcoding step ensure 99.999 % uptime.  
4. **Cost Trade‑offs** – Serverless eliminates idle capacity; SageMaker endpoint is warm‑started only during spikes, keeping spend below $4.3M.

**Result (R)**  
Latency dropped from 1.8 s to 1.2 s (33 % improvement), exceeding the goal. The new architecture handled a 5× traffic surge without any SLA breaches, and the total cost decreased by 18 %.  

---

### Leadership Principles Highlighted
- **Ownership** – I drove the end‑to‑end redesign, from data modeling to deployment.  
- **Dive Deep & Bias for Action** – I dissected telemetry, built a predictive model in under two weeks, and iterated on feedback loops.

Bar‑raisers look for clear ownership, deep technical reasoning, measurable impact, and lessons learned (e.g., we initially over‑provisioned SageMaker; after A/B testing we tuned the instance size, saving $200k annually).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
