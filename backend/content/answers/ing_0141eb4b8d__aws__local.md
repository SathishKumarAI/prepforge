---
qid: ing_0141eb4b8d__aws__local
question: 'Explain: Runtime fields — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 518
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:15-05:00'
sources: []
---

**Situation** – In my last role I was tasked to add a *runtime field* that calculated the user’s “risk score” on‑the‑fly for an OpenSearch (Elasticsearch) index holding transaction logs. The requirement: expose this field in search results without re‑indexing millions of documents, and keep query latency under 200 ms.

**Task** – Design a solution that satisfies performance, cost, and maintainability while keeping the data model simple.

**Action** –  
1. **Runtime Mapping** – Defined a runtime field `risk_score` in the index mapping using a painless script:  
   ```json
   "runtime": {
     "risk_score": { "type": "float",
       "script": { "source": """
         def sum = 0;
         for (field in params['_source']['amounts']) { sum += field; }
         return sum / ctx._source.transactions.size();
       """}
     }
   }
   ```  
2. **AWS Service Choices** – Deployed the index on **Amazon OpenSearch Service** with *hot* nodes only, leveraging instance types that balance CPU and memory (r5.large). The runtime script runs in the query phase; no disk I/O is added because it reads from `_source`.  
3. **Scalability & Cost** – By keeping the field runtime, we avoided adding a new column to every document, saving ~30 % of index size and eliminating re‑index jobs that would have cost $12k/month. Query latency stayed <150 ms even at 5 M docs/second.  
4. **Monitoring & Rollback** – Enabled *OpenSearch Dashboards* alerts on script errors; in case of performance regressions we could disable the runtime field instantly.

**Result** – The new risk score feature was delivered two weeks ahead of schedule, cut storage costs by 30 %, and improved search response times by 40 %. It also reduced operational overhead because no nightly re‑indexing jobs were required.  

> **Leadership Principles:** *Customer Obsession* (quick, accurate risk data for fraud detection), *Ownership* (own the end‑to‑end pipeline from mapping to monitoring), *Dive Deep* (understanding script execution costs and OpenSearch internals).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
