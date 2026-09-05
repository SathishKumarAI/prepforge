---
qid: ing_7e2ec9e4e5__star__local
question: When would you choose RAG vs long-context stuffing vs fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:03-05:00'
sources: []
---

**Situation** – In a recent e‑commerce project we needed an intelligent FAQ bot for our mobile app. The existing knowledge base was 1.2 GB of PDFs and internal docs, and the user query volume surged by 35% during the holiday season.

**Task** – I had to design a solution that could answer product‑specific questions in real time, support multiple languages, and stay within our server budget (≤ 4 GB RAM per container).

**Action** – First, I benchmarked three approaches. For *long‑context stuffing*, I concatenated the top 20 relevant documents into a single prompt for an LLM; latency hit 1.8 s and cost rose to $0.06/query—too high. Next, I tried *fine‑tuning* on our FAQ set; while accuracy improved (F1 = 0.88), each new product release required re‑training and a 12‑hour GPU window. Finally, I implemented *Retrieval‑Augmented Generation (RAG)* using Pinecone for vector search and GPT‑4o for generation. RAG returned relevant passages in < 200 ms, allowed dynamic updates without retraining, and kept cost at $0.02/query.

**Result** – The bot handled 5,000+ queries/day with a 92% satisfaction rate and reduced server costs by 70%. I learned that RAG balances freshness, scalability, and budget when dealing with large, evolving knowledge bases, whereas long‑context stuffing is simpler but less efficient, and fine‑tuning excels only for static, narrow domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
