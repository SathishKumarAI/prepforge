---
qid: ing_8c50fbe72f__aws__local
question: 'Explain: 📚 Curated Resources'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 449
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:14-05:00'
sources: []
---

**Situation (S)** – I was tasked at my previous role to build a *Curated AI Resources Hub* that would surface the latest research papers, tutorials, and code snippets to data scientists across the org. The goal was to reduce the time spent hunting for relevant content by **70%**.

**Task (T)** – Deliver a self‑service portal that automatically aggregates, tags, and recommends high‑quality AI assets while keeping latency under 2 s for any user query.

**Action (A)** –  
1. *Ownership & Bias for Action*: I scoped the solution as a serverless stack on AWS: **API Gateway + Lambda (Python)** for ingestion pipelines; **S3** for raw PDFs and code, **Athena** over S3 for fast ad‑hoc search; **DynamoDB** to store metadata; **OpenSearch** for full‑text indexing.  
2. *Dive Deep*: I added a nightly Spark job on **EMR** to run semantic similarity (sentence‑transformers) against new documents, storing embeddings in an **Elasticsearch** vector field for advanced recommendation.  
3. *Invent & Simplify*: Instead of building a custom ML model, I leveraged **Amazon Bedrock**’s foundation models to auto‑generate tags and summaries, cutting engineering effort by 40%.  
4. *Deliver Results*: The portal now serves 5,000 daily active users with <1 ms query latency; internal surveys show a **68% reduction** in time spent searching for AI resources.

**Result (R)** – Achieved the target KPI, cut infrastructure costs to $12k/month by using serverless services, and earned a “Customer Obsession” badge from leadership.  

*Bar‑raiser check*: I owned the full stack, dove into embeddings & vector search trade‑offs, quantified impact with real metrics, and iterated after an initial mis‑tagging incident—learning that continuous model monitoring is critical for AI product quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
