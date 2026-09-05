---
qid: ing_fddbb31246__star__local
question: 'Explain: Cosine Similarity — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 342
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:31-05:00'
sources: []
---

**Situation**  
During a product‑launch sprint for our recommendation engine, the data science team noticed that the user engagement metric was down 18 % after the last update. We suspected the new content embeddings were not capturing semantic similarity correctly.

**Task**  
I had to validate and refine the embedding space so that similar articles would cluster together, improving click‑through rates. The goal was a 10 % lift in recommendations relevance within two weeks.

**Action**  
First, I pulled the latest 50 k article embeddings from our GPU cluster (using PyTorch) and plotted them with UMAP to spot any obvious separations. Then I computed cosine similarity between each pair of vectors: \( \cos(\theta)=\frac{A·B}{||A||\,||B||} \). By thresholding at 0.8, I identified outlier articles that were being paired incorrectly. Next, I fine‑tuned the transformer model on a domain‑specific corpus and re‑generated embeddings, ensuring each vector’s magnitude was normalized to unit length so cosine directly reflected angle similarity. Finally, I replaced the old lookup table in our recommendation service with a FAISS index built on these normalized vectors.

**Result**  
After deployment, click‑through rates increased by 12 %, surpassing our target. The process taught me that normalizing embeddings and using cosine similarity as an angular metric is critical for semantic clustering, especially when downstream systems rely on fast nearest‑neighbor queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
