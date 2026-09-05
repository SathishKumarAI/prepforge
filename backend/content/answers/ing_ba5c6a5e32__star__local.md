---
qid: ing_ba5c6a5e32__star__local
question: 'Explain: System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 322
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:47-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a real‑time recommendation engine for a streaming platform that served 1.2 million concurrent users during peak hours. The existing batch pipeline couldn’t meet the sub‑second latency requirement.

**Task:**  
Design an end‑to‑end system that could ingest user interaction data, train models on the fly, and serve predictions with <50 ms latency while keeping costs under $200k/month.

**Action:**  
I started by mapping out the data flow: Kafka streams for event ingestion, a Spark Structured Streaming job to update a feature store in DynamoDB, and a TensorFlow Serving cluster behind an AWS ALB. I leveraged model versioning with MLflow to roll back quickly if drift appeared. For latency, I switched from GPU inference on SageMaker to a lightweight ONNX runtime on Fargate containers, reducing cost by 30 %. I also implemented cache layers using Redis for cold‑start users and added auto‑scaling policies based on CPU usage and request spikes.

**Result:**  
The new system achieved <45 ms average prediction latency during peak traffic, increased recommendation click‑through rate from 3.8 % to 5.6 %, and cut monthly inference costs by 28 %. I learned that a modular design with clear data pipelines and lightweight serving can meet stringent real‑time demands without overprovisioning resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
