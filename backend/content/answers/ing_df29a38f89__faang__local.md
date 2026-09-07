---
qid: ing_df29a38f89__faang__local
question: 'Explain: Key structures — Architecture in brief'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 508
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:17:59-05:00'
sources: []
---

**Clarify**  
You’re asking for the *key architectural components* that underpin most modern machine‑learning systems—i.e., the layers from data ingestion all the way to deployment. I’ll assume you mean a typical end‑to‑end pipeline: raw data → feature engineering → model training → inference → monitoring.

**Approach**  
1. **Data Layer** – storage (S3, GCS), streaming (Kafka, Kinesis).  
2. **Feature Store** – reusable, versioned features (Feast, Tecton).  
3. **Training Service** – distributed compute (TensorFlow‑On‑Spark, PyTorch‑Dist).  
4. **Model Registry & Metadata** – tracking hyperparameters, lineage.  
5. **Serving Layer** – low‑latency inference (TF‑Serving, TorchServe, Triton).  
6. **Observability** – metrics, logs, drift detection.

**Depth**  
- *Data ingestion* uses batch ETL + real‑time pipelines; schema enforcement via Avro/Parquet ensures downstream consistency.  
- The *feature store* centralizes features, enabling both offline training and online inference to consume the same values, reducing “data leakage.”  
- Training is often *distributed* across GPUs/TPUs; frameworks auto‑shard data, manage sync gradients (Horovod).  
- A *model registry* records each artifact’s hash, hyperparameters, evaluation metrics—critical for reproducibility.  
- Serving uses gRPC or REST endpoints; batching and model versioning allow blue‑green deployments.  
- Observability includes A/B test dashboards, latency SLAs, and automated drift alerts (e.g., using Evidently).

**Edge Cases**  
- Cold starts in serverless serving can hit latency budgets.  
- Feature drift may silently degrade accuracy if not monitored.  
- Training on imbalanced data requires careful loss weighting; otherwise models overfit majority class.

**Optimize & Communicate**  
- Cache frequently used features at the edge to cut inference time.  
- Use model compression (quantization, pruning) for mobile or latency‑critical use cases.  
- Narrate trade‑offs: “We chose TensorFlow‑On‑Spark because it scales horizontally and integrates with our existing Hadoop stack, but it adds a serialization overhead that we mitigate by using Parquet.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
