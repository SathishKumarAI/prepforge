---
qid: ing_90aaa42de9__star__local
question: 'Explain: LLM-as-Judge for RAG — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 361
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:11-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an automated compliance assistant that had to answer regulatory queries from users in real time. Our retrieval‑augmented generation (RAG) pipeline was pulling documents from a massive internal knowledge base, but the quality of answers varied wildly—sometimes the model cited outdated policy pages or pulled irrelevant sections.

**Task**  
I needed to create a lightweight “LLM-as-Judge” layer that could evaluate each retrieved snippet’s relevance and correctness before it fed into the final response. The goal was to reduce hallucinations by at least 40% while keeping latency under 300 ms per request.

**Action**  
I set up a two‑stage RAG flow: first, the retriever (FAISS over BERT embeddings) pulls top‑k docs; second, a lightweight LLM fine‑tuned on our compliance corpus acts as a judge. The judge scores each snippet on relevance and factuality using a prompt that asks it to compare against the user query and flag contradictions. I implemented this in Python with LangChain, using OpenAI’s gpt‑3.5‑turbo for the judge and vector store sharding for speed. I added a small cache of high‑confidence judgments to keep response times low.

**Result**  
After deployment, hallucination rates dropped from 28% to 13%, and user satisfaction scores improved by 18 points on our internal survey. The system also cut average response time from 420 ms to 275 ms. I learned that treating an LLM as a meta‑judge can dramatically improve RAG reliability without costly architectural changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
