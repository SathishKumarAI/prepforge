---
qid: ing_eea2636e02__star__local
question: What is training-serving skew? How do you detect it and how do you design
  it out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 331
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:39-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we built a fraud‑detection model that was deployed in real time on our payment gateway. After launch, the accuracy dropped from 92% during training to about 78% in production, and our fraud rate spiked by 15%.

**Task:**  
I had to investigate why the model’s performance degraded—suspecting training‑serving skew—and design a solution that aligned the data distribution and inference pipeline.

**Action:**  
First I compared feature statistics (mean, variance) between the training set and live traffic using Spark SQL, spotting a shift in transaction amounts and user device types. I added an online learning component: every 30 minutes we sampled a fresh batch of 10k live transactions, re‑scaled features to match the training distribution, and updated the model weights with incremental SGD. I also wrapped the inference code in a feature‑store that cached pre‑computed embeddings so runtime latency stayed below 5 ms. Finally, I set up a monitoring dashboard (Grafana) that plotted per‑feature drift metrics and triggered alerts when drift exceeded 2σ.

**Result:**  
Within two weeks the live accuracy rose to 90%, matching training levels, and the fraud rate dropped back to baseline. The system now auto‑detects skew and self‑corrects in near real time—reducing manual intervention by 70% and improving trust in our AI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
