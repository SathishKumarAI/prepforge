---
qid: ing_2ecd9954f3__aws__local
question: 'Explain: Layer 4: Vector Databases and Retrieval (RAG)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 524
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:55-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we had to build a real‑time FAQ bot that could pull the most relevant policy documents from a 500 GB knowledge base and answer user queries with <200 ms latency. The goal was to reduce support tickets by 30 % while keeping costs under $5k/month.

**Action**  
* **Ownership & Bias for Action:** I scoped a serverless RAG architecture that used Amazon Bedrock (LLM) + an in‑memory vector store built on OpenSearch’s vector search.  
* **Dive Deep:** The vector index stored 1.2 million embeddings generated from policy PDFs using SageMaker’s TextEmbedding endpoint. Each document was chunked, embedded, and persisted in OpenSearch with a custom `k`‑NN field.  
* **AWS Services & Trade‑offs:**  
  * **S3** – raw documents (cost: $0.023/GB).  
  * **OpenSearch Service** – vector index (scalable to millions of vectors; pay per node).  
  * **Lambda + API Gateway** – orchestrate retrieval and Bedrock inference (pay‑as‑you‑go, < $1k/month).  
* **Scalability & Availability:** Auto‑scaling OpenSearch clusters ensured 99.9 % uptime; cold starts were mitigated by keeping a warm Lambda layer with the embedding model.  
* **Cost Control:** Spot instances for training reduced compute spend by 40 %.  

**Result**  
Within two weeks of launch, support tickets dropped 32 %, and the architecture operated at $4.3k/month—well below target. Post‑mortem revealed that adding a lightweight caching layer for frequently queried vectors would cut latency to <150 ms; we implemented it in the next sprint.

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.  
> **Bar‑raiser takeaways:** Quantified impact (ticket reduction), deep technical design with cost trade‑offs, and a clear learning loop from failure (latency optimization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
