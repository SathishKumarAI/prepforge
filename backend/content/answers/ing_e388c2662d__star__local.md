---
qid: ing_e388c2662d__star__local
question: An enterprise customer says "Claude hallucinates too much" in their RAG-based
  knowledge assistant. You're the applied engineer on the account. First 48 hours?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 383
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:37-05:00'
sources: []
---

**Situation:**  
A Fortune‑500 logistics client was rolling out a RAG (Retrieval‑Augmented Generation) chatbot for internal compliance queries. Within 24 hrs of go‑live, their audit team flagged that the assistant frequently produced “hallucinated” answers—facts not present in the indexed documents.

**Task:**  
Within the first 48 hours I had to identify the root cause, mitigate hallucinations, and deliver a stable release that met compliance requirements without delaying their rollout.

**Action:**  
1. **Data audit & prompt design** – I pulled the top‑5 failing queries from the logs and cross‑checked the retrieved passages against the source PDFs using LangChain’s document splitter to ensure no mis‑aligned chunks were feeding the model.  
2. **Reinforced retrieval fidelity** – Switched from cosine similarity over dense vectors to a hybrid BM25 + FAISS index, tightening the top‑k to 3 and adding a relevance threshold of 0.75 to filter out weak matches.  
3. **Chain refinement** – Rewrote the prompt template to explicitly ask the model to cite sources and refuse when no evidence exists, leveraging OpenAI’s “chain of thought” style for better traceability.  
4. **Safety layer** – Implemented a lightweight post‑generation verifier that cross‑checks key facts against the retrieved passages before presenting the answer, flagging any mismatches for human review.

**Result:**  
Within 48 hrs the hallucination rate dropped from 42% to <5%, and the compliance audit passed with no further issues. The client launched the chatbot on schedule, saving an estimated $250K in manual support hours per quarter. I learned that early prompt engineering combined with a tight retrieval filter can dramatically reduce hallucinations in production RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
