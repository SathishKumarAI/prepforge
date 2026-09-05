---
qid: ing_83a176a5dd__star__local
question: 'Explain: Selection Criteria — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 365
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:35-05:00'
sources: []
---

**Situation**  
At my previous company we were building a product recommendation engine for an e‑commerce platform with over 3 million SKUs. The existing rule‑based system was returning generic suggestions and our conversion rate had plateaued at 2.1 %.  

**Task**  
I needed to design a vector‑based similarity model that could surface relevant products in real time, reducing latency below 50 ms while improving click‑through by at least 20 %.  

**Action**  
First I evaluated several embedding techniques: Word2Vec, FastText, and transformer‑derived sentence embeddings (BERT). After profiling, BERT was too heavy for inference. I settled on a hybrid approach: use Sentence-BERT to encode product titles and descriptions into 768‑dimensional vectors, then compress them with PCA to 128 dimensions using an autoencoder trained on our catalog data. For the vector space, I implemented Faiss’s IVF+PQ index for sub‑linear search, tuning the number of clusters (IVF) and codebook size (PQ) to hit the latency target. I also added a relevance reweighting layer that boosts vectors with high purchase frequency.  

**Result**  
The new system reduced recommendation latency from 120 ms to 38 ms and lifted click‑through rate by 27 % within two weeks of rollout, translating to an estimated $1.2 M in additional revenue per quarter. I learned that careful dimensionality reduction paired with approximate nearest neighbor indexing can reconcile high‑quality embeddings with strict real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
