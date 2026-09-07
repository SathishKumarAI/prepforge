---
qid: vq_44b0032cd2__aws__local
question: What are the SQL clauses supported in the link property sheet ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 647
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:52-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Services team at a fintech client, their legacy “link property sheet” only supported basic `SELECT` and `WHERE` clauses. The product owner needed to expose richer analytics—`JOIN`, `GROUP BY`, `ORDER BY`, `HAVING`, and pagination—to power a new dashboard used by 4 K analysts daily. I took ownership of the feature, diving deep into the schema and user stories.

**Action**  
1. **Requirements Clarification** – mapped each clause to an API endpoint and defined validation rules (e.g., max 5 joins).  
2. **Design** – built a serverless layer in AWS Lambda that parses the clause string, validates it against a whitelist, and translates it into a secure Athena query.  
3. **AWS Services** –  
   * **Lambda** for stateless parsing and orchestration (cost‑effective, < $0.20/hr).  
   * **Athena + S3** as the scalable query engine; partitioned data to cut runtime by 70%.  
   * **API Gateway** to expose a REST endpoint with throttling (10 k req/day).  
4. **Scalability & Availability** – Lambda’s concurrency auto‑scales, Athena runs on managed clusters, and S3 offers 99.999% durability.  
5. **Cost Trade‑offs** – switched from Presto to Athena; query cost dropped from $0.25/GB to $0.10/GB while keeping latency < 2 s.

**Result**  
Within two sprints the new clause set was live. Dashboard load time fell 60% (from 8 s to 3 s) and analysts reported a 45% increase in ad‑hoc query success rate. The feature earned a “Customer Obsession” badge for dramatically improving user experience.

---

### Key Takeaways  
* **Ownership** – drove the end‑to‑end solution without hand‑offs.  
* **Dive Deep** – dissected SQL parsing, cost models, and performance metrics.  
* **Quantified Impact** – 60% faster queries, $0.15/GB savings, 45% higher success rate.  

This aligns with Amazon’s Leadership Principles: *Customer Obsession*, *Ownership*, and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
