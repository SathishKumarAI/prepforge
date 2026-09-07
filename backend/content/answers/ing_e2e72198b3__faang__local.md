---
qid: ing_e2e72198b3__faang__local
question: 'Explain: Judge Calibration — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 463
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:26:42-05:00'
sources: []
---

**Clarify**  
We’re asked how to *calibrate* a language‑model (LLM) judge—i.e., an automated evaluator that scores generated text against human standards. Key assumptions:  
1. We have a labeled dataset of prompts with human ratings (e.g., 1–5).  
2. The judge must run fast enough for real‑time inference.  
3. Calibration means aligning its score distribution to the true human distribution (bias, variance).

**Approach**  
1. **Baseline model**: Fine‑tune a transformer on the labeled data using regression loss.  
2. **Calibration step**: Treat the baseline as a *probability* predictor of each rating class. Use *Platt scaling* or *isotonic regression* on a held‑out set to map logits → calibrated probabilities.  
3. **Evaluation**: Compute expected calibration error (ECE) and Brier score; iterate until acceptable.

**Depth**  
- Fine‑tuning uses MSE loss, but we can also use KL‑divergence if treating as classification.  
- Calibration maps raw logits \(z\) to probabilities \(p = \sigma(\alpha z + \beta)\). α, β are learned on validation data; isotonic regression gives a non‑parametric monotone mapping.  
- Complexity: fine‑tune O(N·B·T), calibration O(M log M) where M is validation size. Memory stays at model size.

**Edge Cases**  
- *Class imbalance*: Rare high scores get under‑calibrated probabilities; use class‑weighted loss or oversampling.  
- *Distribution shift*: If prompts change, retrain calibration on recent data.  
- *Overfitting*: Validate ECE on a separate holdout to avoid fitting noise.

**Optimize & Communicate**  
- Add temperature scaling for sharper probability curves.  
- Deploy as a lightweight inference pipeline; expose calibration parameters via config so the judge can be tuned per deployment.  
- In interviews, I’d explain that calibration turns an LLM into a statistically reliable oracle, enabling trustworthy automated grading while keeping latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
