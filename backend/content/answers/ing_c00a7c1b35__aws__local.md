---
qid: ing_c00a7c1b35__aws__local
question: 'Explain: Using LISTEN / NOTIFY — GitHub - lib/pq: Go PostgreSQL driver
  for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 505
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:14-05:00'
sources: []
---

**Situation (S)**  
While building a real‑time analytics platform for an e‑commerce client, we needed instant alerts when inventory levels fell below threshold. The existing batch job ran every 15 min, causing stale data and lost sales.

**Task (T)**  
Implement a lightweight push mechanism that notifies the Go service immediately after a stock update, without polling PostgreSQL.

**Action (A) – Technical Design**  
I leveraged **PostgreSQL’s LISTEN/NOTIFY** via the `lib/pq` driver.  
1. A trigger on the `products` table fires `NOTIFY inventory_update, payload`.  
2. The Go service opens a long‑lived connection (`sql.Open`) and executes `LISTEN inventory_update`.  
3. Using `pq.Listener`, the app receives the notification in real time, parses the JSON payload, and pushes an event to **Amazon SNS** → **AWS Lambda** → updates the cache in **ElastiCache Redis**.

This chain is fully serverless on the consumer side; only the database connection stays open (≤ 1 MB RAM).  
- **Scalability:** Each notification is a lightweight 256‑byte message; PostgreSQL handles thousands per second.  
- **Availability:** The listener reconnects automatically (`pq.Listener` has exponential backoff).  
- **Cost:** No extra EC2 instances, only the database and Lambda invocations (~$0.20 M per month for 10 M notifications).

**Result (R)**  
Latency dropped from 15 min to < 200 ms, increasing conversion by **18%** in high‑traffic periods. The system handled a peak of **120k notifications/day** with 99.9% uptime.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Faster inventory updates directly improved customer experience.  
- **Ownership & Dive Deep:** I owned the end‑to‑end flow, debugged connection loss patterns, and tuned trigger logic for minimal overhead.  

**Bar‑raiser Takeaway** – Demonstrated ownership by automating a critical real‑time feature, quantified impact with conversion lift, and showed deep understanding of PostgreSQL internals and AWS serverless integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
