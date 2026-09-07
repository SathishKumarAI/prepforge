---
qid: ing_86e986142a__faang__local
question: Your judge model is being deprecated and you have to move to a new version.
  How do you keep your scores comparable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 436
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:57:35-05:00'
sources: []
---

**Clarify**

You’re migrating from an older judge (Model A) to a newer one (Model B).  
Goal: ensure that the score distribution (e.g., accuracy, BLEU, F1) remains comparable so historical baselines and user expectations don’t shift abruptly.  
Assumptions to confirm:  
- Both models receive identical input pipelines.  
- The evaluation metric is unchanged.  
- We have a hold‑out validation set with ground truth.

**Approach**

1. **Baseline Alignment** – run both models on the same reference set and record raw scores.  
2. **Statistical Calibration** – fit a mapping (e.g., linear regression or isotonic regression) from Model A’s scores to Model B’s so that the *rank* of outputs is preserved.  
3. **Re‑scoring Pipeline** – replace the old scoring function with the calibrated one, while keeping the raw Model B output untouched for auditability.  
4. **Monitoring & Roll‑back** – deploy incrementally and compare live metrics against historical thresholds.

**Depth**

- Use *isotonic regression* (non‑parametric) to avoid imposing a linear assumption; complexity O(n log n).  
- Preserve interpretability: store the mapping parameters in a lightweight config file.  
- If Model B is significantly better, consider a “soft” shift: keep the old score for legacy users but expose the new one with a clear version tag.

**Edge Cases**

- Distribution shift: if inputs change dramatically, calibration may fail; detect via drift metrics (e.g., KL divergence).  
- Outliers in scores could skew mapping—use percentile clipping.  
- If Model B is worse on certain sub‑domains, flag them and provide domain‑specific adjustments.

**Optimize & Communicate**

Explain to stakeholders that the calibration preserves relative performance while allowing us to adopt a superior model without breaking downstream pipelines. Highlight that we’ll continuously retrain the mapping if new data arrives, ensuring long‑term comparability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
