---
qid: ing_67afe48af2__aws__local
question: 'Explain: Retrieval-Augmented Generation (RAG) — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:20-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to build an enterprise‑grade knowledge assistant for a Fortune 500 client. Their goal was 90 %+ accuracy in answering domain questions while keeping latency < 300 ms.  

**Action (Technical Design)**  
I chose **Retrieval‑Augmented Generation (RAG)**: a hybrid of a dense retriever and an LLM decoder.  
1. **Indexing** – I used *Amazon Kendra* to ingest ~200 TB of documents, auto‑tagging with AWS Comprehend for semantic embeddings.  
2. **Retriever** – Amazon OpenSearch Service hosts the vector index; we tuned cosine similarity thresholds to balance recall vs precision.  
3. **Generator** – We deployed a fine‑tuned *Amazon Bedrock* Claude model behind an API Gateway, scaling via Lambda@Edge to keep cold‑start latency < 150 ms.  
4. **Orchestration** – Step Functions chain retrieval → generation → post‑processing (AWS Translate for multilingual output).  

**Result**  
We achieved **93 % answer accuracy**, a 45 % reduction in manual query triage, and cut response time from 1.2 s to 0.28 s—well under SLA. Cost dropped 30 % by leveraging on‑demand OpenSearch nodes during peak hours.  

**Reflection (Bar‑raiser notes)**  
I took full ownership of the pipeline, diving deep into embedding quality and latency bottlenecks. The biggest failure was an over‑tight similarity threshold that missed relevant docs; we learned to add a fallback “expansion” step, improving recall by 12 %. This experience reinforced my bias for action and commitment to customer obsession: delivering a system that truly empowers users with instant, accurate knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
