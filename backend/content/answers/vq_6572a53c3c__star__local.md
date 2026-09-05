---
qid: vq_6572a53c3c__star__local
question: what is Model parameter ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 295
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:57-05:00'
sources: []
---

**Situation:**  
During my last internship I was tasked with fine‑tuning a BERT‑based sentiment classifier for a client’s product reviews, which had a massive class imbalance and limited labeled data.

**Task:**  
I needed to reduce the overfitting risk while keeping inference latency under 50 ms on edge devices, so I had to decide how many trainable parameters to expose in the final model.

**Action:**  
I first froze all transformer layers except the last two, then added a lightweight linear head with only ~3 k learnable weights. I monitored validation loss and used early stopping at 12 epochs. To quantify parameter impact, I compared three setups: full‑fine‑tune (≈110 M params), partial fine‑tune (≈10 M), and my lightweight head (≈0.1 M). I also measured inference times on a Raspberry Pi 4.

**Result:**  
The lightweight model achieved 88.5% accuracy, only 2.3% below the full‑fine‑tuned baseline, while cutting memory usage by 99% and keeping latency at 35 ms. I learned that carefully controlling the number of trainable parameters—essentially selecting which parts of a model to tune—is key for deploying robust AI on constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
