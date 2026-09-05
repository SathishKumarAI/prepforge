---
qid: ing_40cdd13c80__fp__local
question: 'Explain: System Design Mock Interview: Design a Vending Machine'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 479
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:25-05:00'
sources: []
---

**Why the problem matters**

A vending machine is a *real‑time, fault‑tolerant service* that converts user intent (a selection) into physical output (product + change). It must satisfy four invariants:  
1. **Consistency** – inventory and cash balances never diverge.  
2. **Availability** – the UI remains responsive even under load or component failure.  
3. **Isolation** – a transaction’s partial progress cannot be seen by others.  
4. **Durability** – once a sale is confirmed, it survives power loss.

These are exactly the ACID properties of distributed transactions, but at a tiny scale where latency must stay < 1 s.

---

### Core architecture (from first principles)

| Layer | Role | Why this design |
|-------|------|-----------------|
| **Front‑end UI** | Touchscreen + payment reader | Minimal state; all decisions forwarded to the controller. |
| **Controller Service** | Transaction orchestrator | Implements a *state machine* that guarantees linearizable operations: `Reserve → Debit → Dispense`. It uses optimistic locking on an in‑memory cache (Redis) backed by a durable log (Append‑Only). |
| **Inventory Store** | Persistent catalog | SQL table with `product_id, stock, price`; triggers update inventory only after successful dispense. |
| **Cash & Coin Handler** | Hardware abstraction | Exposes idempotent APIs (`insert_coin`, `dispense_change`). The controller treats failures as *rollbacks* by re‑enabling the product and returning inserted coins. |
| **Monitoring / Recovery** | Health checks + watchdog | Detects stalled transactions and performs *compensation* (e.g., restocking, refund). |

---

### Non‑obvious insight

Most designs treat the machine as a single monolith. The real key is to **decouple intent from execution**: let the controller reserve inventory and lock coins *before* any hardware interaction. This turns a potentially non‑idempotent physical operation into an idempotent logical one, enabling graceful recovery without double‑charging or missing stock—exactly what distributed transaction logs guarantee at scale but in micro‑seconds here.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
