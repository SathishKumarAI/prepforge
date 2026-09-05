---
qid: ing_8f6f4302a5__star__local
question: 'Explain: Single-Agent Architectures — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 330
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:47-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a recommendation engine for a niche e‑commerce platform. The product team wanted to move from a batch‑processing model to real‑time personalized suggestions, but the data pipeline was too heavy and latency was unacceptable.

**Task:**  
Design a single‑agent architecture that could ingest streaming user interactions, update a lightweight model on the fly, and serve predictions with sub‑50 ms latency while keeping CPU usage below 30 % on our edge servers.

**Action:**  
I chose to implement a micro‑service based agent using Python’s FastAPI for inference, a Redis Streams consumer for real‑time events, and an online learning algorithm (Follow‑the‑Regularized-Leader) wrapped in a custom TensorFlow Lite model. The agent maintained a rolling window of the last 10 000 interactions per user, updated weights incrementally, and persisted checkpoints to S3 every hour. I also added a health‑check endpoint that exposed CPU, memory, and queue depth so we could auto‑scale based on demand.

**Result:**  
The new architecture cut recommendation latency from 2 s to 35 ms, boosted click‑through rate by 18 %, and reduced server cost by 22 % compared with the batch system. I learned that careful choice of online learning algorithms and lightweight inference engines can turn a heavy ML workload into a lean, responsive single‑agent solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
