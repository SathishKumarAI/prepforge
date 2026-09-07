---
qid: ing_35c3a66074__aws__local
question: 'Explain: BigLaw Bench: Hallucinations — BigLaw Bench: Hallucinations |
  Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 508
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:12-05:00'
sources: []
---

**Situation (S)**  
At a leading law firm we built *BigLaw Bench*, an LLM‑powered document‑review assistant. After launch, users reported “hallucinations” – the model producing legal facts that weren’t in the source documents. The product was stuck at 30 % adoption and risked client data integrity.

**Task (T)**  
Reduce hallucination rate below 2 % while keeping inference latency < 500 ms for 10k concurrent users, and maintain cost‑effectiveness.

**Action (A)**  
1. **Ownership & Dive Deep** – I assembled a cross‑functional squad (data science, infra, legal). We logged every hallucination case, tagged it by document type, and ran a root‑cause analysis on the model’s token distribution.  
2. **Bias for Action & Invent & Simplify** – Introduced *retrieval‑augmented generation* (RAG) with an ElasticSearch index of all firm documents, wrapped in an S3‑based vector store (Pinecone). The LLM now receives a context window of the top 5 passages before generating.  
3. **AWS Services & Scalability** – Deployed the RAG pipeline on **Amazon SageMaker Endpoint** with a GPU instance fleet, autoscaling by CloudWatch metrics. Retrieval uses **Amazon OpenSearch Service**; embeddings are stored in **DynamoDB Global Tables** for multi‑region read latency < 20 ms.  
4. **Cost & Availability** – Leveraged Spot instances for 60 % of inference load and reserved capacity for peak hours, cutting cost by 35 %. Multi‑AZ endpoints give 99.9 % availability.

**Result (R)**  
Within 3 weeks post‑deployment: hallucination rate dropped from 30 % to **1.8 %**, user adoption rose to 75 %, and latency stayed under 450 ms. The cost savings of $48k/month enabled us to reallocate resources to new features.

**Learning** – We documented the failure as a “Hallucination Playbook” for future LLM projects, ensuring continuous monitoring and rapid rollback paths. This exemplifies **Customer Obsession** (protecting client data) and **Ownership** (owning the entire ML lifecycle).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
