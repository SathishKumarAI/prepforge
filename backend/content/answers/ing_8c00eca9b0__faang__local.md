---
qid: ing_8c00eca9b0__faang__local
question: How do you evaluate a reward model? Why is held-out pairwise accuracy not
  enough?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 535
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:38-05:00'
sources: []
---

## Clarify  
You want to judge how well a learned reward model (RM) predicts human preferences over generated text.  
Assumptions I’d confirm: *the RM outputs a scalar score per sequence*, *we have a held‑out dataset of human judgments (pairwise or absolute)*, and *our goal is to use the RM for policy improvement*.  

## Approach  
1. **Define evaluation metrics** beyond pairwise accuracy.  
2. **Collect diverse test sets** (different domains, lengths, styles).  
3. **Run ablations** (e.g., temperature, KL‑penalty) to see robustness.  
4. **Report statistical significance** and confidence intervals.

## Depth  
*Held‑out pairwise accuracy* only tells you how often the RM orders two samples as humans do. It ignores:  
- **Calibration:** Does a higher score truly mean higher human utility? Use Spearman/Kendall correlations, and plot predicted vs. true utilities.  
- **Distribution shift:** Accuracy can stay high while performance degrades on out‑of‑distribution prompts; evaluate on held‑out domains.  
- **Reward sparsity & noise:** Pairwise labels are noisy; compute inter‑annotator agreement and use Bayesian calibration to adjust RM outputs.  
- **Downstream impact:** Measure policy returns when the RM is used for RLHF (e.g., BLEU, human evaluation after finetuning).  

Complexities: correlation O(n log n), calibration linear in samples. Trade‑offs: richer metrics cost more annotation and compute but yield a trustworthy reward signal.

## Edge Cases  
- **Adversarial prompts** that exploit RM blind spots → test with adversarial examples.  
- **Cold start** for new domains where no pairwise data exists → use zero‑shot or few‑shot calibration.  
- **High variance in human judgments** → detect and flag ambiguous pairs.

## Optimize & Communicate  
Explain the pipeline: *“We first confirm that the RM is well‑calibrated via Spearman’s ρ, then we test it on unseen domains to guard against overfitting. Finally, we plug it into a small RLHF loop and report policy returns.”* Highlight that accuracy alone can be misleading because a model might get rankings right but assign incorrect utility magnitudes, leading RL agents astray. Conclude with the recommendation: *combine pairwise accuracy with calibration, domain robustness, and downstream reward signals for a holistic RM evaluation.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
