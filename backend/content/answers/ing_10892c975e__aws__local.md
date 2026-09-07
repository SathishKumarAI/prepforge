---
qid: ing_10892c975e__aws__local
question: 'Explain: Enterprise DNA — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 428
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:45-05:00'
sources: []
---

**Situation / Task**  
At a large financial services client we had a fragmented data lake with millions of unstructured documents and a team that needed to surface insights in real time. The business asked for an “AI‑first” layer that could ingest raw text, map it to domain entities, and answer natural‑language queries without building custom models from scratch.

**Action**  
I championed **Enterprise DNA’s Semantic Kernel**—a lightweight framework that lets you wrap any LLM with reusable prompts, memory, and skills.  
* I built a *semantic index* using **Amazon QLDB + OpenSearch** for immutable provenance and fast vector similarity search (FAISS on S3).  
* Leveraged **AWS Bedrock** to host the chosen model (e.g., Anthropic Claude) and wrapped it in Kernel “skills” that translate user intent into structured queries.  
* Implemented a *prompt‑tuning pipeline* with **Amazon SageMaker Pipelines**, retraining every 48 hrs on new data, keeping latency <200 ms per query.  

**Result**  
- Query response time dropped from ~1.5 s to 0.2 s (90% faster).  
- Accuracy of entity extraction rose from 78% to 92%, measured against a hand‑annotated benchmark.  
- Cost per inference fell by 35% thanks to the kernel’s prompt reuse and Bedrock’s pay‑as‑you‑go pricing.

**Reflection**  
I took **Ownership** by owning the full stack, and practiced **Dive Deep** to identify bottlenecks in vector search. The trade‑off was a slightly higher storage cost for S3 vectors, but the ROI in latency and accuracy justified it. I learned that a modular prompt framework dramatically cuts engineering time for future model upgrades—an insight I will bring to any AI‑centric role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
