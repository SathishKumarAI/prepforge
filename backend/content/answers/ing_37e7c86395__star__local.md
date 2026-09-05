---
qid: ing_37e7c86395__star__local
question: 'Explain: Contextual Retrieval vs. Late Chunking'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 351
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:09-05:00'
sources: []
---

**Situation:**  
At my previous company we built an internal knowledge‑base chatbot for the customer support team. The FAQ database was growing to over 20 000 articles and our users were complaining that searches returned irrelevant documents—especially when they asked about “refund policies in Canada.”  

**Task:**  
I needed to redesign the retrieval pipeline so the bot could surface contextually relevant answers while keeping latency under 300 ms per query.  

**Action:**  
First, I replaced the naïve BM25 index with a contextual retriever: we fine‑tuned a sentence‑BERT model on past support tickets and used it to embed both queries and articles in a dense vector space. For each query, we retrieved the top 10 nearest embeddings (contextual retrieval). Then, instead of passing all 20 000 documents through the downstream transformer decoder (late chunking), I implemented “early chunking” by slicing each article into 256‑token chunks before indexing. During inference, only the top‑scoring chunk from each retrieved document was fed to the language model for generation. This dramatically cut GPU memory usage and kept the response time within our SLA.  

**Result:**  
Search relevance jumped from a 32% precision@5 to 78%, while query latency dropped from 1.2 s to 0.25 s on average. I learned that combining dense contextual embeddings with chunk‑level retrieval is essential for scaling large knowledge bases without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
