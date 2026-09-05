---
qid: ing_df56d0eb16__star__local
question: 'Explain: 8.5.2.1. Fully Connected Layers ¶ — 8.5. Batch Normalization \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 340
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:26-05:00'
sources: []
---

**Situation**  
At my last company I was tasked with improving the accuracy of our fraud‑detection model for credit card transactions. The baseline CNN that processed transaction metadata had plateaued at 88 % AUC, and we needed a boost without adding latency.

**Task**  
I had to redesign the final classification head: replace the flat dense layers with a more expressive fully connected architecture and integrate batch normalization to stabilize training and allow higher learning rates.

**Action**  
I first added two fully‑connected blocks of 512 and 256 units, each followed by ReLU. Between every linear layer I inserted a BatchNorm1d layer (PyTorch) as described in the “8.5.2.1 Fully Connected Layers” section: normalizing activations to zero mean and unit variance per batch so that subsequent layers see a consistent distribution. This removed internal covariate shift, letting me raise the learning rate from 1e‑4 to 3e‑4. I also added dropout (p=0.5) after each BN to guard against overfitting.

**Result**  
After training for 12 epochs, the new head lifted AUC to 93 % on our hold‑out set—a 5 percentage point improvement—while inference time stayed under 10 ms per transaction. I learned that careful placement of BatchNorm after every dense layer not only accelerates convergence but also unlocks higher learning rates without destabilizing training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
