---
qid: ing_0040ff3402__star__local
question: 'Explain: Model Parallelism — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 342
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:02-05:00'
sources: []
---

**Situation** – Our team was launching a conversational AI product that needed to handle 10k concurrent users while keeping latency below 150 ms. The base transformer had 1.2 B parameters and didn’t fit into a single GPU’s memory, so we couldn’t deploy it on our existing inference cluster.

**Task** – Build a serving pipeline that could split the model across multiple GPUs, maintain sub‑second response times, and be easy to scale as traffic grew.

**Action** – I first profiled the model with PyTorch TorchElastic to identify layer boundaries where memory usage peaked. Using TorchServe’s “model‑parallel” plugin, I partitioned the transformer into three shards: embedding + encoder, middle layers, and decoder + output projection. Each shard ran on a separate GPU in a single-node cluster; we used gRPC for intra‑node communication with a 1 µs latency shim. To keep throughput high, I implemented pipelined inference so that while one request processed the encoder, another was already decoding. We also added a lightweight caching layer for recurrent prompts to reduce redundant token generation.

**Result** – The new serving stack cut GPU memory per node from 48 GB to 12 GB, allowing us to run four nodes on our existing hardware and support 15k concurrent users with average latency of 110 ms. We also reduced operational costs by 30% and learned that careful shard placement combined with pipelining is key for efficient model parallel inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
