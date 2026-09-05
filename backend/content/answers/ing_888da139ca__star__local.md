---
qid: ing_888da139ca__star__local
question: 'Explain: Sample questions — Cursor Software Engineer Interview Guide |
  Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 325
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:49-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were launching a fraud‑detection model for credit card transactions. The live traffic volume was 2 million events per day, but our initial prototype only handled 50,000 requests before the API latency spiked to 1.8 seconds.

**Task:** I had to redesign the inference pipeline so that it could process the full daily load with sub‑200 ms latency while keeping cost under $500/month on AWS.

**Action:** First, I profiled the model in TensorFlow Lite and discovered that the bottleneck was the 128‑dimensional embedding layer. I pruned the embeddings to 64 dimensions using iterative magnitude pruning, which reduced the memory footprint by 45 %. Next, I switched from a monolithic container to an ECS Fargate microservice with a GPU‑accelerated inference endpoint, and added a Redis cache for the top 10 % of frequent transaction patterns. Finally, I implemented batch scoring during off‑peak hours to amortize the model load.

**Result:** The updated pipeline handled the full 2 million events with an average latency of 110 ms and stayed within the budget. The fraud detection accuracy improved from 88 % to 94 %, and we saw a 30 % reduction in false positives, saving the company roughly $120k annually. I learned that aggressive model compression coupled with smart caching can unlock production‑grade performance without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
