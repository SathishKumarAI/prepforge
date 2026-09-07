---
qid: ing_6db36a65e3__aws__local
question: 'Explain: Current Pain Points — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 405
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:34-05:00'
sources: []
---

**Situation / Task**  
In 2024 I led a cross‑functional team to launch an internal “Enterprise Retrieval‑Augmented Generation” (RAG) platform for our finance division. The goal was to let analysts pull up‑to‑date policy docs and audit logs while GPT‑style assistants drafted compliance reports.

**Action**  
*Customer Obsession & Ownership*: I mapped pain points from 120+ analyst interviews—slow query times (>10 s), data silos, and lack of audit trails.  
I designed a **Serverless RAG pipeline**:  
- **Amazon Kendra** indexes PDFs + DynamoDB tables (real‑time sync).  
- **Lambda@Edge** rewrites queries for *semantic search* with SageMaker‑built embeddings.  
- **Step Functions** orchestrate retrieval → generation → post‑processing, ensuring idempotency and audit logs in CloudTrail.  
I introduced a **token‑budget guardrail** to cap GPT calls at 1 M tokens/month per user, keeping costs <$2k/month.

**Result**  
*Dive Deep & Deliver Results*: After rollout, query latency dropped from 10 s to 300 ms (97% improvement). Report turnaround time cut by **42 %**, and compliance audit scores rose from 78/100 to 94/100. The cost‑per‑query fell 85%, staying under the budget target.  

**Learnings**  
I discovered that a single monolithic Lambda caused cold‑starts; refactoring into micro‑services with provisioned concurrency eliminated that bottleneck—an example of *Bias for Action* and *Invent & Simplify*. The bar‑raiser will note my ownership, data‑driven impact, deep dive into AWS services, and iterative learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
