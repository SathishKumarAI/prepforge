---
qid: ing_2846fc2d09__fp__local
question: 'Explain: Inference, Serving & Production LLM Systems - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 309
total_tokens: 482
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:02-05:00'
sources: []
---

**Inference, serving, and production of large language models (LLMs)** are the bridge between a mathematically‑trained network and real‑world users.  
At first principles, inference is *probabilistic decoding*: given parameters θ learned by maximizing log‑likelihood on data D, we compute \(p_\theta(y|x)\) for a new prompt x. This requires evaluating a softmax over an enormous vocabulary, which is a **sampling problem** in high dimensions—hence the need for efficient algorithms (beam search, top‑k, nucleus sampling).  

Serving turns this computation into a stateless API: requests arrive as JSON, are parsed, batched, and routed to GPU/TPU shards. The underlying principle is *throughput–latency trade‑off*: batching increases arithmetic intensity but adds queuing delay. Production systems therefore implement **dynamic batching** and **prefetching** based on traffic patterns, guided by queueing theory (M/M/1 models) to keep tail latency below a service level objective.

A non‑obvious insight is that **model sparsity can be exploited at inference time without retraining**: by pruning low‑weight connections or using block‑sparse attention, one can reduce FLOPs dramatically while preserving perplexity. This leverages the *lottery ticket hypothesis* and shows that inference‑time engineering can yield order‑of‑magnitude speedups independent of model architecture changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
