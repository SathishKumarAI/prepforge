---
qid: ing_8978f28b80__faang__local
question: How do you evaluate a model before and after fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 467
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:18-05:00'
sources: []
---

**Clarify**  
We want metrics that compare the base (pre‑fine‑tuned) model to its fine‑tuned version on a *common* task or dataset. Assume we have:  
1. A target domain/test set unseen during training.  
2. Ground truth labels or human judgments.  
3. Computational budget for evaluation.

**Approach**  
1. **Baseline Evaluation:** Run the pre‑fine‑tuned model on the test set, record metrics.  
2. **Fine‑Tune & Re‑evaluate:** Fine‑tune on a separate dev set, then run the same inference pipeline on the identical test split.  
3. **Statistical Test:** Use paired tests (e.g., McNemar or bootstrap) to confirm significance.  
4. **Ablation / Feature Analysis:** If possible, isolate what changed—weight shifts, added heads, etc.

**Depth**  
- *Metrics*: Accuracy/Precision‑Recall for classification; BLEU/F1 for generation; perplexity for language modeling; MSE for regression.  
- *Calibration*: Expected Calibration Error (ECE) or Brier score to see if probabilities shift.  
- *Robustness*: Test on adversarial perturbations or out‑of‑distribution samples.  
- *Resource Impact*: Inference latency, memory footprint.

**Edge Cases**  
- Overfitting: test set performance may drop even if training loss improves.  
- Domain shift: the fine‑tuned model might perform better on in‑domain but worse elsewhere.  
- Class imbalance: metrics like macro‑F1 needed to avoid misleading accuracy.

**Optimize & Communicate**  
Explain that a *single* metric can hide trade‑offs; present a dashboard of metrics, highlight statistically significant gains, and note any regressions (e.g., latency). Summarize the improvement story: “After fine‑tuning on domain‑specific data, we achieved a 3.2 % absolute lift in macro‑F1 while maintaining inference speed within 5 ms.” This narrative demonstrates structured reasoning, clear communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
