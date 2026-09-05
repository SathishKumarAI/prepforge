---
qid: ing_e5dd3d52a2__star__local
question: 'Explain: Challenges Encountered — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 367
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:29-05:00'
sources: []
---

**Situation:** In my last role as a senior ML engineer at a fintech firm, we were building an internal knowledge‑base chatbot to help analysts answer compliance queries quickly. The data spanned PDFs, internal wikis, and live regulatory feeds—over 2 TB of semi‑structured content.

**Task:** I had to design a Retrieval Augmented Generation (RAG) system that could pull the most relevant documents in real time, generate concise answers, and keep latency under 1.5 seconds for each user request, while ensuring GDPR compliance on data handling.

**Action:** I chose an open‑source dense retriever (FAISS with Sentence‑BERT embeddings) and fine‑tuned it on a labeled set of past audit questions to improve relevance. For generation, I wrapped GPT‑4 via the OpenAI API but added a custom post‑processing layer that cross‑checked any cited source against our internal policy database before returning it. To meet latency, I sharded the embedding index across two nodes and introduced a caching layer for frequent queries. Finally, we built an automated monitoring dashboard in Grafana to track recall@k and response times.

**Result:** The system achieved 87 % recall@5 on a held‑out compliance test set, reduced average answer time from 4.2 s to 1.1 s, and cut analyst query volume by 35 %. I learned that balancing retrieval quality with strict latency constraints often means hybridizing dense and sparse techniques, and that continuous monitoring is essential for long‑term reliability in an enterprise setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
