---
qid: vq_9056a56779__aws__local
question: WHAT IS A SUBQUERY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 721
total_tokens: 949
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:31-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – I explain concepts so the product team can make data‑driven decisions; *Dive Deep* – I unpack the mechanics and trade‑offs.

---

### What is a subquery?

A **subquery** (or nested query) is an SQL statement placed inside another SQL statement, usually within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE`. It lets you compute a value or set of values that the outer query can reference.  

| Outer | Subquery |
|-------|----------|
| **Purpose** | Drives filtering, aggregation, or column selection |
| **Scope** | Runs once per row (correlated) or once for the whole result (non‑correlated) |

---

### Technical example

```sql
-- Find customers who bought more than the average order value
SELECT c.customer_id,
       SUM(o.amount) AS total_spent
FROM   customers c
JOIN   orders o ON o.customer_id = c.id
GROUP BY c.customer_id
HAVING SUM(o.amount) > (
      SELECT AVG(total)
      FROM   (SELECT SUM(amount) AS total
              FROM   orders
              GROUP BY customer_id) t);
```

* **Services used in AWS** – Amazon RDS (PostgreSQL/MySQL), Aurora Serverless for autoscaling, and Athena for ad‑hoc analytics.  
* **Scalability** – Subqueries are evaluated lazily; non‑correlated ones run once per query plan, keeping CPU bounded. Correlated subqueries can hit the 1 M row limit in Athena, so we’d materialize results with a temporary table or use window functions instead.  
* **Availability & Cost** – Using Aurora Serverless reduces idle costs while scaling to thousands of queries/sec; Athena charges per GB scanned, so we add partitioning on `order_date` to cut scans by 80 %.  

---

### STAR – Impact

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Our analytics team needed a quick “high‑spend” customer list. | Build a reusable query that compares each customer’s spend against the overall average. | Implemented the subquery above, added date partitioning and materialized views in Athena to avoid repeated scans. | Query runtime dropped from **12 min** to **45 sec**, saving ~$3/month on compute; team now runs it daily without SLA impact. |

---

### What a bar‑raiser hears

* **Ownership:** I identified the performance bottleneck and fixed it.  
* **Dive Deep:** I dissected correlated vs non‑correlated subqueries, evaluated AWS service trade‑offs, and chose partitioning to reduce scan costs.  
* **Quantified Impact:** 12 min → 45 sec runtime, ~$3/month savings.  
* **Learning from Failure:** Initial plan caused a “too many open cursors” error; I switched to window functions after debugging the execution plan.

---

**Bottom line:** A subquery is a powerful tool for encapsulating logic inside a larger query, but it must be used judiciously—understand its cost profile and leverage AWS services (Aurora, Athena) with proper partitioning or materialized views to keep performance and spend in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
