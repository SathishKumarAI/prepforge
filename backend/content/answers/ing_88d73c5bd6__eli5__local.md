---
qid: ing_88d73c5bd6__eli5__local
question: ROC-AUC vs PR-AUC - what does each measure, and why does ROC-AUC look deceptively
  good on imbalanced data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 243
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:13:18-05:00'
sources: []
---

Think of an AI that spots hidden treasure (positive cases) in a huge field of rocks (negative cases).  
**ROC‑AUC** is like measuring how well the hunter can separate treasure from rocks when he looks at every rock one by one, regardless of how many treasures there are. It plots *True Positive Rate* (treasures found) against *False Positive Rate* (rocks mistakenly called treasure). Even if treasure is rare, a few false positives still make the curve look high because most rocks are plenty – the hunter can “miss” many and still get a good score.

**PR‑AUC** is like measuring the hunter’s *Precision* (of all claimed treasures, how many were real) against *Recall* (how many of the actual treasures he found). With few treasures, a single wrong claim drops precision sharply, so PR‑AUC reveals that the model is over‑claiming.

Thus ROC‑AUC can appear deceptively good on imbalanced data because it treats all negatives equally; PR‑AUC focuses on the scarce positives and gives a more realistic picture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
