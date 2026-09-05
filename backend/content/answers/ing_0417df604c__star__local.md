---
qid: ing_0417df604c__star__local
question: 'Explain: BigLaw Bench – Retrieval — BigLaw Bench Deep Dive: Retrieval |
  Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 355
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:58-05:00'
sources: []
---

**Situation:**  
At a midsize law firm, our client‑relationship dashboard was pulling stale data from the internal document management system. Every time an attorney searched for precedent cases, they received outdated results because the search index hadn’t been refreshed in over 48 hours—slow to build and costly in terms of server load.

**Task:**  
I needed to redesign the retrieval pipeline so that attorneys could get near‑real‑time case law suggestions while keeping indexing costs under our $5K/month budget.

**Action:**  
I implemented a hybrid approach using Elasticsearch for full‑text search and a lightweight Redis cache keyed by query hash. First, I rewrote the ingestion job in Python to run as an AWS Lambda that triggers on S3 object creation, extracts metadata with Tika, and pushes JSON documents into the index within seconds. For hot queries, the Lambda checks Redis; if present, it returns cached results instantly. If not, it queries Elasticsearch, stores the result set back into Redis for 10 minutes, and serves the attorney. I also added a daily “re‑index” job that runs during off‑peak hours to rebuild shards incrementally, keeping the index lean.

**Result:**  
Query latency dropped from ~12 seconds to <200 ms for 95% of searches, while indexing costs stayed below $4,800/month. Attorneys reported a 30% increase in productivity, and the system now scales seamlessly as new documents are added. I learned that combining real‑time caching with incremental indexing can deliver both speed and cost efficiency in legal tech environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
