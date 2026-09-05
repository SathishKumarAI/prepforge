---
qid: ing_4d75b016a7__star__local
question: 'Explain: Company context — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 291
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:11-05:00'
sources: []
---

**Situation:** At my previous firm, we were building a recommendation engine for a streaming service called *Harvey* that had over 1.2 million active users but a churn rate of 18% each quarter. The product team wanted to cut churn by improving personalized content suggestions.

**Task:** I was tasked with redesigning the recommendation pipeline so it could deliver real‑time, context‑aware suggestions while keeping latency under 200 ms and training time below 6 hours per day.

**Action:** First, I profiled the existing Spark batch job and identified that feature extraction was a bottleneck. I replaced the Python UDFs with vectorized Pandas operations and migrated to a GPU‑accelerated PyTorch model. To handle real‑time inference, I containerized the model in Docker and deployed it on Kubernetes with autoscaling based on request load. I also implemented an online learning loop that updated user embeddings every 30 minutes using Redis Streams.

**Result:** The new system reduced churn by 5% (from 18% to 13%) within three months, increased average watch time per session by 12%, and cut inference latency from 650 ms to 140 ms. I learned that balancing batch training with online updates can dramatically improve user engagement without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
