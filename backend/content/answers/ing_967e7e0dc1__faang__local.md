---
qid: ing_967e7e0dc1__faang__local
question: 'Explain: 🧱 Data Engineer × AI - Interview Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:05-05:00'
sources: []
---

**🧱 Data Engineer × AI – Interview Guide**

| Section | What to cover |
|--------|---------------|
| **Clarify** | *Restate*: “You’re asked how a data engineer can enable AI pipelines.” <br>*Assumptions*: 1) Enterprise‑scale data (TBs), 2) Real‑time & batch workloads, 3) ML models in production. |
| **Approach** | 1️⃣ Data ingestion → streaming/batch.<br>2️⃣ Clean / feature store.<br>3️⃣ Model training & versioning.<br>4️⃣ Serving + monitoring. |
| **Depth** | *Ingestion*: Kafka/Beam → Spark or Flink for ETL; schema registry for evolution.<br>*Feature Store*: Delta Lake/Feast; immutable, versioned features with lineage. <br>*Training*: Airflow DAGs orchestrating PyTorch/TensorFlow jobs on Kubernetes; use MLflow for experiment tracking. <br>*Serving*: TensorRT + Envoy or TorchServe behind a gRPC API; cache hot embeddings in Redis. <br>Complexity: O(N) per batch, streaming linear‑time; trade‑off between latency (streaming) vs throughput (batch). |
| **Edge Cases** | • Data drift → re‑train triggers.<br>• Missing values or schema changes → automated fallbacks.<br>• Model rollback after performance degradation. Test with synthetic pipelines and Canary releases. |
| **Optimize & Communicate** | *Improvements*: adopt serverless Spark (Databricks) for cost, use vectorized GPU inference to cut latency. <br>*Narration*: “I’d start by building a robust ingestion layer that guarantees schema‑safe streams, then move those into a feature store that supports both batch and online lookups, ensuring the AI model always sees consistent data.” |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
