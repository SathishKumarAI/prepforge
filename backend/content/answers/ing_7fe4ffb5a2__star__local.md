---
qid: ing_7fe4ffb5a2__star__local
question: What is Concurrency? — Concurrency vs Parallelism - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 303
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:24-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a team that built an online recommendation engine for a streaming platform. Our nightly batch pipeline took nearly two hours, and customers complained that new content wasn’t surfacing in real time.

**Task** – I had to reduce the end‑to‑end processing time from 2 hrs to under 30 minutes while still delivering accurate personalized scores.

**Action** – I introduced a concurrency‑first design. Instead of running one monolithic job, we split the pipeline into four independent stages: data ingestion, feature extraction, model scoring, and result aggregation. Each stage ran in its own thread pool using Python’s `concurrent.futures.ThreadPoolExecutor`. We also used async IO for API calls to external metadata services, leveraging `asyncio` to keep threads from blocking on network latency. To avoid race conditions we implemented fine‑grained locks around shared feature tables and used thread‑safe queues (`queue.Queue`) to pass intermediate results.

**Result** – The pipeline execution time dropped to 18 minutes, a 65% reduction. Accuracy stayed within 0.2 points of the previous batch model. I learned that true concurrency (multiple tasks overlapping in time) can drastically cut latency, but it requires careful thread‑safety and proper use of async IO to avoid contention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
