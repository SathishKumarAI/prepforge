---
qid: ing_39b26aafe2__aws__local
question: Glean's ranking leans on a knowledge graph of people, content and activity.
  How would you build that graph, and how does it improve retrieval beyond embedding
  similarity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 357
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:36:59-05:00'
sources: []
---

**Situation & Task (S)**  
At a recent fintech start‑up I was tasked with boosting the relevance of our recommendation engine from 65 % to >80 %. The existing model relied solely on cosine similarity of user embeddings, which ignored real‑world relationships (e.g., co‑authorship, shared events).  

**Action (A)**  
I built a **knowledge graph** in Amazon Neptune, ingesting data from DynamoDB streams and S3 via AWS Glue jobs. Each node represented users, articles, and tags; edges captured interactions (likes, comments) and semantic links derived by an NLP pipeline on SageMaker. For each query I ran a multi‑step traversal that returned “social proximity” scores, then combined them with embedding similarity in a Lambda‑driven ranking layer.  

**Result (R)**  
Within 4 weeks the click‑through rate rose from **65 % to 83 %** (+18 pp), and dwell time increased by **22 %**. Cost per query dropped 12 % because graph traversal is sub‑millisecond for our 5M node set, thanks to Neptune’s partitioned cluster.  

**Learning (L)**  
I learned that embedding similarity alone misses context; a hybrid graph + vector model delivers measurable business value.

> **Leadership Principles:** *Customer Obsession* – improving user relevance; *Dive Deep* – architecting and tuning the graph pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
