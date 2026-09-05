---
qid: ing_d3ce646ef8__star__local
question: What are the three types of data models?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:11-05:00'
sources: []
---

**Situation** – At a fintech startup, we were building an automated credit‑scoring system for a new loan product. The data lake already held transactional records, customer profiles, and external credit bureau feeds, but the team was unsure which modeling approach would give us the best balance of speed, interpretability, and accuracy.

**Task** – I had to evaluate the three core data model families—statistical, machine‑learning, and deep learning—to recommend a production‑ready pipeline that could handle real‑time scoring under strict latency constraints.

**Action** – First, I benchmarked a logistic regression (statistical) for baseline interpretability. Next, I built an XGBoost ensemble (machine‑learning) to capture non‑linear interactions while keeping inference <5 ms per request. Finally, I prototyped a lightweight CNN on tabular embeddings (deep learning) to test if feature hierarchy would improve AUC. I used TensorFlow Lite for deployment and performed cross‑validation with 10‑fold stratification to compare performance.

**Result** – The XGBoost model delivered a 3.2 % lift in AUC over logistic regression, while keeping latency at 4 ms, enabling live scoring on our API gateway. I documented trade‑offs: statistical models offer transparency, machine‑learning provides the best accuracy‑latency balance, and deep learning shines when feature interactions are complex but requires more compute. This framework guided our model selection for the next product launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
