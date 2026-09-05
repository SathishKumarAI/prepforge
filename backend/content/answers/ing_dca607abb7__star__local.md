---
qid: ing_dca607abb7__star__local
question: 'Explain: Identify Bottlenecks — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:22-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with building a real‑time fraud detection pipeline for a fintech client. The data volume hit 1 M transactions per day, and the latency budget from ingestion to model inference had to stay under 200 ms.

**Task:**  
I needed to pinpoint which parts of the stack were slowing us down so I could propose concrete optimizations before presenting the design in a mock system‑design interview with peers.

**Action:**  
First, I instrumented each stage—Kafka consumer, Spark streaming job, feature store lookup, and TensorFlow inference—with Prometheus metrics. The profiler revealed that the feature store cache hit rate was only 60 % and database queries were the longest hops (≈120 ms). I refactored the feature retrieval to use a Redis cluster with read replicas, added an LRU eviction policy, and rewrote the query to batch lookups. Next, I replaced the on‑the‑fly model loading in TensorFlow with a pre‑loaded SavedModel served by TF Serving behind a gRPC gateway, cutting inference time from 80 ms to 30 ms. Finally, I added an asynchronous fallback path that queued outliers for later batch processing.

**Result:**  
Latency dropped from 420 ms to 150 ms, exceeding the interview’s 200 ms target by a factor of almost three. The cache hit rate rose to 92 %, and throughput increased by 35 %. I learned that systematic profiling and targeted caching are critical first steps in any ML system design interview, and I was able to articulate these trade‑offs clearly under pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
