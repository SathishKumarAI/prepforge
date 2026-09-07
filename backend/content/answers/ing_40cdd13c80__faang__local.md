---
qid: ing_40cdd13c80__faang__local
question: 'Explain: System Design Mock Interview: Design a Vending Machine'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 447
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:46-05:00'
sources: []
---

**Clarify**  
We need a vending‑machine system that can handle inventory, payments (coins, cards, mobile), UI, and analytics. Assume we’re building for a large campus with ~10k users/day, high availability, and future expansion to new product lines.

**Approach**  
1. **Front‑end** – touch screen + barcode scanner.  
2. **Transaction service** – state machine: `Idle → Selecting → Paying → Dispensing`.  
3. **Inventory & pricing DB** – sharded by product aisle for fast lookups.  
4. **Payment gateway** – plug‑in architecture (coin, NFC, credit).  
5. **Analytics collector** – event stream to Kafka → real‑time dashboards.

**Depth**  
- *State machine*: stored in Redis for quick read/write; fallback to PostgreSQL on restart.  
- *Inventory*: each product row has `stock`, `price`, `last_replenished`. Atomic decrement via `SELECT … FOR UPDATE` or optimistic lock.  
- *Payments*: use a 3‑party SDK with callbacks; if failure, rollback inventory.  
- *Scalability*: horizontally scale transaction service behind a load balancer; each machine reports to a central dispatcher.  
- *Latency*: aim for <200 ms per transaction; caching reduces DB roundtrips.

**Edge Cases**  
- Coin jam → machine locks and triggers maintenance alert.  
- Simultaneous requests for same product → optimistic lock + retry.  
- Payment timeout → refund inventory.  
- Power loss during dispensing → rollback or safe‑release mechanism.

**Optimize & Communicate**  
We can introduce a predictive restock engine using ML on purchase patterns, reducing downtime. In interviews, I’d highlight trade‑offs: strong consistency vs. availability (CAP), and explain why Redis + PostgreSQL gives us both speed and durability. This structured narrative demonstrates clear problem framing, technical depth, and forward‑thinking optimization—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
