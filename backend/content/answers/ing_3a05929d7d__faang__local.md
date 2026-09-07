---
qid: ing_3a05929d7d__faang__local
question: 'Explain: ML System Design Questions and Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 432
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:11-05:00'
sources: []
---

**Clarify**  
We’re asked to describe how a senior engineer would approach *designing* an end‑to‑end machine‑learning system (data ingestion → model training → serving). Key assumptions: production traffic > 10k requests/sec, data volume ≈ 1 TB/day, latency budget ≤ 200 ms, need for A/B testing and rollback.  

**Approach**  
1. **Problem definition & metrics** – identify business KPI (e.g., click‑through rate) and set a clear success metric.  
2. **Data pipeline** – partition data into training/validation/test; use event streaming (Kafka) + batch ETL (Spark).  
3. **Feature store** – centralize raw, engineered features with versioning; support online/offline consistency.  
4. **Modeling & experimentation** – experiment via MLflow or SageMaker; track hyper‑parameters and results.  
5. **Serving architecture** – microservice + GPU/CPU autoscaling; use a model registry for canary releases.  
6. **Observability** – log predictions, drift metrics, latency dashboards; trigger alerts on concept drift.  

**Depth**  
- *Complexity*: Training cost O(N log N) for tree‑based models; inference latency ≈ O(d) where d = feature dimensionality.  
- *Trade‑offs*: Batch vs real‑time inference (latency vs freshness). Model size vs cold‑start time (use quantization or ONNX).  

**Edge Cases**  
- Data sparsity → fallback to rule‑based scoring.  
- Sudden traffic spike → auto‑scale, circuit breaker.  
- Feature drift → automatic retraining schedule.  

**Optimize & Communicate**  
Explain how each component scales linearly with user base, why we use a feature store for consistency, and how observability lets us roll back quickly—highlighting the iterative feedback loop that aligns engineering with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
