---
qid: vq_72cb9b6ac7__aws__local
question: WHAT IS A FILTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 531
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:39-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Leadership Principles:** *Ownership* & *Dive Deep*.  
I took full ownership of the data‑modeling problem and dove deep into how SQL engines materialize indexes.

---

### Situation
In a production analytics platform I was asked to improve query latency for a 10 TB fact table. A customer’s dashboards were timing out during peak hours, hurting user satisfaction.

### Task
Design an index that would accelerate the most common filters (`WHERE country = ? AND event_date BETWEEN ? AND ?`) without bloating storage or maintenance costs.

### Action
I explained to the team what a **filtered (partial) index** is:  
- It stores only rows that satisfy a predicate, so it’s smaller than a full index.  
- In PostgreSQL/Redshift this is created with `WHERE <condition>`; in Amazon Aurora MySQL it uses `CREATE INDEX ... WHERE`.  

I proposed the following design:
1. **Predicate:** `country IN ('US', 'CA') AND event_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)`.  
2. **Columns indexed:** `(event_date, user_id)` – the most selective columns for our query patterns.  
3. **AWS services:** Use **Amazon Aurora MySQL** (high‑throughput RDS) and enable *Aurora Serverless* to auto‑scale during traffic spikes.  

I ran a cost‑benefit analysis:  
- Index size shrank from ~4 TB to 200 GB (≈ 95% reduction).  
- Query latency dropped from **12 s → 0.3 s** (40× faster) on the filtered index versus full table scan.  
- Storage costs fell by ~$1,500/month; write amplification increased marginally (< 2%) but acceptable given read‑heavy workload.

### Result
The dashboards now load in under a second for 99% of users, and we reduced RDS storage spend by 25%. The solution also demonstrated *ownership* (I owned the end‑to‑end impact) and *Dive Deep* (I quantified trade‑offs).  

**What a bar‑raiser looks for:**  
- Clear definition of the concept.  
- Concrete metrics showing impact.  
- Awareness of trade‑offs (storage vs write cost).  
- Evidence that I learned from prior index tuning failures (e.g., over‑indexing caused performance regressions) and applied those lessons.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
