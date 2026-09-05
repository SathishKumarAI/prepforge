---
qid: ing_6157b04632__star__local
question: 'Explain: This has a nice virtue of normalizing — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 352
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:42-05:00'
sources: []
---

**Situation**  
In my last role at FinTechCo I was tasked with detecting fraudulent credit‑card transactions for a new mobile app. The raw data had millions of rows, but the feature scales were wildly different – transaction amounts ranged from cents to thousands of dollars, while categorical flags were encoded as 0/1.

**Task**  
I needed to build an unsupervised anomaly detection model that could flag suspicious patterns in real time, with a false‑positive rate below 2 % and latency under 200 ms per request.

**Action**  
First I applied z‑score normalization to all continuous features so each had mean zero and unit variance; this kept the algorithm’s distance metric meaningful. I then trained an Isolation Forest on the normalized data, tuning the contamination parameter via cross‑validation against a labeled holdout set. To explain detections I integrated SHAP values per transaction, mapping back to the original scale for analysts. The entire pipeline was containerized with Docker and deployed behind a FastAPI endpoint, using GPU inference only when batch size exceeded 10k.

**Result**  
After deployment we saw a 35 % drop in false positives (down from 3.8 % to 2.4 %) and the system processed 12 k requests per second with average latency of 145 ms. The normalization step was critical; without it, distance‑based isolation would have over‑emphasized high‑magnitude amounts and missed low‑value fraud patterns. I learned that careful feature scaling not only stabilizes model performance but also enhances interpretability for downstream stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
