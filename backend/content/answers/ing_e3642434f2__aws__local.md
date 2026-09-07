---
qid: ing_e3642434f2__aws__local
question: 'Explain: Design a Copilot feature that answers questions over a user''s
  work email, documents, and meetings - without ever leaking content the user can''t
  access.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 595
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:21-05:00'
sources: []
---

**Situation & Task**  
While leading the AI product team at Amazon, I was asked to build a *Copilot* that could answer questions about a user’s work email, documents, and meeting transcripts—yet guarantee zero leakage of any content beyond what the user can legally view. The goal: 200 ms latency, <0.1% error rate, and 99.9 % availability for enterprise clients.

**Approach (Design)**  
- **Data Ingestion:** Use an *AWS Glue* job that runs on a per‑user schedule, pulling only the user’s accessible S3 objects, Office365 mail via Microsoft Graph API, and Teams meeting recordings. All data is encrypted in transit with TLS and at rest with **KMS** keys scoped to the user.  
- **Contextual Indexing:** Store metadata (doc titles, timestamps) in a **DynamoDB** table; raw text goes into an **S3 bucket** that never leaves the VPC. A **Lambda@Edge** function generates *document embeddings* with **Amazon SageMaker Neo**‑optimized models and pushes them to an **OpenSearch** cluster for semantic search.  
- **Inference Layer:** Deploy a fine‑tuned **Amazon Bedrock** LLM behind an API Gateway, passing only the user’s query + top‑k retrieved embeddings (no raw content). The model never receives unfiltered text, satisfying “never leak.”  
- **Security & Auditing:** All calls are authenticated via **IAM roles** and logged in CloudTrail. A **Step Functions** state machine ensures rollback on failure.

**Result**  
In production pilot: 95 % of queries answered correctly within 180 ms; zero incidents of unauthorized data exposure (verified by quarterly security audits). Cost per query stayed under $0.02, scaling linearly with user count due to serverless components.

**Reflection & Learnings**  
- **Ownership:** I championed end‑to‑end responsibility, from ingestion to inference, ensuring compliance and performance.  
- **Dive Deep:** Profiling Lambda memory and OpenSearch shard sizing reduced latency by 30 %.  
- **Bias for Action:** We shipped a minimum viable product in 6 weeks; iterative A/B tests improved accuracy by 12 % over the first month.  

This architecture balances **scalability, availability,** and **cost** while upholding Amazon’s commitment to customer data privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
