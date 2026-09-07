---
qid: ing_22d57c38cc__aws__local
question: What is RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 410
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:33-05:00'
sources: []
---

**Question:** *What is RAG?*  

**Answer (Amazon‑style)**  

> **Situation** – In my last role I led a cross‑functional team to build a customer‑support chatbot that needed to answer niche product questions with up‑to‑date knowledge.  
> **Task** – We had to reduce the average time to first response by 30 % while keeping hallucinations below 5 %.  
> **Action** – I introduced Retrieval‑Augmented Generation (RAG). RAG stitches a dense retrieval layer (using Amazon Kendra or OpenSearch) with a transformer decoder (e.g., T5, BERT‑based). Documents are vectorized and stored in an S3 + DynamoDB index; the model fetches top‑k vectors on each query and conditions its generation on those snippets. I orchestrated a pilot using SageMaker endpoints, Lambda for request routing, and CloudWatch for real‑time metrics.  
> **Result** – After two weeks of A/B testing, we cut first‑response time from 12 s to 3 s (75 % reduction) and kept hallucination rates at 2 %. Cost per inference dropped by 18 % because the retrieval step limited token usage in the decoder.  
> 
> **Leadership Principles** – *Customer Obsession* (better support experience), *Ownership* (full end‑to‑end pipeline), *Dive Deep* (vector similarity tuning), and *Bias for Action* (rapid prototype & iterate).  

**Bar‑raiser focus:** ownership of the full data‑pipeline, depth in vector search vs. generation trade‑offs, quantifying impact on SLA, and lessons learned when early trials produced noisy snippets that we fixed by adding a relevance filter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
