---
qid: ing_0a1f8d16e0__star__local
question: How would you evaluate multilingual retrieval quality - a customer's employees
  query in French and Korean over mostly-English documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 337
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:13-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with launching an enterprise search for a global client whose legal team spoke mainly French and Korean but the knowledge base consisted of 90 % English documents.

**Task:**  
I had to design a pipeline that would let employees enter queries in their native language and still retrieve the most relevant English content, while keeping latency under 800 ms and accuracy above 80 % F1.

**Action:**  
First I built a bilingual embedding model using Sentence‑Transformers fine‑tuned on cross‑lingual NLI data; it produced language‑agnostic vectors. Then I indexed the documents with FAISS, adding a small language tag field for post‑filtering. For evaluation I created a test set of 2 000 real queries (800 French, 1200 Korean) paired with manually judged top‑10 results. I ran three retrieval variants—(1) direct translation + English embedding, (2) multilingual embeddings without translation, (3) hybrid approach using MT for short phrases but keeping the original query vector otherwise. I measured precision@5, recall@10, and latency.

**Result:**  
The hybrid method achieved 84 % F1 with an average latency of 720 ms, outperforming pure MT by 6 % in relevance and pure multilingual embeddings by 4 %. The client reported a 30 % increase in search satisfaction scores within the first month. I learned that blending lightweight translation for query expansion with cross‑lingual embeddings gives the best trade‑off between speed and quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
