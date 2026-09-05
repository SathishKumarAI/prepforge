---
qid: ing_140c689af1__star__local
question: 'Explain: An enterprise wants semantic search over ~100M documents but is
  balking at vector-index infrastructure cost. Walk me through embedding compression
  options and the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 384
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:11-05:00'
sources: []
---

**Situation** – I was working with a financial services client who had about 100 million PDFs, emails, and internal reports that needed to be searchable by meaning rather than keyword. Their analytics team balked at the projected $2‑3 M cost for a full‑scale vector index on GPU clusters.

**Task** – My job was to design an embedding compression strategy that would keep search latency under 200 ms while cutting infrastructure spend by at least 60 %.

**Action** – I started with 768‑dimensional BERT embeddings and applied two layers of compression. First, I used PCA to reduce dimensionality to 128 components; the variance retained was 95 %, so we lost only a tiny fraction of semantic nuance. Next, I quantized each component to 8 bits using product quantization (PQ) with 4 sub‑vectors per embedding – that gave us a compression ratio of roughly 12×. For indexing, I built an IVF‑PQ index on Elasticsearch’s dense vector fields, which scales linearly with the compressed size and eliminates the need for costly GPU RAM. I also added a small cache layer of the top‑k nearest neighbors for very frequent queries to keep latency low.

**Result** – The final system stored all 100 million vectors in under 10 GB of SSD space, cut the expected cloud spend from $2.5 M to just $800 K per year, and delivered a mean query latency of 140 ms with an F1‑score of 0.87 on a held‑out test set. I learned that combining dimensionality reduction with product quantization can dramatically lower costs without sacrificing too much accuracy, and that choosing the right index type (IVF‑PQ) is as important as the compression itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
