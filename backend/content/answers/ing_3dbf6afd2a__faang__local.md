---
qid: ing_3dbf6afd2a__faang__local
question: A customer insists on fine-tuning an open model on their support tickets
  because "we want our own model." You think RAG over their knowledge base solves
  it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 403
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:33-05:00'
sources: []
---

**Clarify**  
The client wants a custom model for ticket triage/response. Key assumptions:  
1) They have a sizable, proprietary support‑ticket corpus (privacy constraints).  
2) Their goal is quick, accurate answers without re‑training from scratch.  
3) They value explainability and deployment speed.

**Approach**  
Explain that fine‑tuning an open model on raw tickets may overfit to noisy patterns and expose sensitive data. Instead propose Retrieval‑Augmented Generation (RAG): index the knowledge base, query a lightweight vector store, then feed retrieved snippets into a pre‑trained LLM for generation. This keeps the language model general while grounding answers in their own content.

**Depth**  
*Indexing*: embed each ticket/FAQ with a robust encoder (e.g., Sentence‑BERT). Store embeddings in FAISS or Pinecone.  
*Retrieval*: on query, fetch top‑k relevant snippets.  
*Generation*: pass query + snippets to an LLM (OpenAI’s GPT‑4o or an open‑source equivalent) using a prompt that emphasizes “use the provided context.”  
Complexity: O(log N) retrieval; generation is linear in snippet size. Trade‑off: Slight latency for retrieval vs. much lower training cost and risk of leaking private data.

**Edge Cases**  
- No relevant snippets → fallback to generic answer or escalation.  
- Highly technical queries requiring deeper context → expand k or use hierarchical retrieval.  
- Data drift → periodic re‑indexing.

**Optimize & Communicate**  
Highlight benefits: minimal compute, no fine‑tuning cost, preserves privacy, easy updates. Offer a demo comparing RAG vs. fine‑tuned model on sample tickets. Conclude that RAG delivers the “own model” feel with far less risk and faster time‑to‑value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
