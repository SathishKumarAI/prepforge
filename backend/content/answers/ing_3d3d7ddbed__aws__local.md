---
qid: ing_3d3d7ddbed__aws__local
question: 'Explain: so this is at an edit distance — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 455
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:11-05:00'
sources: []
---

**Situation & Task**  
During a design interview I was asked to model a system that stores user‑generated text snippets and must support fast “edit‑distance” queries (e.g., find all sentences within Levenshtein distance ≤ 2 of a query). The goal was to pick the right database, schema, and indexing strategy.

**Action**  
* **Ownership & Bias for Action:** I scoped the problem to 10 M snippets, 1 k queries/sec, < 5 ms latency.  
* **Dive Deep into Requirements:** Needed *exact* edit distance (not Jaccard), strong write consistency, and horizontal scalability.  
* **Design Choices:**  
  * **Primary store – Amazon Aurora PostgreSQL** for ACID writes and rich text support.  
  * **Secondary index – Amazon OpenSearch Service** with a custom _n‑gram analyzer_ (3‑grams) to approximate edit distance via fuzzy queries (`fuzzy` + `max_expansions=50`).  
  * **Data Flow:** Every write triggers an async Lambda that updates the OpenSearch index.  
* **Scalability & Availability:** Aurora Serverless v2 handles bursty writes; OpenSearch uses multi‑AZ with auto‑scaling domain nodes (minimum 3).  
* **Cost & Trade‑offs:** Dual storage adds ~30 % overhead, but query latency stays < 4 ms and cost per query is <$0.00001, well below the $1M target.

**Result**  
Implemented prototype; measured *95 %* of edit‑distance queries served in < 3 ms at 2k QPS. After load testing with 20 k QPS, latency stayed under 5 ms and no outages were observed.  

**Learning & Bar‑raiser Insight**  
I validated the fuzzy‑search trade‑off (approximation vs. exactness) by comparing to a brute‑force Postgres `levenshtein` function—our approach was ~200× faster with < 1 % false positives. I documented this analysis, showing ownership and depth that bar‑raisers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
