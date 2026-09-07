---
qid: ing_1895834696__aws__local
question: 'Explain: Streaming using gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 422
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:16-05:00'
sources: []
---

**Situation & Task**  
I was tasked to deliver a real‑time fraud‑detection pipeline for a payments platform that ingested millions of events per day. The team needed low‑latency, bi‑directional streaming so the ML model could both receive transaction data and push back risk scores instantly.

**Action – Design**  
* **Protocol**: gRPC with protobuf streams (server‑to‑client and client‑to‑server) for efficient binary payloads and native flow control.  
* **AWS services**:  
  * **Amazon Kinesis Data Streams** → ingest raw events, auto‑scaling shards.  
  * **AWS Lambda (via EventBridge)** → deserialize protobuf, forward to a **gRPC‑enabled ECS Fargate cluster** running the inference service.  
  * **Amazon SageMaker Endpoint** (multi‑model) → hosts the XGBoost model; autoscaling on CPU utilization.  
* **Observability**: CloudWatch metrics for round‑trip latency, Lambda error rates; Prometheus + Grafana for gRPC call stats.  

I wrote a custom **gRPC interceptor** to tag each request with a trace ID and push it to X-Ray, enabling end‑to‑end visibility.

**Result**  
Latency dropped from 250 ms (REST polling) to <80 ms average; throughput increased to 2× the previous peak. The fraud‑detection accuracy improved by 4% due to richer feature context. Cost was kept below \$12k/month by using Fargate spot and SageMaker on-demand scaling.

**Reflection**  
I owned the end‑to‑end pipeline, *dived deep* into protobuf serialization overhead, and learned that a simple retry policy in gRPC drastically reduced error churn. This aligns with **Customer Obsession** (real‑time risk scores) and **Ownership** (full delivery from ingestion to inference).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
