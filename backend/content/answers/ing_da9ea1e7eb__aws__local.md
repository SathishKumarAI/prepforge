---
qid: ing_da9ea1e7eb__aws__local
question: 'Explain: // Agent Output (3 s) — SQL vs Pandas vs AI Agents: Which Solves
  Analytics Problems Best?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 518
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:42-05:00'
sources: []
---

**Situation:**  
When designing a real‑time sales‑analytics pipeline at my previous company, we had to decide whether to keep using raw SQL on Redshift, move everything to Pandas in EC2, or try an AI‑agent approach that auto‑generates queries from natural language.  

**Task:**  
Deliver a solution that reduces query latency by 60 % while cutting engineering hours per report from 8 hrs to <1 hr.

**Action:**  
I led a cross‑functional squad (data, infra, product) and applied **Customer Obsession** & **Dive Deep**.  

| Approach | Key AWS Services | Scalability | Availability | Cost |
|----------|-----------------|-------------|--------------|------|
| **SQL on Redshift** | Managed cluster, RA3 nodes | Linear with data size | 99.9 % SLA | $0.04/GB‑hour |
| **Pandas on EC2** | Spot instances, EFS | Limited by single node | 99.5 % | $0.10/instance‑hr |
| **AI Agent (Amazon Bedrock + SageMaker)** | Bedrock LLM, Lambda, DynamoDB | Serverless scaling to 10k QPS | 100 % | $0.30/LLM‑call |

We ran a pilot: the AI agent generated SQL for 95 % of queries with <1 s latency and automatically handled aggregations that previously required manual coding. Engineering effort dropped from **8 hrs** to **0.5 hr** per report, a **94 % productivity gain**.

**Result:**  
- Latency fell from 3 s → 0.2 s (90 % reduction).  
- Cost per query decreased by **35 %**.  
- Team adoption rate > 80 %.  

**Lesson Learned:**  
Automated agents excel when the workload is repetitive and can be expressed in natural language; however, they still need human oversight for edge cases—highlighting the importance of **Ownership** in monitoring model drift.

*Bar‑raiser focus:* ownership of the end‑to‑end pipeline, deep dive into performance metrics, quantifiable impact on dev time & cost, and lessons from pilot failures (e.g., mis‑generated joins).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
