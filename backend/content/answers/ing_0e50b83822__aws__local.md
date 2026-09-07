---
qid: ing_0e50b83822__aws__local
question: 'Explain: Word Embeddings (Historical) — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 384
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:03-05:00'
sources: []
---

**Situation / Task**  
In my senior thesis I built a search engine for a university’s research archive (≈ 200k PDFs). The goal was to surface the most relevant papers given a natural‑language query while keeping latency under 300 ms.

**Action**  
I applied *word embeddings*—historical, pre‑trained **Word2Vec** models—to map each term into a dense vector space.  
1. **Preprocessing**: tokenized, lowercased, removed stop words; kept n‑grams to preserve domain jargon.  
2. **Embedding lookup**: used Gensim’s `KeyedVectors` (≈ 300‑dimensional vectors).  
3. **Document representation**: averaged word vectors per document (simple but scalable).  
4. **Similarity search**: implemented cosine similarity via Faiss, indexed with an IVF index for sub‑linear lookups.  

I measured recall@10 and latency on a held‑out test set. Recall improved from 0.42 to **0.68** (≈ 62 % lift), while average query time stayed at 250 ms—well below the SLA.

**Result**  
The prototype was adopted by the library’s digital services team, reducing manual curation effort by **35 %** and improving user satisfaction scores from 3.8 to 4.6/5.  

**Reflection (Bar‑raiser)**  
I took ownership of both data quality and system performance, diving deep into vector semantics and Faiss tuning. The key learning: simple averaging can be surprisingly effective when paired with a well‑chosen embedding space—an example of *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
