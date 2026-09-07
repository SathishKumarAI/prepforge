---
qid: ing_c08af17fee__aws__local
question: What are embeddings? Compare cosine similarity, dot product, and Euclidean
  distance - when does the choice matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 409
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While redesigning our recommendation engine for the Prime Video catalog, we needed to move from a simple keyword match to semantic embeddings so that users could discover content beyond exact titles.  
> **Task:** Evaluate similarity metrics—cosine, dot product, and Euclidean—to decide which would drive the most accurate recommendations at scale.  
> **Action:**  
> 1. Generated 128‑dimensional *sentence‑transformer* embeddings for every title (≈3 M vectors).  
> 2. Benchmarked each metric against a held‑out test set of 10 k user click‑throughs, measuring AUC and mean reciprocal rank (MRR).  
> 3. Built an **ElasticSearch** cluster with the *knn* plugin for approximate nearest neighbors; tuned query vectors to use cosine (default) vs dot product.  
> 4. For Euclidean distance we used a **PCA‑reduced** space and evaluated latency on a single EC2 m5.large.  
> **Result:** Cosine similarity yielded AUC 0.82, MRR 0.45—30 % higher than dot product (AUC 0.70) and 25 % better than Euclidean (AUC 0.68). Latency remained <20 ms per query on the cluster, keeping cost under $1k/month.  
> **Reflection:** I learned that *normalization* is critical for cosine; dot product can over‑reward high‑norm vectors, while Euclidean suffers from curse‑of‑dimensionality unless dimensionality is aggressively reduced.  

**Leadership Principles:** *Customer Obsession* (better discovery → higher CTR) and *Dive Deep* (metric‑driven validation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
