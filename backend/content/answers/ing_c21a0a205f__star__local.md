---
qid: ing_c21a0a205f__star__local
question: 'Explain: Likely interviewer follow-ups — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 312
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:58-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new customer‑support platform that needed instant access to our internal knowledge base and external regulatory documents. The team was concerned that the retrieval‑augmented generation (RAG) model would return stale or incorrect data, especially for compliance queries.

**Task:**  
I had to design an enterprise RAG pipeline that guaranteed up‑to‑date answers, kept latency below 800 ms per request, and logged every source document for auditability.

**Action:**  
I chose ElasticSearch as the vector store, indexing fresh PDFs via a nightly ingestion job. For the language model I wrapped OpenAI’s GPT‑4o with a custom prompt that forced it to cite sources. To enforce compliance, I built a policy layer in Python that cross‑checked every cited URL against an internal whitelist and flagged any deviation for manual review. I also integrated Grafana dashboards to monitor hit‑rate and latency, tuning the batch size until we hit our SLA.

**Result:**  
The prototype reduced average response time from 1.3 s to 0.65 s while maintaining a 99.5% precision on compliance queries. Audit logs captured 100% of source references, enabling full traceability for regulatory audits. I learned that coupling vector search with strict source‑citing policies is essential for trustworthy enterprise RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
