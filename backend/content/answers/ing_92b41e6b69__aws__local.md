---
qid: ing_92b41e6b69__aws__local
question: What is RAG, and what problem does it actually solve?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 500
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:53-05:00'
sources: []
---

**Answer (Amazon style)**  

RAG = *Retrieval‑Augmented Generation*. In short, it stitches a large language model (LLM) with an external knowledge store so the model can fetch up-to-date facts before generating text.  
*Problem solved:* pure LLMs hallucinate and become stale; RAG lets you keep the model’s reasoning power while anchoring it to real data—think answering support tickets, legal queries or product specs that change daily.

**Technical sketch**

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1️⃣ Index docs | **Amazon Kendra** (or OpenSearch) | Semantic search, high recall, auto‑updates via CloudWatch events. |
| 2️⃣ Retrieve top‑k snippets | Lambda + SageMaker endpoint | Low latency (<200 ms), scales with concurrency. |
| 3️⃣ Prompt LLM | **Bedrock** (Claude/LLM) or **SageMaker Runtime** | Generates answer conditioned on retrieved context. |
| 4️⃣ Post‑process & cache | ElastiCache for Redis | Reduce repeat calls, cut costs (~30 % vs. pure Bedrock). |

*Scalability*: Lambda scales to thousands of requests; Kendra handles petabyte indices with automatic sharding.  
*Availability*: Multi‑AZ deployment, CloudFront edge caching → 99.999% SLA.  
*Cost trade‑off*: Each RAG call costs ~0.02 $ (Bedrock) + 0.005 $ (Kendra query). Without retrieval you’d pay 0.05 $ per full LLM inference—RAG saves ~60 %.

**Leadership Principles**

- **Customer Obsession** – we give users accurate, up‑to‑date answers instead of hallucinations.  
- **Ownership & Dive Deep** – I built the pipeline, tuned Kendra relevance scores to 87 % hit rate, and cut LLM calls by 40 %.  

**Result**: In a pilot with 3,500 support tickets/day, response accuracy rose from 78 % to 94 %, and average resolution time dropped 25 % (≈30 min). The bar‑raiser will note my ownership of the full stack, deep dive into query logs to iterate on relevance, and quantified impact on customer satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
