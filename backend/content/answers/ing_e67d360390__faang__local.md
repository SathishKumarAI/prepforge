---
qid: ing_e67d360390__faang__local
question: 'Explain: Requirements Clarification — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 548
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:35-05:00'
sources: []
---

## 1️⃣ Clarify  
**Goal:** Show how to master a *system‑design* interview for ML products (e.g., recommendation engine, fraud detector).  
**Assumptions to confirm:**  
- Interviewer expects end‑to‑end flow: data ingestion → feature store → model training → inference.  
- Constraints: latency < 100 ms, throughput > 10k req/s, data freshness ≈ 5 min.  
- Scope limited to design—not algorithmic ML detail.

## 2️⃣ Approach  
1. **Ask clarifying questions** (scale, SLAs, data volume).  
2. **Define high‑level components**: ingestion pipeline, feature store, training cluster, serving layer, monitoring.  
3. **Trade‑off analysis** (batch vs stream, GPU vs CPU, SQL vs NoSQL).  
4. **Sketch architecture diagram** and walk through a request path.  

## 3️⃣ Depth  
- **Ingestion:** Kafka + Flink for real‑time user events; batch S3 loads for historical data.  
- **Feature Store:** Delta Lake on Databricks—ACID, versioned features, low‑latency read via Spark SQL or vector DB (Milvus).  
- **Training:** PyTorch Lightning on Spot EC2 + SageMaker for hyper‑parameter search; model artifacts in S3 and registered in MLflow.  
- **Serving:** TensorFlow Serving behind a Kubernetes Ingress; caching with Redis for cold‑start mitigation.  
- **Observability:** Prometheus/Grafana for latency, MLflow tracking for drift metrics.  

Complexity:  
- Ingestion O(1) per event; feature read O(log n); inference O(1).  
- Training linear in data size but amortized over batch intervals.

## 4️⃣ Edge Cases  
- **Data skew:** re‑partitioning & sampling.  
- **Model drift:** scheduled retraining or online learning fallback.  
- **High concurrency spikes:** autoscale with HPA, pre‑warm containers.  

## 5️⃣ Optimize & Communicate  
Explain why Kafka+Flink outperforms batch for latency; why Delta Lake gives ACID guarantees over raw Parquet. Summarize trade‑offs: cost vs freshness, complexity vs maintainability. End with a quick sanity check: “If the model accuracy drops by 2 %, we’ll retrain every hour—does that fit your SLA?”  

**Result:** A concise, structured answer that demonstrates deep system design insight while keeping within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
