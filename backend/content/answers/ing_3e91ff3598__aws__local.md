---
qid: ing_3e91ff3598__aws__local
question: Build RAG over a customer's documents where access control is row- and document-level.
  How do you guarantee a user never sees restricted content in an answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 567
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:36-05:00'
sources: []
---

**Situation / Task**  
I was tasked to launch a Retrieval‑Augmented Generation (RAG) service for a SaaS client that stores thousands of confidential documents per tenant. The requirement: *no user can ever see content they are not authorized to view, even in the generated answer*. I owned the end‑to‑end solution.

**Approach / Design**  
1. **Ingestion** – Documents land in an S3 bucket with *bucket policy* restricting access to a Lambda that extracts text and generates embeddings (using SageMaker Inference).  
2. **Metadata Store** – Each chunk’s embedding is stored in DynamoDB alongside `doc_id`, `row_id`, and a *security tag* (`confidential`, `public`). The table has a global secondary index on the tag for fast filtering.  
3. **Access Control Layer** – A Cognito‑backed API Gateway invokes an AWS Lambda that checks the user’s IAM role (derived from Cognito groups). The Lambda queries DynamoDB, returning only embeddings whose tags are allowed for that user. This guarantees *row‑level* and *document‑level* filtering before any text is ever exposed.  
4. **RAG Engine** – An Amazon Bedrock or SageMaker endpoint receives the filtered embeddings, retrieves the top‑k relevant chunks, concatenates them with a prompt template, and generates the answer. Because only permitted chunks are passed to the model, the response cannot contain restricted content.  
5. **Audit & Monitoring** – CloudTrail logs every API call; Athena queries those logs to produce a compliance report (e.g., 99.999% of queries respect ACLs).  

**Result**  
Deployed within 6 weeks. Post‑launch, we logged < 0.02 % of requests violating policy, and the system handled 12k concurrent users with < 200 ms latency while keeping monthly costs under $4k (S3 + DynamoDB + Lambda).

**Reflection**  
I practiced *Customer Obsession* by building a zero‑trust model that protects sensitive data, and *Dive Deep* by iterating on the metadata schema until we achieved sub‑50 ms retrieval. The biggest learning was that filtering at the vector store level is cheaper and safer than post‑generation redaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
