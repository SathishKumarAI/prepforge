---
qid: ing_df01f20a38__eli5__local
question: Should you use an event-driven architecture?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 236
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:28:44-05:00'
sources: []
---

Think of machine learning (ML) as a big kitchen where chefs (algorithms) need fresh ingredients (data) and special recipes (models). An **event‑driven architecture** is like a smart pantry that automatically notifies the chef when new produce arrives or when a recipe needs an update.  

If your ML tasks are *reactive*—for example, you want to retrain a model whenever sensor data spikes, or trigger predictions as soon as a user uploads a photo—an event‑driven setup gives you low latency and automatic scaling. It lets different parts of the system (data ingestion, training, inference) talk only when something happens, keeping resources idle otherwise.

But if your workflow is *batch‑oriented*—you pull all data once a day to train a nightly model—then a simpler scheduled pipeline works fine; adding event triggers would add unnecessary complexity.  

So: use event‑driven architecture when real‑time or near‑real‑time responsiveness matters; otherwise, stick with batch scheduling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
