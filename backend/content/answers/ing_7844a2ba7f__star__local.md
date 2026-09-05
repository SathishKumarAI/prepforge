---
qid: ing_7844a2ba7f__star__local
question: 'Q: How do you handle reranking for extremely long queries (e.g., a whole
  paragraph)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 390
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:38-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the relevance of a customer‑support knowledge base for an insurance portal. Users often typed full complaint paragraphs (≈300 words) into our search box, and the initial BM25 retrieval returned a dozen documents, many irrelevant.

**Task:**  
I needed to design a reranking pipeline that could sift through these long queries efficiently, boost truly relevant articles, and keep response time under 200 ms per request.

**Action:**  
First I pre‑tokenized each article into overlapping 256‑word chunks and stored their embeddings from a distilled BERT model (768‑dim). For the query, I generated a single embedding using the same model. Instead of comparing the whole paragraph to every chunk, I used FAISS with cosine similarity to fetch the top‑10 nearest chunks per query in < 30 ms. Then I applied a lightweight transformer fine‑tuned on our domain data (≈1 M QA pairs) to compute a relevance score between the full query and each candidate article’s title + snippet, weighting the chunk scores by their cosine similarity. Finally, I re‑ranked the original BM25 hits using these scores, applying a small linear combination to preserve speed.

**Result:**  
The new reranking reduced the average click‑through time by 35 % and increased top‑1 relevance from 42 % to 68 %. It also cut server load by 20 % thanks to the efficient chunk‑level filtering. I learned that combining sparse retrieval with dense embeddings and a lightweight neural reranker can handle ultra‑long queries without sacrificing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
