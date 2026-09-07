---
qid: ing_f72e9c7459__faang__local
question: 'Explain: Design Considerations for Cloud-Native Data Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 458
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:14:52-05:00'
sources: []
---

**Clarify**  
The interviewer asks what key factors influence the design of a data system that runs natively in a cloud environment. I’d confirm whether we’re targeting batch/streaming workloads, latency requirements, and compliance needs (e.g., GDPR).  

**Approach**  
1. **Scalability & Elasticity** – horizontal scaling, auto‑scaling groups.  
2. **Resilience & Fault Tolerance** – multi‑AZ, replication, retry logic.  
3. **Observability** – metrics, logs, tracing.  
4. **Security & Governance** – encryption at rest/transport, IAM, data cataloging.  
5. **Cost Efficiency** – spot instances, serverless options, right‑size storage tiers.  

**Depth**  
- *Compute*: Use managed services (e.g., Amazon SageMaker, Google AI Platform) or container orchestration (EKS/K8s) with autoscaling pods.  
- *Storage*: Combine object store (S3/Blob) for raw data, a lakehouse (Delta Lake/Spark) for structured queries, and NoSQL (DynamoDB/Cosmos) for fast key‑value access.  
- *Streaming*: Kafka or managed Pub/Sub + event‑driven Lambdas/K8s workers.  
- *Model serving*: TensorFlow Serving or TorchServe in containers behind API gateways with traffic splitting.  
Complexity: O(log n) query latency with proper partitioning; cost ~O(1) per GB for storage, variable compute costs.  

**Edge Cases**  
- Sudden data spikes → autoscaling lag.  
- Multi‑region compliance → data residency constraints.  
- Model drift → lack of continuous monitoring.  

**Optimize & Communicate**  
Explain that choosing serverless for unpredictable bursts reduces idle cost; containerized services give control over GPU usage. Highlight trade‑offs: managed vs. self‑managed, cost vs. latency. Conclude by stressing the need to iterate on observability and governance as data volumes grow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
