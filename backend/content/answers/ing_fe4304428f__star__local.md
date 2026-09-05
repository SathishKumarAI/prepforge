---
qid: ing_fe4304428f__star__local
question: 'Explain: The Retrieval Quality Gap — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 337
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:21-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building a chatbot that answered user queries about credit limits and repayment schedules. Our initial Retrieval-Augmented Generation (RAG) model fetched documents from a 10‑million‑page knowledge base, but the answers often contained outdated policy references or irrelevant sections.

**Task:**  
I was tasked with closing the retrieval quality gap—improving precision of document retrieval so that the downstream language model could generate accurate, up‑to‑date responses while keeping latency below 300 ms per request.

**Action:**  
First, I profiled the index and discovered a high noise level from duplicate policy pages. I cleaned the corpus by deduplicating using cosine similarity thresholds (0.92) and added a temporal metadata field to prioritize recent documents. Next, I switched our vector engine from Faiss flat L2 to HNSW with IVF compression, tuning `efSearch` to 256 for better recall. I also introduced a lightweight BM25 re‑ranking layer that weighted the policy’s “effective date” field heavily. Finally, I set up an A/B test harness in production to monitor answer quality scores.

**Result:**  
Precision of retrieved documents rose from 62 % to 88 %, and user satisfaction (NPS) increased by 15 points. Latency stayed within the target window, proving that careful corpus curation and hybrid retrieval can close the RAG gap effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
