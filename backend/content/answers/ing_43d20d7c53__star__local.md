---
qid: ing_43d20d7c53__star__local
question: 'Explain: Training Data Sources — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 323
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:39-05:00'
sources: []
---

**Situation:**  
When I joined the new product team at a fintech startup, we were building a recommendation engine for loan products. Our internal dataset was tiny—only a few thousand customer profiles—and it didn’t capture the nuances of applicants’ financial behaviors.

**Task:**  
I had to create a rich, scalable representation that could surface relevant loan options even with sparse data, and do it within our two‑month sprint deadline.

**Action:**  
I sourced additional training data from public credit bureaus, anonymized bank transaction feeds, and open‑source economic indicators. I then fed all of this into a joint embedding pipeline using SentenceTransformers for textual fields (loan descriptions, customer reviews) and FastText for categorical tags. The embeddings were projected into a 300‑dimensional vector space; we clustered them with HDBSCAN to discover latent borrower personas. To keep the model lightweight, I applied PCA to reduce dimensionality to 128 without losing >95 % variance, then indexed the vectors in Faiss for sub‑millisecond nearest‑neighbor lookups.

**Result:**  
The recommendation accuracy jumped from a baseline of 58 % lift over manual matching to 82 % lift, and we cut the average query time from 1.2 s to 30 ms. I learned that carefully curated heterogeneous data sources, combined with proper embedding techniques, can turn a data‑scarce problem into a high‑performance AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
