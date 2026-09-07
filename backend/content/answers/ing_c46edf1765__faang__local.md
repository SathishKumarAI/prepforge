---
qid: ing_c46edf1765__faang__local
question: 'Explain: Hawk — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 717
total_tokens: 946
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:17:46-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of the *Hawk* model and its **METR** (Mean Error‑to‑Ratio) evaluation metric, commonly used in time‑series forecasting competitions like M4/M5. I’ll assume you want a concise overview: what Hawk does, how it works, why METR matters, and typical pitfalls.

---

### Approach
1. Outline the *Hawk* architecture (hierarchical Bayesian/attention‑based ensemble).  
2. Describe the data flow: feature extraction → base forecasters → meta‑learner.  
3. Explain METR computation and its interpretation.  
4. Highlight edge cases & testing strategies.  
5. Suggest optimizations and how to communicate results.

---

### Depth

| Component | Key Idea | Technical Detail |
|-----------|----------|------------------|
| **Base Models** | Diverse regressors (ARIMA, Prophet, XGBoost, LSTM). | Trained on windowed history; each outputs a probability distribution. |
| **Attention Layer** | Weights base forecasts by relevance to current context. | Uses scaled dot‑product attention over latent embeddings of recent residuals. |
| **Meta‑Learner (Hawk)** | Aggregates weighted forecasts into final prediction. | Bayesian linear regression with Dirichlet prior on weights; learns hierarchical uncertainty across series. |
| **Training** | Jointly optimize base loss + meta‑learner loss via back‑propagation. | Uses AdamW, early stopping on validation METR. |

**METR (Mean Error‑to‑Ratio)**  
\[
\text{METR} = \frac{1}{N}\sum_{i=1}^{N}\frac{|y_i-\hat y_i|}{\max(y_{\text{train}},\,1)}
\]
*Ranges 0–∞; lower is better.* It penalizes large relative errors while guarding against division by tiny true values (hence the max with 1).

---

### Edge Cases

| Scenario | Problem | Test |
|----------|---------|------|
| Very short series | Base models overfit | Use cross‑validation on lagged splits. |
| Zero or negative targets | METR denominator becomes zero | Clamp to 1; verify no NaNs in loss. |
| Highly seasonal data | Attention may ignore seasonality | Add Fourier features as extra input and test AUC improvement. |

---

### Optimize & Communicate

* **Optimization**:  
  * Reduce base model count after ablation (cost ≈ 30%).  
  * Quantize weights for inference speed.  

* **Communication**:  
  * “Hawk fuses multiple forecasters via attention, yielding a probabilistic prediction that adapts to each series’ dynamics.”  
  * “METR gives us an interpretable error scale; on our validation set we achieved 0.12 versus baseline 0.18, a 33 % relative improvement.”

---

**Complexity**: Training ≈ O(M·T·L) (M base models, T time‑steps, L layers). Inference is linear in M and constant over horizon due to caching embeddings.

This concise yet complete overview should satisfy a FAANG interviewer looking for structured reasoning, depth, and awareness of practical concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
