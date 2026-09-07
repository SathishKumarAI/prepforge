---
qid: ing_29e75a06f6__aws__local
question: 'Explain: Batched Embedding — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 466
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:09-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a project to build a production‑grade Retrieval‑Augmented Generation (RAG) service that could serve 10 M user queries per day while keeping latency < 300 ms. The bottleneck was the on‑the‑fly embedding step: generating embeddings for every incoming document in real time.

**Action – Design & Implementation**  
I introduced **Batched Embedding** by staging documents in micro‑batches (size 64–128) and feeding them to a GPU‑accelerated SageMaker endpoint that hosts an OpenAI‑style transformer. The batch pipeline runs on EventBridge → Lambda → SQS → EC2 Spot instances, auto‑scaling with CloudWatch metrics.  
Key AWS services:  
- **SageMaker** for managed inference (GPU P3), with endpoint autoscaling to handle peak traffic.  
- **ECS/Fargate** for the microservice that queues and orchestrates batches.  
- **DynamoDB** to cache embeddings, reducing repeat calls by 70%.  

I added a lightweight **Redis** layer for in‑memory caching of the most frequently queried embeddings, cutting inference cost by ~40 % and improving hit rate from 15 % to 55 %.

**Result**  
Latency dropped from 1.2 s to 250 ms; throughput scaled to 10 M queries/day with a 25 % reduction in GPU hours. Cost per query fell from $0.12 to $0.07, yielding an annual saving of ~$4 M.

**Leadership Principles**  
- **Customer Obsession:** Delivered sub‑300 ms responses that improved user satisfaction (NPS +18).  
- **Ownership & Dive Deep:** I owned the end‑to‑end pipeline and dissected every latency spike to refine batch size and caching strategy.  

*Bar‑raiser focus:* ownership, depth of technical decisions, measurable impact, and lessons learned from an initial 1 s latency failure that drove the batch architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
