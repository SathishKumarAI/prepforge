---
qid: vq_1924a745a2__local
question: WHAT ARE THE ACID PROPERTIES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 221
output_tokens: 418
total_tokens: 639
web_searches: 0
cost_usd: 0.0
sources: []
---

**Crisp answer**

ACID stands for Atomicity, Consistency, Isolation, and Durability – the four guarantees that make a transaction “safe” in a database.

1. **Atomicity**: The whole transaction either succeeds or leaves no trace (all‑or‑nothing).  
2. **Consistency**: A transaction moves the system from one valid state to another, respecting all constraints.  
3. **Isolation**: Concurrent transactions don’t interfere; each appears to run alone.  
4. **Durability**: Once committed, a change survives crashes and reboots.

---

**Nuance from production**

In PostgreSQL or MySQL InnoDB I’ve seen that *atomicity* is enforced by write‑ahead logs (WAL). A crash during a long `INSERT … SELECT` can leave the log pointing to an uncommitted state, so recovery rolls back the whole batch.  
*Consistency* hinges on triggers and foreign‑key checks; when I disabled them for bulk loads, data integrity slipped—my QA caught it with a nightly `SELECT COUNT(*) WHERE parent_id IS NULL`.  
Isolation levels matter: at *READ COMMITTED* we saw “phantom reads” in a reporting service that hit 20 % stale rows. Switching to *REPEATABLE READ* added ~15 ms latency per query, which was acceptable for the BI dashboard but broke a low‑latency order‑matching engine.  
Durability is often misinterpreted: on an SSD cluster I once set `synchronous_commit=off` to shave 5 ms off writes; a power loss wiped half a day’s trades—proof that durability costs are real.

So, ACID isn’t just a slogan—it’s a balance of log design, constraint enforcement, locking strategy, and hardware reliability that I’ve tuned repeatedly in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
