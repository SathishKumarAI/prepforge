---
qid: ing_84041ed74f__aws__local
question: 'Explain: Evaluation & debugging — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 432
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:29-05:00'
sources: []
---

**Evaluation & Debugging – RAG & Retrieval**

*Situation*: In my last role I led a team building a conversational agent for an e‑commerce platform that needed to answer product queries in real time while staying cost‑effective.  
*Task*: We had to evaluate the Retrieval‑Augmented Generation (RAG) pipeline and debug recurrent hallucinations without compromising latency.

*Action*:  
1. **Metrics & Monitoring** – Implemented CloudWatch dashboards tracking *retrieval accuracy*, *token‑level perplexity*, and *end‑to‑end latency*.  
2. **Ground Truth Benchmark** – Curated a 5,000‑question test set annotated by domain experts; ran the RAG model against it, measuring *Exact Match (EM)* and *F1* scores.  
3. **Debug Pipeline** – Built an S3‑based “debug bucket” where failed queries were logged with their top‑k retrieved documents and LLM outputs. Lambda functions performed automatic sanity checks (e.g., duplicate docs, missing fields).  
4. **Iterative Refinement** – Fine‑tuned the retriever on a subset of high‑error categories; switched from ElasticSearch to OpenSearch for cheaper scaling while keeping 99.9% availability.  

*Result*: EM improved from **42 % → 68 %**, F1 from **55 % → 81 %** within two sprints, and latency dropped from **850 ms → 450 ms**. Cost per query fell by **$0.02** due to the switch to OpenSearch and smarter caching in Redis.  

*Reflection*: Ownership drove me to own the full evaluation loop; diving deep into logs uncovered a bug in the vector similarity threshold. I learned that continuous, data‑driven monitoring is the only way to sustain high‑quality RAG at scale.  

**Leadership Principles Highlighted**: *Customer Obsession*, *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
