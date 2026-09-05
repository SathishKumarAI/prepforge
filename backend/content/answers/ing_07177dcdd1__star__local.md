---
qid: ing_07177dcdd1__star__local
question: 'Explain: Creating a Hybrid Retrieval Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:19-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the search experience for a legal research platform that had over 2 million documents. Users complained that keyword‑only results were missing relevant case law and that query latency exceeded 5 seconds on peak traffic.

**Task:**  
I needed to build a hybrid retrieval pipeline—combining dense vector embeddings with traditional BM25 scoring—to deliver top‑10 results in under 1 second while increasing precision by at least 15%.

**Action:**  
Using Haystack, I first indexed the corpus with Elasticsearch for BM25 and added a separate Faiss index for sentence‑level BERT embeddings (SentenceTransformers). In the pipeline, I set up a `DensePassageRetriever` to generate query vectors, fetched the top‑50 dense matches, then re‑ranked them against the BM25 hits using a custom `HybridScoreFunction`. I added caching of vector queries and tuned the weighting parameter α via A/B testing. Finally, I wrapped the pipeline in an async FastAPI endpoint to meet latency targets.

**Result:**  
The hybrid approach boosted mean average precision from 0.42 to 0.58 (≈36% relative gain) and cut query latency from 4.8 s to 0.9 s. Users reported higher satisfaction, and the platform saw a 12% increase in daily active sessions. I learned that balancing dense and sparse signals is key—and that Haystack’s modularity makes rapid experimentation possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
