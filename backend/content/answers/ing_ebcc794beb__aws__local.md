---
qid: ing_ebcc794beb__aws__local
question: 'Explain: Deterministic, single-token scoring — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 459
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:43-05:00'
sources: []
---

**S – Situation & Task**  
At my last role I led a feature to add *deterministic, single‑token scoring* for Luna Evaluation Models in our Cloud Observability stack (built on Splunk). The goal was to give engineers a fast, reproducible confidence score for each telemetry event without re‑running the full model pipeline.

**T – Technical Design**  
I scoped the requirement: one‑pass inference, no stateful context, and sub‑millisecond latency. I chose **AWS Lambda** + **Amazon SageMaker Edge** to host the lightweight model. The token is extracted via a custom Python UDF in Splunk, passed to Lambda over HTTPS (API Gateway), which loads the serialized ONNX graph from S3. Lambda returns the score instantly.

**A – Action & Dive Deep**  
I benchmarked three serialization formats (ONNX, Pickle, TensorRT). ONNX gave 4 ms inference vs. 12 ms for Pickle. I added a **warm‑up cache** in Lambda to keep the model resident across invocations, cutting cold start from 300 ms to <50 ms. For cost, I reserved one Lambda concurrency unit, keeping spend <$0.02/hr.

**R – Result & Impact (Data)**  
Latency dropped from 30 ms average to **4 ms**, a 87% improvement. The new scoring engine processed 1.2M events/day with <5 % error rate, freeing the model team to focus on higher‑level analytics. I documented the trade‑offs (Lambda limits vs. SageMaker real‑time endpoint) and added an automated rollback in case of score drift.

**Bar‑raiser Notes**  
- **Ownership**: Took end‑to‑end responsibility from concept to deployment.  
- **Dive Deep**: Benchmarked formats, profiled Lambda cold starts.  
- **Quantified Impact**: 87% latency reduction, cost <$0.02/hr.  
- **Learning**: Early failure when using Pickle highlighted the importance of model serialization choice; we corrected course before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
