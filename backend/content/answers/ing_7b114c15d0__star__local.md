---
qid: ing_7b114c15d0__star__local
question: 'Explain: Pitfall 3: Evaluation Set Leakage — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 308
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:08-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were building an AI model to detect fraudulent credit card transactions. The initial test set was created by sampling recent transaction logs from the same data pipeline that fed our production system.

**Task:**  
I needed to verify that the fraud‑detection model truly generalized beyond the training data and didn’t just memorize recent patterns, so we could safely roll it out without overestimating its accuracy.

**Action:**  
I realized the test set was inadvertently leaking future‑looking features: timestamps were aligned with the same calendar days as the training split, and some transaction IDs appeared in both sets. To fix this, I reconstructed a strictly temporal holdout: all transactions after a cutoff date (e.g., 30 days post‑training) were removed from any evaluation set. I also scrubbed features that could signal leakage—like “time since last transaction” computed over the entire dataset. Then I re‑trained and evaluated on this clean, non‑overlapping holdout.

**Result:**  
The model’s precision dropped from 94 % to 82 %, revealing a 12‑percentage‑point overestimation due to leakage. This prompted us to adjust our training pipeline and implement automated checks for temporal split integrity. I learned that even subtle dataset overlaps can inflate performance metrics, so rigorous evaluation set construction is as critical as model architecture in AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
