---
qid: ing_5ed364f7d4__star__local
question: 'Explain: Technology Choices (Dec 2025 Update) — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 405
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:48-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech in early 2025, our compliance team was drowning in 4 TB of regulatory documents and required instant, accurate answers to audit questions. The legacy search engine returned irrelevant snippets; we needed a real‑time, explainable AI assistant.

**Task:**  
Design an enterprise Retrieval‑Augmented Generation (RAG) pipeline that could ingest the entire knowledge base, answer queries with confidence scores, and provide traceable evidence for auditors—all within a 48‑hour sprint.

**Action:**  
I chose LangChain + OpenAI GPT‑4o as the LLM backbone because of its built‑in explainability hooks. For retrieval I deployed an Elastic Search cluster with dense vector indices (FAISS‑based) on top of a Sentence‑BERT encoder fine‑tuned on legal corpora, ensuring sub‑second similarity queries. The pipeline ran in Docker containers orchestrated by Kubernetes, with Prometheus monitoring latency and CPU usage. I added a custom “source‑ranking” layer that returned the top 3 document snippets per answer and logged them to an audit trail database (PostgreSQL). To keep costs low, I leveraged OpenAI’s fine‑tuning API for domain‑specific terminology, reducing token usage by ~25 %. Finally, I built a lightweight React front‑end with a “confidence badge” UI.

**Result:**  
Within two weeks the system answered 92 % of audit queries correctly on the first try, cutting compliance review time from 3 days to 4 hours. CPU cost dropped 30 % after vector index optimization, and auditors appreciated the transparent source links. I learned that coupling a lightweight retrieval layer with a fine‑tuned LLM can deliver enterprise‑grade RAG without sacrificing explainability or scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
