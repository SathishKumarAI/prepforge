---
qid: ing_81af587785__faang__local
question: 'Explain: Read more — Architecturepatterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 475
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:08-05:00'
sources: []
---

**Clarify**  
The interviewer wants an overview of common *architecture patterns* used when deploying machine‑learning (ML) systems—how data, models, and services are organized at scale. I’ll assume we’re talking about production‑grade pipelines that handle ingestion, training, serving, monitoring, and governance.

---

### Approach
1. **Data‑centric patterns** – batch vs streaming pipelines, feature stores, data lakes.  
2. **Model lifecycle patterns** – *train–serve*, *online‑offline* (e.g., Lambda), *continuous training*.  
3. **Serving patterns** – REST/GRPC microservices, model servers (TensorFlow Serving, TorchServe), edge inference.  
4. **Observability & governance** – logging, metrics, drift detection, A/B testing, feature flagging.

---

### Depth
- **Batch‑to‑Online (Lambda)**: Offline training on large historical data; online lightweight service for real‑time predictions.  
- **Feature Store**: Central repository that guarantees consistent features for both training and serving, reducing duplication.  
- **Model Server**: Containerized services behind a load balancer; can auto‑scale with Kubernetes.  
- **CI/CD Pipelines**: GitOps for model artifacts, automated retraining triggers on data drift or performance thresholds.  

*Complexity*: Data pipelines O(N) per batch; serving latency ~10–100 ms depending on inference size. Trade‑off between freshness (streaming) vs compute cost (batch).

---

### Edge Cases
- **Cold starts** for containers → prewarming strategies.  
- **Feature drift** leading to mispredictions → real‑time monitoring and rollback.  
- **Model version conflicts** when multiple models serve the same feature set.

---

### Optimize & Communicate
I’d suggest a *feature‑store + Lambda* pattern as a baseline, then iterate with edge inference for latency‑critical use cases. In an interview I would sketch this on a whiteboard, annotate trade‑offs, and end by asking if they have specific constraints (e.g., latency budget, data volume) to tailor the recommendation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
