---
qid: ing_320091f6ee__faang__local
question: 'Explain: Step 2: Define Core Data & APIs — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 484
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:32-05:00'
sources: []
---

**Step 2 – Define Core Data & APIs (for a ML‑system design interview)**  
*Goal:* Show how you turn a high‑level requirement into concrete data structures and service contracts that can be built, tested, and evolved.

---

### 1️⃣ Clarify  
- **What problem are we solving?** e.g., “We need a real‑time recommendation engine for a streaming platform.”  
- **Key performance metrics:** latency ≤ 200 ms, throughput ≥ 10k req/s.  
- **User & data volume assumptions:** 5 M active users, 10 GB of user logs per day.  

---

### 2️⃣ Approach  
1. List *core entities* (users, items, interactions).  
2. Decide *storage granularity* (raw events → OLTP store; aggregated features → OLAP).  
3. Sketch the **API surface**: ingest (`POST /events`), query (`GET /recommend?user_id=`), model‑update (`PUT /model`).  

---

### 3️⃣ Depth  
- **Data schema:**  
  - `event(user_id, item_id, event_type, timestamp)` → Kafka → Debezium → ClickHouse.  
  - Feature table: `feature(user_id, feature_name, value)` in Redis for fast lookup.  
- **APIs (REST/GRPC):**  
  - `POST /events` – idempotent, async, returns 202.  
  - `GET /recommend` – cache‑enabled, uses user features + item embeddings.  
- **Complexity:** Ingestion O(1) per event; recommendation query O(k log n).  

---

### 4️⃣ Edge Cases  
- **Cold start** → fallback to popularity model.  
- **Data skew** → partitioning by hash of `user_id`.  
- **Schema evolution** → versioned Avro schemas in Kafka.  

---

### 5️⃣ Optimize & Communicate  
Explain trade‑offs: *Kafka* for durability vs. *Redis* for speed; batch training nightly to keep latency low. Conclude with a quick sketch of the API contract and how each component feeds into the next, demonstrating end‑to‑end reasoning that FAANG interviewers love.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
