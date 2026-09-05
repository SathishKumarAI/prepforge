---
qid: ing_bdb97e688a__star__local
question: 'Explain: RAG architecture (senior+) — Glean Interview Guide (2026): Process,
  Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 368
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:25-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had a product that delivered real‑time fraud alerts to merchants. Our NLP model for intent classification was stuck at 82 % accuracy because it couldn’t contextualize new transaction patterns.

**Task** – I needed to build an end‑to‑end system that could retrieve relevant legal and compliance documents on the fly, combine them with a generative LLM, and produce a confidence‑scored alert explanation within two seconds per request.

**Action** – I designed a Retrieval‑Augmented Generation (RAG) pipeline. First, I indexed 120 k policy PDFs in Pinecone using OpenAI’s text‑embedding‑ada‑002. Next, I wrapped the retrieval step with LangChain’s “VectorStoreRetriever” to fetch the top‑5 relevant snippets per query. For generation, I fine‑tuned GPT‑4o on a curated dataset of merchant FAQs and compliance rules. The model then concatenated retrieved chunks and generated a concise explanation, scoring each output with a custom BERT‑based confidence metric. I deployed the stack in Docker containers orchestrated by Kubernetes, achieving < 1.8 s latency per inference.

**Result** – Accuracy jumped from 82 % to 94 %, and merchants reported a 35 % reduction in false positives. The system also cut operational costs by 18 % due to fewer manual reviews. I learned that carefully balancing retrieval relevance, generative clarity, and real‑time constraints is key to a production‑ready RAG solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
