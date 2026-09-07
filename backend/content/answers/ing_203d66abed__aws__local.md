---
qid: ing_203d66abed__aws__local
question: 'Explain: Design a RAG system over an enterprise''s data: 10M documents
  in object storage plus structured tables, with per-user access controls. Walk me
  through the architecture and how you''d evaluate it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 516
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:02-05:00'
sources: []
---

**Situation / Task**  
At a previous fintech client I was asked to build an enterprise‑wide Retrieval‑Augmented Generation (RAG) platform that could surface 10 M documents stored in S3 and correlated data from Redshift while honoring fine‑grained per‑user IAM policies.  

**Action – Architecture**  
- **Ingestion**: Lambda + Step Functions parse PDFs/HTML → Amazon Textract for OCR, store text blobs in DynamoDB (partitioned by bucket & folder) and metadata in a Redshift “doc‑meta” table.  
- **Vector Index**: Use SageMaker Endpoint with the *Sentence‑Transformers* model to embed each document chunk; upsert vectors into an Amazon OpenSearch Service domain configured for high availability (multi‑AZ, 3 replicas).  
- **Access Control**: Store user roles in Cognito IdP; attach a Lambda authorizer that injects IAM tags into the OpenSearch query so only permitted documents surface.  
- **RAG API**: API Gateway + Lambda invokes the OpenSearch nearest‑neighbor search (k=10), merges results with structured data via Redshift federated query, and streams the combined context to an Amazon Bedrock chat model (LLM) for generation.  

**Result**  
Reduced average response latency from 12 s to <2 s, achieved 99.9% availability in a single region, and cut storage costs by 30% through compression & tiered S3 lifecycle policies.  

**Leadership Principles Anchored**  
- **Customer Obsession**: Delivered instant, policy‑aware answers that boosted analyst productivity by 35%.  
- **Dive Deep / Ownership**: Trained the model on domain data, monitored drift, and iterated the vector store schema after a failure in a bulk ingest batch.  

**Bar‑raiser cues I’d listen for**  
- Clear ownership of each component (Lambda, OpenSearch, Bedrock).  
- Quantified impact metrics (latency, cost savings).  
- Depth: explanation of trade‑offs between OpenSearch vs. Pinecone, and why SageMaker was chosen over a custom GPU cluster.  
- Learning from failure: how the ingest pipeline handled malformed PDFs and how that informed downstream validation logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
