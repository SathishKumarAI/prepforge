---
qid: ing_1b936ed97f__aws__local
question: 'Explain: Q: Describe three RAG patterns and when to use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 520
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:30-05:00'
sources: []
---

**RAG Patterns (Retrieve‑Augment‑Generate)**  
*Leadership Principles:* **Customer Obsession** – we give users the most accurate, up‑to‑date answers; **Ownership** – we build end‑to‑end pipelines that keep data fresh.

| Pattern | When to Use | Key AWS Services |
|---------|-------------|------------------|
| **1️⃣ Retrieval‑only (R)** | Short‑form FAQs where knowledge is static and latency < 100 ms. | Amazon OpenSearch for vector search, Lambda for lightweight scoring. |
| **2️⃣ RAG with Local Cache (R‑A‑G‑Cache)** | Conversational agents that need quick turn‑around but can tolerate a few seconds’ lag; e.g., chatbot answering policy questions. | Step Functions orchestrating SageMaker endpoint + DynamoDB cache; S3 for raw docs. |
| **3️⃣ RAG with Real‑time Streaming (R‑A‑G‑Stream)** | Mission‑critical analytics where the answer must reflect the latest sensor data (e.g., fraud detection). | Kinesis Data Streams → Lambda → Bedrock or SageMaker for generation; DynamoDB TTL for temporary state. |

**STAR Example – Scaling a RAG Chatbot**

- **Situation:** 200k monthly users asked policy‑related questions on our portal; SLA was 1 s response.
- **Task:** Reduce latency from 4 s to < 1 s while keeping cost <$5k/month.
- **Action:** Deployed an R‑A‑G‑Cache pattern. Indexed docs in OpenSearch (vector embeddings via SageMaker). Lambda cached top‑10 results per user session in DynamoDB TTL 30 min, invoking Bedrock for generation only when cache miss.
- **Result:** Latency dropped to 0.8 s on average; cost fell from $12k to $4.5k/month (≈ 62% savings). User satisfaction rose from 78% to 92%.  

**Bar‑raiser notes:**  
- Ownership: I owned the entire pipeline, from data ingestion to monitoring.  
- Dive Deep: I profiled Lambda cold starts and OpenSearch query plans to identify bottlenecks.  
- Quantified Impact: Provided clear cost & latency metrics.  
- Learning from Failure: Early trials with a single Bedrock endpoint caused 15 % timeout; we added fallback logic and cache, turning the failure into an optimization lesson.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
