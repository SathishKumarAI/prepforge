---
qid: ing_f190cfc536__star__local
question: 'Explain: We wanted real-valued features. We wanted enough'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 331
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:22-05:00'
sources: []
---

**Situation** – In my last role I led a fraud‑detection model for a payment gateway that had to score transactions in real time. The data lake contained over 30 raw features: timestamps, merchant codes, device IDs, and user demographics, many of which were categorical or text.

**Task** – My goal was twofold: transform every feature into a real‑valued vector suitable for gradient‑based models, and ensure we had enough samples to train a robust classifier without overfitting.

**Action** – I first applied target‑encoding on high‑cardinality categories (merchant code, device ID) using a 5‑fold cross‑validation scheme to avoid leakage. For textual fields I used TF‑IDF weighted embeddings. All features were then scaled with a MinMaxScaler to keep values in [0,1]. To guarantee sufficient data, I set up an automated pipeline that ingested new transactions daily and performed stratified sampling to maintain class balance; this yielded ~2 million labeled instances over 90 days.

**Result** – The engineered feature matrix fed into a LightGBM model reduced the fraud‑detection false‑negative rate by 18 % (from 3.5 % to 2.9 %) and improved latency from 120 ms to under 80 ms per prediction. I learned that careful encoding plus automated data curation is essential for high‑stakes ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
