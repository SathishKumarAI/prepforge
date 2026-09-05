---
qid: ing_1b936ed97f__star__local
question: 'Explain: Q: Describe three RAG patterns and when to use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 357
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:25-05:00'
sources: []
---

**Situation**  
At my previous company we were building a customer support chatbot that had to pull up relevant policy documents for users in real time. The knowledge base grew to over 50 k pages, and our existing retrieval‑augmented generation (RAG) pipeline was too slow for production.

**Task**  
I needed to redesign the RAG architecture so it could deliver answers within 1 s while keeping accuracy above 90 %. I had to choose the right pattern—dense vector search, sparse keyword lookup, or hybrid—and justify each choice for different user scenarios.

**Action**  
First, I implemented a **dense embedding‑only RAG** using FAISS on sentence‑BERT vectors for high‑level policy queries; this gave fast recall but missed fine‑grained terms. Second, I added a **sparse keyword RAG** with BM25 over the same documents to catch exact phrase matches, useful for legal‑style questions. Third, I built a **hybrid two‑stage RAG** that ran both in parallel and weighted their scores based on query intent detected by a lightweight classifier. I used LangChain orchestration and OpenAI’s GPT‑4 as the generator, fine‑tuned on policy summaries.

**Result**  
The hybrid system cut average response time from 3 s to 0.9 s and improved answer relevance (BLEU) from 0.72 to 0.85. User satisfaction scores rose by 12 %. I learned that no single RAG pattern fits all contexts; combining dense, sparse, and intent‑aware weighting gives the best trade‑off between speed, coverage, and precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
