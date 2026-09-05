---
qid: ing_a697144df2__star__local
question: 'Q: Why would you still use RAG if frontier models ship 1M-2M token contexts?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 315
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:13-05:00'
sources: []
---

**Situation**  
In a client‑facing chatbot project, we had just migrated from GPT‑3.5 to the latest LLM with a 1 M‑token context window. The product requirement was real‑time legal document summarization for thousands of users daily.

**Task**  
I needed to keep the system responsive and cost‑effective while ensuring that every query could reference only the most relevant parts of massive corpora without overloading memory or latency budgets.

**Action**  
I re‑implemented Retrieval‑Augmented Generation (RAG) using Pinecone for vector search, storing 400 GB of legal clauses. For each user prompt I fetched a 2 k‑token snippet via semantic similarity and fed it into the LLM as context. This trimmed the input to ~4 k tokens per inference, dramatically reducing GPU memory usage. I also added a cache layer so repeated queries hit local embeddings, cutting API calls by 35 %. Finally, I tuned the retrieval threshold to balance precision (88 %) against recall.

**Result**  
The chatbot’s response time dropped from 12 s to 3 s on average, and inference cost fell by 42 %. Despite the large native context window, RAG allowed us to stay within budget, maintain high accuracy, and keep scalability for future data growth. I learned that even with huge contexts, selective retrieval is key to efficient, cost‑effective AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
