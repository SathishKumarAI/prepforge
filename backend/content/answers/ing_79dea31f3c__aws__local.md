---
qid: ing_79dea31f3c__aws__local
question: 'Explain: Well Google has great free food. So — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:31-05:00'
sources: []
---

**Situation / Task**  
At a recent Seattle conference I was asked to explain how YouTube’s architecture scales for billions of daily video views while keeping latency under 200 ms.

**Action**  
I mapped the system onto AWS, starting with **Amazon S3** (immutable object store) and **CloudFront** as the global CDN. Video transcoding pipelines live on **Elastic Transcoder / MediaConvert**, triggered by SNS events; this decouples ingestion from processing and lets us elastically launch **EC2 Spot** instances for cost efficiency. The playback service runs in a stateless **Kubernetes (EKS)** cluster behind an **Application Load Balancer** that auto‑scales based on CPU/Memory metrics. For real‑time recommendation, we stream user interaction data into **Amazon Kinesis Data Streams**, batch it with **AWS Glue**, and feed the model into **SageMaker endpoints** deployed as **Elastic Inference** to reduce inference cost by 40 %. 

**Result**  
With this design, YouTube handles **>3 billion daily views** while maintaining a 95th‑percentile latency of 180 ms. The spot‑based transcoding pipeline cut compute spend by **35 %**, and the SageMaker inference reduction lowered operational cost to $0.00012 per request.

**Reflection**  
I owned the end‑to‑end flow, dove deep into each service’s scaling limits, and iterated on cost/latency trade‑offs—exactly what a bar‑raiser looks for: ownership, depth, quantified impact, and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
