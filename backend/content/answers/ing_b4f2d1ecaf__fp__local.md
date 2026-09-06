---
qid: ing_b4f2d1ecaf__fp__local
question: How do you tell that a fine-tune is overfitting? What are the signals?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 463
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:29:07-05:00'
sources: []
---

**Why an over‑fine‑tuned model misbehaves**

When you fine‑tune a pretrained network you are *optimizing* the same loss on a **finite sample** that is typically much smaller than the original pretraining data.  
The objective is to minimize empirical risk \(L_{\text{train}}(w)=\frac1N\sum_{i=1}^N \ell(f_w(x_i),y_i)\).  
If the capacity of the model (number of parameters, expressivity) far exceeds what can be justified by \(N\), the optimizer will drive \(L_{\text{train}}\) toward zero at the cost of fitting noise—this is over‑fitting.

**Signals rooted in statistical theory**

| Signal | Why it appears if over‑fit |
|--------|----------------------------|
| **Training loss → 0, validation loss rises** | The model memorises training labels; generalisation error grows. |
| **Large gap between train and val accuracy (or F1)** | Empirical risk minimisation has found a *spurious* minimum that only works on seen data. |
| **Rapid decrease in training loss but flat or increasing validation curves during early epochs** | The optimiser is exploiting idiosyncratic patterns not present in the unseen set. |
| **Sharp increase in model confidence on wrong predictions** | Over‑fit pushes logits to extreme values for memorised examples, making the softmax distribution overconfident. |
| **Drop in test perplexity or BLEU after a few epochs** | The fine‑tuned parameters have moved away from the region of the pretrained manifold that captured useful priors. |

**Non‑obvious insight**

Often people look only at *accuracy* on a held‑out set, but a more telling metric is **margin distribution**: if most predictions lie just above the decision boundary for training examples yet far below for validation, the model has learned to shrink margins on noise—an early warning of over‑fit that precedes loss divergence. Monitoring margin statistics can alert you before accuracy curves diverge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
