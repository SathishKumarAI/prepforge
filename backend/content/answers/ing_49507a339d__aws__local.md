---
qid: ing_49507a339d__aws__local
question: 'Explain: Resource Methods — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 494
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:23-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the migration of an on‑premise data ingestion pipeline to a fully serverless architecture in AWS. The legacy system processed ~3 M records/day but suffered from high MTTR and limited scalability.

**Task (T)**  
I was tasked with designing a RESTful API that exposed the ingestion endpoint while ensuring 99.99 % availability, sub‑200 ms latency for most requests, and cost control under $2k/month.

**Action (A)**  
*Architectural dive:*  
- **API Gateway + Lambda** for request handling; each Lambda invoked per record batch.  
- **DynamoDB** as a durable queue with TTL to store ingestion metadata; triggers another Lambda that writes to S3 and trains an ML model in SageMaker.  
- **Step Functions** orchestrate the workflow, providing visibility and retry logic.  

*Design decisions:*  
- REST follows *resource‑centric* modeling: `/ingest/{datasetId}` (POST) creates a job; `/jobs/{jobId}` (GET) returns status.  
- HATEOAS links guide clients to next actions, reducing guesswork.  
- Pagination (`?page=2&size=50`) keeps responses lightweight and scales with data volume.  

*Scalability & cost:*  
- Auto‑scaling Lambda handles 10× traffic spikes; API Gateway throttles at 1000 RPS to protect downstream services.  
- Estimated cost: ~$1,800/month (Lambda invocations + API calls + DynamoDB storage).  

**Result (R)**  
The new REST API cut ingestion latency from 2 s to <200 ms for 95 % of requests and increased throughput by 12× with a 30 % reduction in operational cost. The system now supports real‑time model updates, improving downstream recommendation accuracy by 8 %.  

**Leadership Principles Reflected**  
- **Customer Obsession:** Simplified API for data scientists, reducing friction.  
- **Ownership & Dive Deep:** Owned full stack redesign, quantified performance gains, and iterated on failure modes (e.g., Lambda timeouts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
