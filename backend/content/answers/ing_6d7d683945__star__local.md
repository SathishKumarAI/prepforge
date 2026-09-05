---
qid: ing_6d7d683945__star__local
question: 'Explain: Instruction-Tuned Embeddings — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 361
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:06:00-05:00'
sources: []
---

**Situation:**  
At my previous company, we were launching a recommendation engine for an e‑commerce platform that had 12 million users and 3 million products. The existing embedding model was fine‑tuned only on click data, so the search quality lagged when users typed natural language queries.

**Task:**  
I needed to build a system that could understand user intent from free‑text instructions and map both queries and product descriptions into a shared vector space that reflected those intents, improving relevance scores by at least 15 % in A/B tests.

**Action:**  
First, I collected a corpus of 1.2 million instruction–product pairs from customer support logs and manually annotated them for intent similarity. Using the open‑source `sentence-transformers` library, I fine‑tuned a pre‑trained BERT model with a contrastive loss that maximized cosine similarity between matching pairs while pushing non‑matching pairs apart. I then compressed the resulting 768‑dimensional embeddings to 256 dimensions via PCA for real‑time inference. Finally, I integrated the new vectors into our Faiss index and wrapped them in an API that automatically re‑scores search results based on user instructions.

**Result:**  
The updated engine raised click‑through rate from 3.8 % to 4.6 % (a 21 % lift) and reduced average query latency by 18 %. I learned that aligning embeddings with explicit instruction signals can dramatically close the gap between user intent and product relevance, and that lightweight dimensionality reduction is key for production scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
