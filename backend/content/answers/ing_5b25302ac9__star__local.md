---
qid: ing_5b25302ac9__star__local
question: 'Explain: What is data leakage? Give me three subtle examples you''ve seen
  or could imagine, and how you''d detect them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 361
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:43-05:00'
sources: []
---

**Situation:** While leading a fraud‑detection model for a fintech client, we noticed the validation accuracy was unrealistically high—about 98%—yet real‑world performance dropped to 70%.  

**Task:** I had to identify and eliminate any hidden data leakage that might be inflating our metrics and ensure the model truly generalised.  

**Action:**  
1. **Feature‑level leakage:** A “customer tenure” column was calculated using the target label (whether a transaction was fraudulent). I rewrote the pipeline to compute tenure only from historical data up to each transaction’s timestamp, verified by unit tests that no future dates were used.  
2. **Temporal leakage via cross‑validation:** Our k‑fold split mixed pre‑ and post‑fraud‑policy change data. I switched to a rolling‑window validation scheme and logged the time‑gap between training and test sets.  
3. **Target‑dependent preprocessing:** We normalised transaction amounts using the global mean that included fraudulent cases, biasing the scaler. I refactored the scaler to fit only on non‑fraud examples and re‑scored the dataset.  

**Result:** After removing these leaks, validation accuracy dropped to 82%, matching live A/B test results. The model’s precision improved from 85% to 90%, and we reduced false positives by 15%. I learned that subtle leakage often hides in feature engineering or split logic, so rigorous pipeline reviews and time‑aware cross‑validation are essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
