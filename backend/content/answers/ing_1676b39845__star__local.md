---
qid: ing_1676b39845__star__local
question: 'Explain: So, interesting risk that you can take — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 390
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:37-05:00'
sources: []
---

**Situation**  
When I joined the video recommendation team at a mid‑tier streaming startup, our weekly traffic spike on Thursdays hit 12 M concurrent viewers. We had just migrated our core ranking engine to a GPU‑accelerated inference cluster, but the model was still running in a monolithic batch pipeline that pulled features from 3 separate data stores, causing a 4‑second latency tail.

**Task**  
I needed to cut the inference latency below 1 s for 99.9% of requests while keeping the recommendation quality (NDCG@10) above 0.32. The risk was that any aggressive optimization could degrade relevance or overload our limited GPU budget.

**Action**  
First, I instrumented the pipeline with Prometheus and Grafana to identify the feature‑fetching bottleneck. Then I refactored the model into a microservice architecture: each feature set became an async cache layer using Redis Streams, and the neural network was split into two stages—an embedding lookup on CPU followed by a lightweight Transformer on GPU. To mitigate risk, I ran A/B tests with a 1% traffic slice while continuously monitoring NDCG and latency. We also introduced a fallback rule that served a cached “last‑known good” recommendation if the GPU queue exceeded 200ms.

**Result**  
Latency dropped from 4 s to 0.8 s for 99.7% of requests, and NDCG@10 improved by 3%. The GPU utilization stayed below 60%, freeing up capacity for future experiments. I learned that profiling early, isolating micro‑services, and running incremental risk tests can turn a scalability challenge into an opportunity for measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
