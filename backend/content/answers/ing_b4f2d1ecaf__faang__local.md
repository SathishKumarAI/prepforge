---
qid: ing_b4f2d1ecaf__faang__local
question: How do you tell that a fine-tune is overfitting? What are the signals?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 425
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:44:16-05:00'
sources: []
---

**Clarify**  
We’re tuning a pre‑trained model on a downstream task and want to know when it’s memorizing training data rather than generalizing.  
Assumptions: we have separate train/validation/test splits, an evaluation metric (e.g., accuracy or loss), and the ability to log per‑epoch metrics.

**Approach**  
1. Track training vs validation curves for loss & metric.  
2. Monitor confidence distribution (softmax entropy) on validation examples.  
3. Compute *per‑sample* error rates and compare with a baseline random model.  
4. Optionally, use an external “shadow” dataset or cross‑validation.

**Depth**  
- **Loss gap**: If training loss keeps decreasing while validation loss plateaus or rises, overfitting is likely.  
- **Metric divergence**: A large drop (≥ 5–10%) from train to val metric signals memorization.  
- **Confidence spikes**: Extremely high softmax scores on a few val samples hint at over‑confidence on memorized patterns.  
- **Per‑sample error clustering**: Errors concentrated in specific classes or sub‑domains suggest the model learned spurious correlations.  
Complexity is O(N) per epoch for metrics; no extra training cost.

**Edge Cases**  
- Small validation set → noisy curves; use k‑fold CV.  
- Class imbalance → macro/micro metrics may mask overfitting on minority classes.  
- Domain shift between train and val → even a perfect fit can look like overfit.

**Optimize & Communicate**  
If signals appear, reduce capacity (drop layers/heads), add regularization (weight decay, dropout), or increase data via augmentation. I’d present the curves to stakeholders, highlight the loss gap, and recommend early stopping or hyper‑parameter tuning. This structured pipeline keeps the interviewers’ focus on clear diagnostics, actionable fixes, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
