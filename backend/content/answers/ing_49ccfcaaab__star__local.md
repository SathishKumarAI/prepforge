---
qid: ing_49ccfcaaab__star__local
question: 'Explain: So originally for video we we started — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 303
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:03-05:00'
sources: []
---

**Situation**  
During my senior role at a media tech company, we were preparing for the Seattle Conference on Scalability where we had to demonstrate real‑time recommendation of personalized video clips to millions of users while keeping latency under 200 ms.

**Task**  
I was tasked with designing an end‑to‑end ML pipeline that could ingest raw video streams, extract features, run a deep ranking model, and serve predictions at scale without compromising quality or cost.

**Action**  
First, I prototyped the feature extractor in PyTorch, then containerized it with Docker and deployed on Kubernetes. To reduce inference time, I quantized the neural net to 8‑bit integers using TensorRT and sharded the model across GPU nodes. For streaming, I used Apache Kafka to buffer video frames and Spark Structured Streaming for batch pre‑processing. I implemented a cache layer in Redis keyed by user context to avoid redundant computations, and set up autoscaling policies that spun up additional pods when traffic spiked past 10k concurrent requests.

**Result**  
The solution cut inference latency from 350 ms to 180 ms, dropped GPU usage by 35%, and allowed us to serve predictions for over 5 million users during the conference. I learned how careful quantization and micro‑service orchestration can turn a theoretical model into a production‑ready system that meets strict scalability demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
