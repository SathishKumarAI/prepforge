---
qid: ing_354c6be726__star__local
question: 'Explain: Scalability vs. Performance — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 393
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:43-05:00'
sources: []
---

**Situation** – At my last company I was tasked with launching a recommendation engine that had to serve 5 million users per day while keeping latency under 50 ms for the front‑end API. The existing prototype worked on a single GPU server but hit memory limits and had unpredictable response times during traffic spikes.

**Task** – My goal was to redesign the system so it could scale horizontally across multiple nodes without sacrificing real‑time inference performance, and to quantify the trade‑offs between scaling out versus optimizing per‑instance performance.

**Action** – I started by profiling the model with PyTorch’s autograd profiler and discovered that most of the latency came from CPU‑bound post‑processing rather than GPU inference. I moved the heavy ranking logic into a lightweight C++ service using ONNX Runtime, which cut per‑request compute time by 35 %. Next, I containerized the inference microservice with Docker and deployed it on Kubernetes, adding an autoscaler that spun up new pods when CPU usage exceeded 70 %. To keep memory consumption in check, I implemented a sharded model cache using Redis, so each pod only loaded the embeddings relevant to its traffic slice. Finally, I set up Prometheus alerts for request latency and throughput, tuning the horizontal pod replica count until the 95th‑percentile latency stayed below 40 ms.

**Result** – The new architecture handled peak loads of 12 million requests per day with a 45 % reduction in average latency and a 30 % lower GPU cost compared to the monolithic design. I learned that true scalability often means balancing model size, inference optimization, and smart resource orchestration—each trade‑off can be quantified with real metrics rather than assumptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
