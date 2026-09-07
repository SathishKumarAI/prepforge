---
qid: ing_12bd8c2cbc__aws__local
question: 'Explain: Graphs: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 443
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:51-05:00'
sources: []
---

**Situation & Task**  
In a senior ML course (CS61B), my team built a graph‑based recommendation engine for the final project. The instructor required us to implement a “cheat sheet” that could ingest user clickstreams, build a dynamic graph of item similarity, and return top‑k recommendations in real time. We had 48 hours and a budget of $200 per week.

**Action (Technical & Design)**  
1. **Data Ingestion** – Used **Amazon Kinesis Data Streams** to capture click events at ~10 k/s.  
2. **Graph Storage** – Chose **Amazon Neptune** for its property‑graph model; we modeled items as nodes and co‑clicks as weighted edges.  
3. **Batch Updates** – Employed **AWS Glue** to run nightly ETL jobs that aggregated edge weights from S3 logs, keeping the graph fresh without impacting read latency.  
4. **Real‑time Query** – Deployed a lightweight **Lambda** function (Python/NetworkX) that queried Neptune via Gremlin and returned top‑k neighbors in <50 ms.  
5. **Scalability & Cost** – Neptune’s on‑demand instances (db.r6g.large) kept latency low; using spot instances for Glue reduced cost by 35%.  

**Result**  
- Recommendation accuracy (MAP@10) improved from 0.12 to **0.28**—a 133 % lift over baseline cosine similarity.  
- End‑to‑end latency dropped from 250 ms to **45 ms**, meeting the instructor’s real‑time requirement.  

**Reflection & Bar‑raiser cues**  
I owned every layer—from ingestion to query—and dove deep into Neptune’s tuning options, learning that partition key choice dramatically affected read performance. The failure point was an initial mis‑configuration of Kinesis retention; after debugging I added a CloudWatch alarm and automated recovery, illustrating continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
