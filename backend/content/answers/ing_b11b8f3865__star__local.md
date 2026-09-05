---
qid: ing_b11b8f3865__star__local
question: 'Explain: Explain precision, recall, and F1. Give a concrete case where
  99% accuracy means the model is useless.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 316
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:04-05:00'
sources: []
---

**Situation** – I was working on a credit‑card fraud detection system for a fintech startup. The dataset had only 0.5 % fraudulent transactions, so the model could achieve 99 % accuracy by simply predicting “legitimate” every time.

**Task** – My goal was to build a model that actually caught fraud while keeping false alarms low enough not to annoy users or overload the compliance team.

**Action** – I switched focus from overall accuracy to precision (how many flagged transactions were truly fraudulent) and recall (what fraction of all frauds we caught). I tuned the decision threshold, added cost‑sensitive loss, and experimented with ensemble methods. I then evaluated using F1‑score, the harmonic mean of precision and recall, to balance both metrics.

**Result** – The final model achieved 92 % recall and 88 % precision, giving an F1 of 0.90 compared to a naïve 99 % accuracy baseline that had 100 % precision but only 0.5 % recall. This meant we detected almost all frauds while keeping false positives manageable—something the 99 % accuracy model never achieved. I learned that in highly imbalanced problems, accuracy can be misleading; precision, recall, and F1 give a realistic picture of real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
