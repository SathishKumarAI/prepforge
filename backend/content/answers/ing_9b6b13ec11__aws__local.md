---
qid: ing_9b6b13ec11__aws__local
question: When to implement RAW query in hibernate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 486
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:38-05:00'
sources: []
---

**When to hit the database directly instead of letting Hibernate do its magic?**

> **Situation (S):** In a high‑traffic e‑commerce platform we had a “top‑selling products” report that ran nightly on an Amazon Aurora cluster. The ORM layer was pulling 200 k rows via JPQL, hitting the query planner every time and costing us ~30 s per run—our SLA was 10 s.

> **Task (T):** Reduce runtime to < 5 s while keeping maintainability and cost under control.

> **Action (A):**
> 1. *Dive Deep* into the generated SQL: it performed a Cartesian join on three tables, each with > 50 k rows.  
> 2. Rewrote the logic as a single native query using `LIMIT`/`OFFSET`, window functions, and an index on `(sales_date, product_id)`.  
> 3. Offloaded the heavy aggregation to an **Aurora Serverless** cluster (auto‑scales from 0–256 ACUs), so we paid only for compute when the report ran.  
> 4. Wrapped the query in a Spring `@Transactional(readOnly = true)` service, exposing the result via a REST endpoint that caches responses in ElastiCache Redis for 5 min.

> **Result (R):** Query time dropped from 30 s to 3.2 s—a 90 % reduction—while we cut nightly compute costs by ~70 %. The change was fully automated, version‑controlled, and required no ORM changes elsewhere.

**Leadership Principles:**  
- **Customer Obsession**: Delivering a faster report improves the internal “product analytics” team’s experience.  
- **Ownership** & **Bias for Action**: Took ownership of the bottleneck, engineered a scalable solution quickly.  

**Bar‑raiser cues:** Look for evidence of deep technical dive, quantifiable impact, and learning from the initial ORM‑driven approach (e.g., profiling data).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
