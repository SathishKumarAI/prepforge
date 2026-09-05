---
qid: ing_4e8a6ba614__star__local
question: 'Explain: Pipeline anatomy — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 364
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:31-05:00'
sources: []
---

**Situation:**  
At my last startup we were launching a customer support chatbot that needed to pull up-to-date policy documents for real‑time queries. Our existing FAQ bot was stuck in static response mode, and the compliance team warned that any outdated answer could lead to legal risk.

**Task:**  
I had to design an end‑to‑end Retrieval‑Augmented Generation (RAG) pipeline that could ingest our internal knowledge base, index it efficiently, and let a language model fetch relevant passages on demand while still producing fluent replies.

**Action:**  
1. Collected PDFs and markdown docs from Confluence, converted them with `pdfminer` to clean text.  
2. Chunked the text into 500‑token segments and stored embeddings in an ElasticSearch vector index (using OpenAI’s `text-embedding-ada-002`).  
3. Built a lightweight Flask API that, given a user prompt, queries the index for top‑5 vectors via cosine similarity.  
4. Fed those snippets plus the original prompt into GPT‑4o, using a prompt template that instructs the model to cite sources.  
5. Added a post‑processing layer that verifies compliance tags and logs any mismatches.

**Result:**  
The bot reduced manual ticket volume by 38 % within two weeks, answered policy questions with 97 % accuracy per QA audit, and cut the average response time from 12 s to under 3 s. I learned how vector search trade‑offs (chunk size vs recall) directly impact user satisfaction, and that a simple API wrapper can make RAG production‑ready without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
