---
qid: ing_5684f3a51b__star__local
question: 'Explain: Q61: Explain the tradeoffs between different embedding models
  for RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 435
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:06-05:00'
sources: []
---

**Situation**  
During a product launch I was tasked with building an internal FAQ chatbot that could pull the most relevant policy documents from our knowledge base using RAG. The repository had over 50 k PDFs and the latency budget for each user query was under 800 ms.

**Task**  
I needed to choose an embedding model that balanced relevance, speed, and cost while keeping GPU usage low enough for a shared inference cluster.

**Action**  
I benchmarked three popular models: (1) *Sentence‑BERT base* (768‑dim), (2) *SBERT‑large* (1024‑dim) and (3) *FAISS‑IVF flat* with *OpenAI’s text‑embedding‑ada‑002*. For each I measured cosine‑similarity recall@10 on a held‑out test set, inference latency per batch of 32 queries, and the number of GPU cores required.  
- Sentence‑BERT base gave 78 % recall but 12 ms per query on a single RTX‑3060.  
- SBERT‑large improved recall to 84 % at the cost of 28 ms and double GPU memory.  
- Ada‑002 achieved 81 % recall with only 5 ms latency on CPU, but each call incurred an API cost of $0.0004 per request.

I selected Sentence‑BERT base for the in‑house cluster because its 78 % recall was acceptable given our SLA and it kept GPU usage minimal; we also cached embeddings to avoid recomputation.

**Result**  
The deployed chatbot returned relevant answers within 650 ms on average, achieving a 12 % increase in user satisfaction scores. I learned that embedding choice is not just about raw performance—latency, memory footprint, and cost must be weighed against recall gains to fit the operational constraints of a live system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
