---
qid: ing_dfa1ee876d__star__local
question: 'Explain: Non-functional — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 347
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:04-05:00'
sources: []
---

**Situation**  
When I joined a fintech client, they wanted to launch an internal RAG‑powered knowledge base that could pull policy documents, compliance rules and code snippets on demand. Their SLA demanded sub‑second responses for 95 % of queries, while keeping data privacy tight.

**Task**  
I was tasked with designing the non‑functional stack: latency, scalability, security, and maintainability, all under a two‑month deadline.

**Action**  
First, I benchmarked vector search engines (Pinecone vs. Milvus) and chose Pinecone for its low‑latency partitioning. To hit the 200 ms target, I pre‑computed embeddings during nightly ETL, cached hot vectors in Redis, and set up a multi‑region deployment with Kubernetes autoscaling. For security, I enabled end‑to‑end encryption (TLS 1.3), applied role‑based access controls on the API gateway, and integrated Vault for secret rotation. Finally, I automated health checks and alerting via Prometheus + Grafana to ensure uptime.

**Result**  
The system met the SLA: 97 % of queries returned in <200 ms. Load testing showed it could handle 10k concurrent users with a 5‑second cold start. Cost was reduced by 30 % through autoscaling, and we achieved ISO 27001 compliance within the quarter. I learned that balancing latency, cost, and security often requires layered caching and real‑time observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
