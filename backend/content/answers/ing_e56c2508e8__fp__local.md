---
qid: ing_e56c2508e8__fp__local
question: 'Explain: High-level design — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 438
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:25-05:00'
sources: []
---

## High‑level design cheat sheet – “System Design” in a Machine‑Learning context  

1. **Problem framing**  
   *Ask*: What is the core business goal? (e.g., “predict churn with < 10 ms latency”). The answer determines the required accuracy, data volume, and real‑time constraints.  

2. **Key metrics & trade‑offs**  
   - **Latency vs. Throughput** – derived from queuing theory: \(E[W] = \frac{ρ}{μ(1-ρ)}\).  
   - **Accuracy vs. Complexity** – bias–variance trade‑off; model size grows linearly with feature dimension.  

3. **Data pipeline**  
   *Ingest → Store → Preprocess → Train → Serve.*  
   • Use a *streaming layer* (Kafka) for low‑latency updates, *batch layer* (HDFS/Parquet) for training.  
   • Feature store decouples feature engineering from model inference; treat features as first‑class citizens.  

4. **Model serving**  
   - **Stateless microservice** + in‑memory cache (Redis) → \(O(1)\) lookup for embeddings.  
   - Autoscale via horizontal pods; keep warm replicas to avoid cold starts.  

5. **Observability & A/B testing**  
   *Metrics*: AUC, precision@k, latency histograms.  
   Deploy with *canary* rollout and roll‑back on drift (concept drift detection).  

6. **Security & compliance**  
   Encrypt data at rest; audit model decisions for bias.  

> **Non‑obvious insight**: Treat the *feature store* as a database, not just a cache. It’s the single source of truth that eliminates feature drift and ensures reproducible training vs. serving pipelines—essential when models live longer than code deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
