---
qid: ing_a413a30a71__fp__local
question: 'Explain: Order matters for caching — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 385
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:55:20-05:00'
sources: []
---

When a Dockerfile is built, each instruction creates a **layer** that is cached and reused by subsequent builds.  
The fundamental problem it solves is *build‑time efficiency*: you want to avoid re‑executing expensive steps (e.g., downloading packages, compiling code) when only unrelated parts of the image change.

### Why order matters

1. **Layer immutability** – a layer’s hash depends on its command and all previous layers.  
2. **Cache invalidation** – if any preceding instruction changes, every following layer must be rebuilt.  

Thus, placing *static* operations early (e.g., installing system packages) and *dynamic* ones late (copying source code, running tests) maximizes cache hits. If you reverse this order, a trivial edit to the source file forces a rebuild of all earlier layers, negating caching benefits.

### Deeper principle

This is an instance of **incremental computation** in a directed acyclic graph: each node’s output depends only on its ancestors. By structuring the DAG so that nodes with low‑variance inputs (system dependencies) are high, you reduce recomputation.

### Non‑obvious insight

Even seemingly innocuous changes—like reordering `RUN apt-get update` and `COPY .`—can alter the *digest* of intermediate layers because the filesystem snapshot after each instruction is hashed. A single stray file in a later layer can invalidate earlier cached layers if you don’t anchor them with immutable base images (e.g., `FROM python:3.12-slim`). Hence, best practice is to lock base image tags and group all non‑essential changes into a final `RUN` that cleans up temporary files, ensuring deterministic caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
