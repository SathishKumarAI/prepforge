---
qid: ing_871e53d804__star__local
question: 'Explain: Choosing the Right Technique — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 319
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:43-05:00'
sources: []
---

**Situation** – At a fintech startup, we had to predict fraudulent transactions in real‑time. The raw logs contained over 10 million events per day, but only 0.5 % were frauds. Our model’s AUC hovered at 0.78 and the latency on the edge gateway exceeded 300 ms.

**Task** – Reduce false positives by 20 % while keeping inference time under 150 ms, and ensure the system could adapt to evolving attack patterns without retraining from scratch.

**Action** – I introduced *context engineering*: instead of feeding raw timestamps and amounts into a single neural net, we built an auxiliary feature extractor that aggregated context over sliding windows (user device fingerprint, geolocation cluster, recent merchant history). We then fed these compact embeddings into a lightweight gradient‑boosted tree model. We also implemented online feature selection with SHAP to drop stale features dynamically. The pipeline was deployed on the edge using ONNX Runtime and we scheduled periodic micro‑updates via A/B testing.

**Result** – AUC jumped from 0.78 to 0.85, false positives dropped by 23 %, and latency fell to 110 ms. The system now self‑tunes its context window size, cutting maintenance effort by 30 %. I learned that thoughtful feature context can be more powerful than deeper models when latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
