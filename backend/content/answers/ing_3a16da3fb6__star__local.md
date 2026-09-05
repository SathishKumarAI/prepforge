---
qid: ing_3a16da3fb6__star__local
question: 'Explain: Cost and latency considerations — Contextual Retrieval in AI Systems
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 323
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:41-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with adding a contextual retrieval layer to our chatbot so it could pull up relevant documents from a 10‑million‑item knowledge base in real time, while keeping the overall response latency under 800 ms.

**Task:**  
I had to design a system that balanced two conflicting goals: minimizing query cost (API calls and compute) and maintaining sub‑second latency for end users.

**Action:**  
First, I benchmarked several vector search backends (FAISS, Milvus, Pinecone). FAISS on local GPUs gave the fastest recall but required expensive GPU time; Milvus offered a good trade‑off with CPU‑only mode. I built a two‑stage retrieval: a lightweight “preview” query using an approximate nearest neighbor index to fetch 20 candidates, then a second, exact search over those candidates against the full index. To cut cost, I cached results per user session and only refreshed them every 5 minutes. For latency, I pipelined the preview and exact stages so the user saw the first answer within 300 ms while the final ranking finished in parallel.

**Result:**  
The system reduced average retrieval cost by 35% (from $0.12 to $0.08 per query) and kept overall latency at 650 ms on average, meeting our SLA. I learned that a hybrid index strategy plus smart caching can reconcile cost and speed without sacrificing answer quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
