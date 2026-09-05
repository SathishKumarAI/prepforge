---
qid: ing_8e14b7ad91__star__local
question: 'Explain: Hypothetical Document Embeddings (HyDE) — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 387
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:00-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a knowledge‑base chatbot for a fintech client. The product catalog had over 12 k documents and the internal search API returned only keyword matches, leaving users frustrated with irrelevant results.

**Task:**  
I needed to design an advanced retrieval pipeline that could surface semantically related documents even when exact terms were missing, all while keeping latency under 300 ms per query.

**Action:**  
I implemented Hypothetical Document Embeddings (HyDE). First, I built a lightweight language model wrapper around OpenAI’s GPT‑4o to generate “hypothetical” embeddings: for each user query I fed the prompt *“Generate an embedding that best captures the intent of this question.”* The model produced dense vectors on‑the‑fly. Next, I indexed the existing documents with FAISS using their pre‑computed sentence‑transformer embeddings. During a search, I performed a two‑stage retrieval: (1) top‑50 nearest neighbors by cosine similarity to the HyDE vector, then (2) re‑ranked those results with a BERT‑based relevance scorer that considered both query and document context. I added a caching layer for repeated queries and tuned FAISS parameters (IVF32 + HNSW) to hit the latency target.

**Result:**  
User satisfaction scores rose from 68 % to 92 % in post‑deployment surveys, and average search time dropped from 450 ms to 210 ms. I learned that on‑the‑fly embedding generation via HyDE can bridge gaps between sparse queries and rich document semantics without heavy pre‑processing, making it a powerful pattern for real‑time retrieval systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
