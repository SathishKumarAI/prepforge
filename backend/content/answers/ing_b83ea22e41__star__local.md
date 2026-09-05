---
qid: ing_b83ea22e41__star__local
question: What is training-serving skew, and does it have an equivalent in LLM applications?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 362
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:51-05:00'
sources: []
---

**Situation** – While leading the rollout of a recommendation engine for an e‑commerce platform, we noticed that user click‑through rates dropped from 4.2% during offline training to 2.8% after deployment, even though the model’s validation accuracy stayed above 90%.

**Task** – I had to diagnose why the performance gap existed and design a fix that would keep the online system stable while preserving training gains.

**Action** – First, I compared feature distributions between the training data (historical logs from the last six months) and the live traffic. I discovered a shift in the “time‑of‑day” feature: training had more evening sessions, whereas production traffic was skewed toward mornings. I then introduced an online feature‑scaling layer that matched the distribution seen during training by applying a real‑time histogram equalizer. Additionally, I set up a rolling‑window retraining pipeline that continuously sampled new data and updated the model every 48 hours, ensuring the training dataset reflected current user behavior.

**Result** – After implementing these changes, click‑through rates rose to 4.0%, nearly matching offline metrics. The system also reduced prediction latency by 15% due to simpler scaling logic. I learned that training‑serving skew is not just a theoretical concern; it manifests as feature drift and can be mitigated with real‑time normalization and continuous retraining—principles equally applicable when fine‑tuning large language models, where the distribution of prompts or token frequencies may differ between training corpora and user queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
