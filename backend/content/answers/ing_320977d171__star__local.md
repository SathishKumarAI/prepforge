---
qid: ing_320977d171__star__local
question: 'Explain: Uh the index grew by a factor — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 376
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:29-05:00'
sources: []
---

**Situation** – While working on the recommendation engine for YouTube’s video search, the click‑through‑rate (CTR) model was using a sparse feature index that grew from ~5 M to over 35 M entries after we added user‑behavior signals and new content tags. The index size explosion caused our inference latency to jump from 12 ms to 48 ms per request, pushing the system past the SLA of 30 ms.

**Task** – Reduce the index footprint by at least 60 % while keeping model accuracy within 0.5 % of the baseline and preserving the real‑time serving constraints.

**Action** – I led a two‑phase refactor: first, applied feature hashing with a 2⁻¹² hash space to collapse duplicate tag combinations, then implemented a Bloom‑filter front‑end to quickly reject absent keys before touching the dense tensor. We benchmarked each change on a synthetic load set and used TensorFlow Lite’s quantization to reduce per‑feature memory from float32 to int8. I coordinated with the infra team to roll out the updated index in a blue/green deployment, monitoring latency and AUC drift.

**Result** – The new index shrank to 12 M entries (≈65 % reduction) and inference latency dropped to 18 ms on average, well under SLA. Model accuracy stayed within 0.3 % of the original. I learned that aggressive hashing coupled with probabilistic filtering can tame sparse feature blow‑up without sacrificing performance—an approach now standard for our downstream recommendation pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
