---
qid: ing_485ea32faf__star__local
question: 'Explain: Um, another-- another interesting things you can'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 329
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:13-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time fraud detection pipeline that was flagging too many false positives, costing us roughly $1.2 M per month in manual review time.

**Task:**  
I needed to reduce the false‑positive rate by at least 30% while keeping the true‑positive recall above 95%, all within our existing Spark/MLlib stack and a 48‑hour sprint.

**Action:**  
I built an autoencoder in PyTorch, trained it on normal transaction data (≈ 5 M records) to learn a compressed representation of “legitimate” behavior. I then integrated the encoder into our Spark streaming job as a UDF that computed reconstruction error for each incoming event. Events exceeding a dynamically adjusted threshold were routed to a second‑stage rule engine; otherwise they passed through untouched. I tuned the latent size (64→32) and dropout (0.2) to balance accuracy and latency, and used MLflow to track experiments.

**Result:**  
After deployment, false positives dropped from 12% to 7%, saving us $700k annually in review costs. Recall stayed at 96%. I learned how to blend deep learning with big‑data pipelines and the importance of continuous monitoring to recalibrate thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
