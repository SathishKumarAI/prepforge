---
qid: ing_cb67fbca33__faang__local
question: 'Explain: Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 479
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:32:14-05:00'
sources: []
---

**Clarify**  
The interview asks you to *design* a machine‑learning system that meets recent FAANG requirements (e.g., low latency, high throughput, explainability). Confirm constraints: data volume (GB/TB), real‑time inference latency (<10 ms), model drift tolerance, compliance (GDPR), and deployment platform (AWS/GCP/Meta servers).

**Approach**  
1. **Problem definition** – formalize objective (classification/regression) & metrics.  
2. **Data pipeline** – ingest → ETL → feature store (e.g., Feast).  
3. **Modeling** – choose algorithm balancing accuracy vs speed: e.g., LightGBM or a shallow neural net; use AutoML for hyper‑search.  
4. **Training loop** – automated CI/CD with MLflow, versioned datasets, and drift detection.  
5. **Serving** – containerize (Docker), deploy via Kubernetes + TensorRT/ONNX runtime, use edge caching for latency.  
6. **Monitoring & feedback** – online metrics, alerting, retraining triggers.

**Depth**  
- *Feature store*: guarantees consistent feature versions; reduces data leakage.  
- *Model choice*: LightGBM gives <5 ms inference on CPU; a 3‑layer NN with pruning yields <2 ms on GPU.  
- *Training*: use distributed hyper‑parameter search (Optuna + Ray).  
- *Serving*: batch size 1, quantization to INT8, model warm‑up.  
Complexity: training O(N log N), inference O(1) per sample; storage linear in feature count.

**Edge Cases**  
- Missing or noisy features → fallback defaults or imputation.  
- Sudden concept drift → retrain pipeline triggered by AUC drop >5%.  
- Scale spikes → autoscale pods; use pre‑warm strategy.

**Optimize & Communicate**  
Iterate on quantization to trade 10 % accuracy for 50 % latency reduction. Document assumptions, present a Gantt of deployment phases, and emphasize observability dashboards. Conclude with how the design meets FAANG’s reliability, scalability, and compliance standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
