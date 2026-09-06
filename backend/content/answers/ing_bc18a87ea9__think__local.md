---
qid: ing_bc18a87ea9__think__local
question: 'Explain: Testing in production — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 619
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:23:23-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Understand how a large‑scale ML system evolves from a small testbed (zero traffic) to handling 50 M uploads/day in production.  
- *Assumptions*: The reader knows basic ML ops concepts, but not Canva’s specific stack or business domain. Assume the blog explains architecture choices, data pipelines, and monitoring.

**2️⃣ Adopt a “pipeline‑centric” mental model**  
1. **Data ingestion → preprocessing → feature extraction → model inference → post‑processing → serving**.  
2. For scaling: each stage must be horizontally scalable, stateless where possible, and observable.  
3. Canva’s case will likely touch on *batch vs streaming*, *caching*, *model versioning*, and *canary deployments*.

**3️⃣ Step‑by‑step reasoning**  
- **Start small**: zero uploads → manual tests, local dev environment, single‑node inference.  
- **Identify bottlenecks**: CPU/GPU limits, I/O latency, network bandwidth.  
- **Introduce microservices & containerization**: Docker + Kubernetes to isolate workloads.  
- **Scale horizontally**: auto‑scaling groups for inference pods; load balancers; CDN for static assets.  
- **Data pipeline scaling**: Kafka/Redis streams for real‑time uploads; batch jobs on GCP Dataflow or Spark for heavy preprocessing.  
- **Model deployment strategy**: blue‑green, canary, A/B testing to roll out new models without downtime.  
- **Observability & monitoring**: Prometheus + Grafana dashboards; automated alerts when latency > X ms or error rate > Y%.  
- **Feedback loop**: Use production metrics to retrain models, adjust feature pipelines.

**4️⃣ Common traps to avoid**  
- *Assuming monolithic scaling*: Don’t try to scale the whole stack at once. Break into independent services.  
- *Ignoring cold starts*: In serverless or containerized setups, ensure warm pools for latency‑sensitive inference.  
- *Overlooking data consistency*: With 50 M uploads/day, eventual consistency vs strict ACID can drastically affect user experience.  
- *Neglecting cost monitoring*: Autoscaling can spike bills if not capped; set hard limits.

**5️⃣ Sanity‑check & articulate**  
- **Recount the journey**: “From a single dev box to 50 M uploads/day, Canva incrementally added horizontal scaling, observability, and robust data pipelines.”  
- **Use concrete numbers**: e.g., “inference latency dropped from 300 ms to <30 ms after adding GPU‑enabled pods.”  
- **Relate back to ML ops principles**: Data quality → model reliability → production resilience.  

By following this structured thought process, you’ll be able to explain the scaling narrative clearly and confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
