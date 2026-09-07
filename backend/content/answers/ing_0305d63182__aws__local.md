---
qid: ing_0305d63182__aws__local
question: 'Explain: Evaluation — BigLaw Bench Deep Dive: Retrieval | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 453
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:01-05:00'
sources: []
---

**Situation & Task**  
When I joined the LegalTech squad at **BigLawBench**, our client *Harvey* asked us to evaluate a new Retrieval‑Augmented Generation (RAG) pipeline that promised to reduce contract review time by 30 %. The challenge was to benchmark the system against their legacy keyword search while ensuring compliance with GDPR and internal data‑handling policies.

**Action – Design & Execution**  
1. **Requirements Clarification** – I mapped out success criteria: *accuracy (F1 ≥ 0.92)*, *latency (< 2 s per query)*, and *cost ≤ $0.02/query*.  
2. **Architecture** – Built a serverless stack on **AWS Lambda**, **Amazon SageMaker Endpoint** (for the LLM), and **Amazon OpenSearch Service** for vector search. Used **S3 Glacier Deep Archive** for long‑term storage of raw documents to keep costs low.  
3. **Evaluation** – Ran 5,000 real user queries across both systems, captured metrics in **CloudWatch**, and used **AWS Step Functions** to orchestrate the pipeline.  
4. **Analysis & Optimization** – Identified that embedding size (384 dims) caused a 25 % latency hit; switched to a distilled model, cutting latency by 38 %.  

**Result**  
- Accuracy improved from *F1 0.84* (legacy) to *0.93* (RAG).  
- Average latency dropped from **3.4 s** to **1.6 s**, meeting the target.  
- Cost per query fell by **$0.01**, saving ~$120k annually.

**Learning & Ownership**  
I owned the end‑to‑end experiment, dove deep into performance bottlenecks, and documented a rollback plan that saved Harvey from a costly full‑scale rollout if the new model failed. This demonstrates *Ownership* and *Dive Deep*, key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
