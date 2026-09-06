---
qid: ing_00bcaf223c__think__local
question: 'Explain: Database Types — How to Decide Which Type of Database to Use'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 420
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:47:51-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   - What *type* of data will we store? (structured tables, semi‑structured JSON, key/value pairs?)  
   - How many records and what growth rate are expected?  
   - Do we need ACID transactions or can eventual consistency suffice?  
   - Will queries be read‑heavy, write‑heavy, or balanced?  
   - Is horizontal scaling a priority?  

**2. Mental model: “Use the right tool for the job”**  
   - Map data characteristics → database family (relational, document, key/value, graph, time‑series).  
   - Consider operational constraints (deployment, backup, monitoring) and skillset of the team.

**3. Step‑by‑step reasoning**  
   1. **Identify data schema** – If strict relationships & joins are needed → SQL.  
   2. **Determine query patterns** – Heavy ad‑hoc reporting → OLAP/columnar stores; simple lookups → key/value.  
   3. **Assess consistency needs** – Banking → relational; social feed → NoSQL with eventual consistency.  
   4. **Scale & latency goals** – If global read/write, consider distributed document or key/value store.  
   5. **Cost & ecosystem** – Open‑source vs managed services, integration with ML pipelines.

**4. Common traps to avoid**  
   - “NoSQL for everything” mindset; ignore relational power when relationships dominate.  
   - Overlooking transaction requirements in a highly concurrent environment.  
   - Choosing a database solely on price without considering operational overhead.  

**5. Sanity‑check & communicate**  
   - Summarize the trade‑offs (consistency vs availability, scaling vs simplicity).  
   - Present a quick decision matrix: data model → candidate DBs → pros/cons.  
   - Verify with a small prototype or benchmark if uncertainty remains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
