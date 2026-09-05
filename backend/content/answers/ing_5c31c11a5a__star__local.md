---
qid: ing_5c31c11a5a__star__local
question: 'Q: When would you choose Long Context over RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:48-05:00'
sources: []
---

**Situation:**  
During a client‑facing chatbot project for a financial services firm, we had to provide real‑time investment advice based on the latest market reports and regulatory filings. The user could ask multi‑step questions that required referencing several documents in one conversation.

**Task:**  
I needed to decide whether to build a Retrieval‑Augmented Generation (RAG) pipeline or use a long‑context model so that each request could be answered without extra retrieval latency, while still maintaining high factual accuracy.

**Action:**  
I benchmarked GPT‑4o’s 128K‑token context window against a RAG setup using Pinecone vectors and an OpenAI embeddings index. For a typical query chain (four sub‑questions), the long‑context approach loaded all relevant documents into the prompt, eliminating the round‑trip to the vector store. I added a lightweight caching layer to keep the most recent 10k tokens in memory and inserted sanity checks that flagged potential hallucinations. In contrast, RAG required an extra API call per chunk, adding ~200 ms latency per retrieval.

**Result:**  
The long‑context solution cut response time from 650 ms (RAG) to 380 ms while keeping accuracy at 94% versus 92% for RAG. I learned that when the conversation’s scope is bounded and the user expects a single coherent answer, a carefully managed long prompt can outperform RAG in both speed and simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
