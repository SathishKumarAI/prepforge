---
qid: vq_20ccb15507__star__local
question: Feedforward Neural Network?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 381
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:03-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the fraud‑detection pipeline for a fintech startup that processed ~50,000 transactions per day. The existing rule‑based engine had a 12 % false‑positive rate and missed about 18 % of actual frauds.

**Task** – My goal was to design a machine‑learning model that reduced false positives by at least 30 % while keeping the fraud detection latency under 200 ms per transaction, so it could run in real time on our edge servers.

**Action** – I built a feedforward neural network (FFNN) with three hidden layers (128→64→32 units) using ReLU activations and dropout (0.2) to avoid overfitting. The input vector included engineered features: transaction amount, user‑device fingerprint, time‑of‑day, and a 10‑dimensional embedding of the merchant category. I trained on 3 million labeled samples with Adam optimizer, early stopping, and class‑weighted loss (to address the 1:100 fraud ratio). After training, I quantized the model to INT8 for inference speed and deployed it in our Rust‑based microservice; batch inference was <150 ms.

**Result** – In production the false‑positive rate dropped from 12 % to 7.5 % (a 37 % improvement), while fraud capture rose from 82 % to 90 %. The model’s latency stayed below our 200 ms threshold, and we saved $1.2 M annually in manual review costs. I learned that a carefully regularized FFNN can outperform hand‑crafted rules when paired with thoughtful feature engineering and deployment optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
