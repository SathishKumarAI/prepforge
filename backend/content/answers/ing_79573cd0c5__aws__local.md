---
qid: ing_79573cd0c5__aws__local
question: 'Explain: Week 2 - Context: prompting, RAG, fine-tuning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 536
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:32-05:00'
sources: []
---

**Context (Week 2 – Prompting, Retrieval‑Augmented Generation (RAG), Fine‑Tuning)**  

**Situation:** In Q3 2024 I led a cross‑functional team to launch an AI‑powered customer support bot for our e‑commerce platform. The goal was to reduce first‑response time from **12 min to <2 min** while maintaining a 95 % CSAT score.

**Task:** Build a system that could (1) understand natural language queries, (2) retrieve the most relevant knowledge base articles in real time, and (3) generate concise, context‑aware responses without violating data privacy.

**Action:**  
- **Prompting & RAG:** Implemented a hybrid model using Amazon Bedrock’s *Claude* for generation and a vector store on **Amazon QLDB + OpenSearch** for retrieval. Each user query was broken into an embedding (via SageMaker Feature Store) and matched to the top‑10 documents; the prompt concatenated the user question with these snippets, ensuring the LLM had enough context without overloading token limits.  
- **Fine‑Tuning:** Trained a custom model on 200 k anonymized chat logs using SageMaker Ground Truth for labeling intent and sentiment. Fine‑tuned on *Claude* via Bedrock’s “Custom Model” endpoint, reducing hallucination rate by **38 %**.  
- **Scalability & Cost:** Leveraged Auto Scaling for the OpenSearch cluster (max 2× read replicas) and Spot instances for training; total monthly spend dropped from $12k to $7.8k while maintaining <99.9 % availability.

**Result:** First‑response time fell to **1.5 min**, CSAT rose to **97 %**, and support tickets decreased by **21 %** in the first quarter post‑launch.

**Leadership Principles Reflected:**  
- **Customer Obsession** – focused on speed & accuracy to delight users.  
- **Ownership** – drove end‑to‑end delivery, from data prep to production monitoring.  
- **Dive Deep** – iterated on prompts and embeddings until metrics met targets.  

**Bar‑raiser Takeaway:** The candidate demonstrated ownership by owning the full pipeline, dive deep through meticulous prompt engineering, quantified impact with real metrics, and learned from an initial hallucination spike—pivoting to fine‑tuning to solve it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
