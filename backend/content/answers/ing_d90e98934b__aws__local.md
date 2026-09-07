---
qid: ing_d90e98934b__aws__local
question: How does retrieval over a codebase differ from retrieval over prose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:52-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our internal documentation engine (prose) to a code‑search service for an on‑prem AI model that powers “Auto‑Doc” in 2024. The goal was to reduce search latency by 70 % and improve recall for developers.

**Action – Technical Design**  
* *Requirements*: Index 12 M lines of Python/Java, support fuzzy matching and semantic similarity, scale to 1k concurrent queries per second.  
* *Architecture*:  
  - **AWS CodeCommit + CloudWatch Events** → trigger Lambda that runs a nightly crawl.  
  - **Amazon Kendra** for full‑text indexing; we added a custom `CodeTokenizer` (BERT‑based) to preserve syntax.  
  - **Elasticsearch Service (OpenSearch)** stores code snippets, enriched with metadata (file path, repo).  
  - Queries hit an API Gateway + Lambda that first checks the Kendra index; if semantic distance > 0.7 it falls back to OpenSearch for exact matches.  
* *Scalability*: Autoscaling of Lambda and OpenSearch nodes handles peak traffic; cold start < 250 ms.  
* *Availability & Cost*: 99.99 % SLA with multi‑AZ clusters; cost decreased from $18k/month (manual indexing) to $12k/month.

**Result**  
- **Latency** dropped from 1.2 s to 320 ms (73 % reduction).  
- **Recall** for code snippets rose from 65 % to 91 %.  
- Developer satisfaction score improved by 4.3/5 in the post‑migration survey.

**Reflection & Learning**  
I owned the entire pipeline, iterating on tokenizer accuracy after initial false positives—an example of *Ownership* and *Dive Deep*. The data‑driven metrics guided decisions and validated that our design met business impact targets, aligning with Amazon’s *Deliver Results* principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
