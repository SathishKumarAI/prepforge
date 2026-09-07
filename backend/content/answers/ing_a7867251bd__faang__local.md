---
qid: ing_a7867251bd__faang__local
question: 'Explain: Handling Evolving Fraud Patterns — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 415
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:13:57-05:00'
sources: []
---

**Handling Evolving Fraud Patterns – Fraud Detection**

| Step | What to do |
|------|------------|
| **Clarify** | We need a system that flags fraudulent transactions in real‑time while adapting to new attack vectors (e.g., synthetic IDs, collusion). Assume we have labeled historical data, streaming input, and a deployment budget for model retraining. |
| **Approach** | 1) Build an *online learning* pipeline: feature extraction → incremental gradient boosting (LightGBM with `learning_rate=0.01`). 2) Use *concept‑drift detection* (ADWIN) to trigger full re‑training when the error rate spikes. 3) Maintain a *shadow model* on recent data for quick sanity checks. |
| **Depth** | • Features: static (user profile), dynamic (sequence embeddings via LSTM), and adversarial (graph centrality). <br>• Training: mini‑batch SGD with early stopping; evaluate AUC‑ROC per shard. <br>• Complexity: O(n log n) per batch for tree updates, memory O(k) where k = number of trees. |
| **Edge Cases** | • Sudden spike in false positives → tune threshold via ROC‑curve analysis.<br>• Zero‑label drift (new fraud type) → fallback to rule‑based heuristics and manual review. <br>• Data poisoning attempts → robust loss functions (Huber). |
| **Optimize & Communicate** | • Cache feature pipelines to reduce latency (<5 ms).<br>• Use model distillation for edge devices if needed.<br>Explain the trade‑off: frequent retraining improves detection but costs compute; we balance with ADWIN’s false‑alarm rate. |

*Result*: A self‑adjusting fraud detector that keeps up with evolving tactics while maintaining low latency and high precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
