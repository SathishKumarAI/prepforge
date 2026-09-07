---
qid: ing_72a0c4aedb__aws__local
question: 'Explain: Creating Vision+Text RAG Pipelines — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 499
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:38-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a project to build an end‑to‑end Retrieval‑Augmented Generation (RAG) system that answered customer queries about product catalogs using both images and text. The goal was to reduce support tickets by 30 % while keeping latency under 1 s for 95 % of requests.

**Action**  
* **Design** – I scoped the pipeline:  
  * **Vision encoder** (ResNet‑50 on SageMaker) → feature vectors stored in DynamoDB.  
  * **Text encoder** (Sentence‑BERT on SageMaker) → embeddings saved in Amazon OpenSearch for semantic search.  
  * **Retriever** queries both stores via a Lambda orchestrator that runs an early‑exit cosine similarity filter.  
  * **Generator** uses Amazon Bedrock’s GPT‑4o to fuse retrieved snippets and produce the final answer.  

* **AWS Services & Trade‑offs** – Leveraged SageMaker for training (cost: $0.25 / hour), DynamoDB for low‑latency key‑value lookups, OpenSearch for full‑text search, Lambda for serverless orchestration, and Bedrock for cost‑effective inference ($0.02 / token).  
* **Scalability & Availability** – Auto‑scaling SageMaker endpoints (minimum 2 replicas) and Multi-AZ DynamoDB ensured 99.9 % uptime; OpenSearch’s sharding strategy handled 10k QPS.

**Result**  
Within three months, the RAG system cut support tickets by **32 %**, met latency targets for 97 % of queries, and saved $18K/month in manual labor.  

---

### Amazon Leadership Principles Highlighted
* **Customer Obsession** – focused on reducing friction for end users.  
* **Ownership** – drove the entire stack from data ingestion to generation.  
* **Dive Deep** – performed cost/latency trade‑off analysis and tuned embedding similarity thresholds.  

Bar‑raiser cues: clear ownership, depth of technical choices, quantified impact (ticket reduction & cost savings), and a brief reflection on a failed initial prototype that led to the final architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
