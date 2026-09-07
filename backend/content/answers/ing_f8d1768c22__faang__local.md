---
qid: ing_f8d1768c22__faang__local
question: 'Explain: Step 5: Tradeoffs and Extensions — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 484
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:23-05:00'
sources: []
---

**Clarify**  
You’re asked how to prepare for the *system‑design* portion of a ML interview, focusing on trade‑offs and extensions. Clarify: are we designing an end‑to‑end ML pipeline (data → model → inference) or a specific component (e.g., recommendation engine)? Assume you’ll need to discuss scalability, latency, data consistency, and future extensibility.

**Approach**  
1. **Define the scope & constraints** – input size, throughput, latency targets.  
2. **Sketch core components** – ingestion, preprocessing, training cluster, model serving, monitoring.  
3. **Identify trade‑offs** – batch vs. streaming; on‑prem vs. cloud; monolith vs. microservices.  
4. **Plan extensions** – A/B testing, online learning, multi‑model support.  
5. **Validate with metrics** – cost per inference, model drift detection, fault tolerance.

**Depth**  
- *Ingestion*: Kafka for real‑time streams + S3 for raw blobs; pick batch window to balance freshness vs. processing load.  
- *Preprocessing*: Use Spark for heavy transforms, cache intermediate results in Redis to avoid recomputation.  
- *Training*: Distributed TensorFlow on GKE with autoscaling; checkpointing every epoch to enable rollback.  
- *Serving*: TensorRT‑optimized inference behind a gRPC gateway; use request batching to hit GPU utilization >70%.  
- *Monitoring*: Prometheus metrics for latency + MLflow tracking for accuracy drift; trigger retrain if RMSE exceeds threshold.

**Edge Cases**  
- Sudden traffic spike → autoscaling lag → serve stale model until new instance ready.  
- Data skew in user behavior → model bias, need re‑balancing.  
- Model file corruption → fallback to last good checkpoint.

**Optimize & Communicate**  
Explain why Kafka + Spark gives linear scalability while keeping cost low. Highlight that caching reduces latency but increases memory footprint—trade‑off to mention. Conclude with a roadmap: start simple (single server), add horizontal scaling, then introduce online learning for real‑time personalization. This shows you can balance performance, cost, and future growth, exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
