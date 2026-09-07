---
qid: ing_8c41b93557__aws__local
question: 'Explain: uh I think if you include video — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 418
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:07-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team at a fintech startup, we had a monolithic training pipeline that processed ~10 M video frames per day but stalled during inference because of GPU under‑utilization and a single point of failure in our data ingestion layer.

**Action (Design)**  
I re‑architected the pipeline as a serverless microservice stack:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Video ingestion & pre‑processing | **S3 + Lambda@Edge** | Low latency, autoscaling for burst uploads. |
| Feature extraction (CNN inference) | **ECS Fargate + GPU tasks** | Spot pricing reduces cost by 40 %, auto‑scales to 8 GPUs during peak. |
| Model serving | **Amazon SageMaker Endpoint (multi‑model)** | Zero‑downtime blue/green deployments, built‑in A/B testing. |
| Orchestration | **Step Functions + EventBridge** | Explicit state machine, error handling, retry policies. |

We added *SageMaker Experiments* for lineage and *CloudWatch Metrics* to track GPU utilization and inference latency.

**Result**  
- Inference latency dropped from 1.8 s to 0.3 s (6× faster).  
- Throughput increased from 10 M to 45 M frames/day (4.5×).  
- Operational cost fell by 35 % due to spot GPU usage and serverless scaling.

**Reflection & Learning**  
I owned the migration end‑to‑end, diving deep into GPU billing curves and failure modes. The biggest lesson: early observability prevents “unknown unknowns.” I now advocate for embedding metrics in every design review—exactly what Amazon’s *Ownership* and *Dive Deep* principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
