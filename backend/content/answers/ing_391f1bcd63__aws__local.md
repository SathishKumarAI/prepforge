---
qid: ing_391f1bcd63__aws__local
question: 'Explain: Scaling & ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 434
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:03-05:00'
sources: []
---

**Situation / Task** – While leading the search team for a media‑streaming platform, we needed to replace our keyword‑only index with a semantic search that could understand user intent at scale (10 M queries/day).  
**Action** – I drove an end‑to‑end architecture:  

1. **Data pipeline** – Ingested 5 TB of content metadata into *Amazon Kinesis Data Streams* → processed by *AWS Glue* to embed text with a fine‑tuned *BERT* model on *SageMaker*.  
2. **Vector store** – Persisted embeddings in *Amazon DynamoDB* (partition key = document ID, sort key = vector dimension) and replicated to *DAX* for sub‑millisecond reads.  
3. **Query layer** – Built a lightweight API gateway backed by *Lambda@Edge* that normalizes user queries, runs the same model on the fly, then performs approximate nearest neighbor search via *FAISS* on an EFS-backed cluster (auto‑scaling).  
4. **Observability** – Instrumented with *CloudWatch Metrics* and *X-Ray*, set up alerts for latency >200 ms.

**Result** – Achieved 99.8 % query accuracy, cut response time from 1.2 s to 120 ms (30× faster), and reduced infra cost by 35 % compared with the previous ElasticSearch cluster.  

**Leadership Principles** – *Customer Obsession* (delivered instant, relevant results), *Ownership* (architected from ingestion to serving), *Dive Deep* (measured latency, CPU usage, and model inference time).  
**Bar‑raiser takeaway** – Demonstrated full ownership, quantified impact, and iteratively refined the system after a first failed attempt that over‑provisioned DynamoDB throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
