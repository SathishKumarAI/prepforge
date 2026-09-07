---
qid: ing_9ddb6d0d66__aws__local
question: 'Explain: Iterative Document Enrichment — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 394
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:49-05:00'
sources: []
---

**Iterative Document Enrichment – Advanced Retrieval Patterns**

**Situation & Task (S)**  
At my previous firm we had a knowledge‑base of 3 M PDFs used by 50k support agents daily. Search latency was >2 s and click‑through rates were only 12 %. I owned the task to boost relevance and speed while keeping costs <15 % of the existing search spend.

**Action (A)**  
I built an *iterative enrichment pipeline* using **Amazon SageMaker** for fine‑tuned BERT embeddings, **AWS Glue** to transform PDFs into searchable chunks, and **Amazon Kendra** as the semantic search layer. Each query triggers a lightweight “contextual re‑rank” step that pulls in the top 20 results, feeds them back into a second‑pass inference model (SageMaker) to surface hidden entities, and updates the Kendra index asynchronously via **Step Functions**. I added an **Amazon CloudWatch Events** rule to monitor latency spikes and automatically spin up additional Kendra replicas on demand.

**Result (R)**  
- Search latency dropped from 2 s to 0.3 s (84 % reduction).  
- Click‑through rose from 12 % to 28 %.  
- Cost increased by only 9 %, staying below the target budget.  

**Learning & Bar‑raiser Focus**  
I practiced *Dive Deep* by profiling every microservice, and *Ownership* by iterating on feedback loops that auto‑tuned embeddings. I documented failure modes (e.g., mis‑ranked entities) and released a post‑mortem with actionable metrics for future teams.

> **Leadership Principles:** Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
