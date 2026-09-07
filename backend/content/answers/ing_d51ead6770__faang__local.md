---
qid: ing_d51ead6770__faang__local
question: 'Explain: AI Infrastructure Design — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 459
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:55:17-05:00'
sources: []
---

**Clarify**  
You’re asked to design an *AI infrastructure* that can ingest data, train models, and serve predictions at scale. Confirm the scope: batch vs online training, latency targets for inference, expected model sizes (MLP, CNN, Transformer), storage durability, compliance needs, and cost constraints.

**Approach**  
1. **Data Layer** – raw ingestion → data lake (S3/Blob) → preprocessing pipeline (Kafka + Spark).  
2. **Compute Layer** – distributed training via GPU clusters (EKS/ECS with Spot GPUs or managed SageMaker), autoscaling by job queue length.  
3. **Model Registry & Versioning** – MLflow or custom registry; immutable artifacts in S3, metadata in Postgres.  
4. **Serving Layer** – containerized inference endpoints on Kubernetes + gRPC/REST; use model cache (Redis) and GPU offload for latency‑critical models.  
5. **Observability** – Prometheus/Grafana dashboards for training health, batch logs to ELK, A/B testing via feature flags.

**Depth**  
- *Training*: schedule jobs with Kubernetes Jobs + custom scheduler that balances GPU load; use mixed‑precision (FP16) to cut cost. Complexity O(N log N) for job scheduling.  
- *Serving*: Horizontal pod autoscaling based on CPU/GPU queue depth; cache predictions for 5 s to reduce load.  
- *Storage*: Use versioned S3 buckets with lifecycle policies; encrypt at rest (KMS).  

**Edge Cases**  
- Sudden spike in training data → pre‑provision spare GPUs or fallback to spot.  
- Model drift → automated monitoring triggers retraining pipeline.  
- Data privacy violations → enforce ACLs and audit logs.

**Optimize & Communicate**  
Explain trade‑offs: using managed services (SageMaker) reduces ops but locks you into vendor pricing; custom clusters give flexibility but need more engineering effort. Highlight cost savings from spot instances, caching, and model pruning. Conclude by summarizing how each layer satisfies reliability, scalability, and maintainability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
