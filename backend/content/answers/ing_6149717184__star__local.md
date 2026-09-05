---
qid: ing_6149717184__star__local
question: 'Explain: Build text-to-image search over 100M product images. Walk me through
  the design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 321
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:33-05:00'
sources: []
---

**Situation** – At my last e‑commerce company we had a catalog of 100 million product photos, each tagged with sparse text metadata. Search clicks were down 12 % year‑over‑year because customers kept typing “red running shoes” and never found the exact match.

**Task** – I was asked to build a text‑to‑image search that would surface relevant images instantly, improving click‑through by at least 15 %.

**Action** – First I built a scalable embedding pipeline: every image passed through a pre‑trained CLIP encoder on GPU clusters; the resulting 512‑dim vectors were indexed in an IVF‑PQ structure with FAISS for sub‑second nearest‑neighbor lookups. For text, I used the same model to generate embeddings from user queries in real time. To handle the volume, I sharded the index across three nodes and added a Bloom filter cache for popular terms. I also implemented a relevance re‑ranker that blended cosine similarity with a lightweight metadata score (price, popularity). Finally, I exposed the service via gRPC behind an API gateway with automatic scaling in Kubernetes.

**Result** – Launching this system increased image search click‑through by 18 % and reduced query latency from ~1.2 s to <200 ms. I learned that coupling a powerful vision‑language model with an efficient ANN index can turn millions of raw images into a user‑friendly search experience without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
