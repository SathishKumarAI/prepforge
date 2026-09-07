---
qid: ing_28a848d514__faang__local
question: 'Explain: Deployment & ops — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 544
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:18:03-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design the *deployment‑and‑operations* layer for an AI system (e.g., a recommendation engine). Key questions:  
- Target latency & throughput?  
- Batch vs real‑time inference?  
- Scale of data and traffic (tens of millions/day)?  
- SLAs for availability, rollback, monitoring, security.  

**2️⃣ Approach**  
1. **Model serving layer** – choose between containerized micro‑services (e.g., TensorFlow Serving) or serverless (AWS SageMaker endpoint).  
2. **Scalable infrastructure** – autoscaling groups + load balancers; use spot/low‑cost instances for batch jobs.  
3. **Observability stack** – metrics (Prometheus), logs (ELK), tracing (Jaeger).  
4. **CI/CD pipeline** – automated model training → artifact registry → blue‑green rollout with canary tests.  
5. **Governance & security** – IAM roles, encryption at rest/traffic, audit logs.

**3️⃣ Depth**  
- *Inference latency*: Keep models in memory; use ONNX Runtime or TensorRT for GPU inference.  
- *Throughput*: Horizontal scaling + request batching (e.g., 32‑request batch).  
- *Fault tolerance*: Circuit breaker patterns; retry with exponential backoff.  
- *Data pipeline*: Kafka streams → feature store (Feast) → inference API.  
- Complexity: O(1) per request latency, but overall throughput depends on cluster size (O(N)).  
- Trade‑offs: Serverless gives zero ops but higher cold‑start latency; containers give control but need orchestration.

**4️⃣ Edge Cases**  
- Model drift → scheduled re‑training and A/B testing.  
- Traffic spikes (e.g., holiday sales) → autoscale limits, pre‑warming pods.  
- Security breach → rate limiting, IP whitelisting.  
- Failure of a single node → graceful degradation, fallback to older model.

**5️⃣ Optimize & Communicate**  
- **Performance**: Profile hot paths; replace heavy ops with GPU kernels or quantized models.  
- **Cost**: Spot instances for batch inference; reserve capacity during peak seasons.  
- **Narration**: “We’ll start with a blue‑green rollout to ensure zero downtime, monitor latency with Prometheus alerts, and automatically rollback if the 99th percentile exceeds X ms.”  

This structured plan balances reliability, scalability, and cost while meeting typical FAANG SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
