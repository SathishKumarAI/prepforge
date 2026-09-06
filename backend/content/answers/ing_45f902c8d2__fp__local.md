---
qid: ing_45f902c8d2__fp__local
question: 'Explain: Then this is called a dense movie — How NETFLIX onboards new content:
  Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 380
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:34:18-05:00'
sources: []
---

### Why a “dense” movie is the unit of work

When Netflix receives a new title it must become **available** in every language, on every device and at every quality band‑width.  
The fundamental problem is to transform one raw media file into **all** the variants that a user might request, while keeping latency low and storage costs minimal.

1. **Entropy minimisation** – The raw video is highly redundant (frame‑by‑frame similarity). Compression (H.264/HEVC) removes this redundancy so that each “dense” movie (the set of all resolutions, codecs, subtitles, audio tracks) has the *minimum* entropy needed to satisfy every consumer configuration.  
2. **Geometric routing** – The processing graph is a directed acyclic graph where nodes are transcoding steps and edges represent bit‑stream flow. Each node’s output must be *geometrically* compatible with all downstream consumers (e.g., resolution must be divisible by 8). This guarantees that the final set covers the entire “content space” without gaps.  
3. **Probabilistic scheduling** – Jobs are queued in a stochastic order; Netflix uses *Poisson‑like* models to predict GPU utilisation and cache hit rates, ensuring that high‑probability requests (HD on mobile) are served first.

A non‑obvious insight: **the “dense” set is not merely the union of all possible streams; it is the minimal convex hull in bit‑rate space that satisfies user demand distribution**. By pre‑computing this hull, Netflix avoids over‑encoding and can instantly adapt to sudden spikes (e.g., a new release).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
