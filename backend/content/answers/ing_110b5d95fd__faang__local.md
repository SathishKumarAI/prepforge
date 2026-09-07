---
qid: ing_110b5d95fd__faang__local
question: 'Explain: were optional maybe an email or i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 520
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:29-05:00'
sources: []
---

**Problem Clarification**  
We need to design a *parking‑garage* system that can handle millions of vehicles, support real‑time entry/exit, availability queries, and billing. Key assumptions: unlimited vertical space (multi‑storey), cars are the only vehicle type, we want minimal latency for drivers and backend analytics.

---

### 1️⃣ Approach
1. **Data Model**  
   * `Spot(id, level, status)` – free/occupied.  
   * `Vehicle(reg_no, entry_time, spot_id)` – current parking session.  

2. **Core Services**  
   * **Ingress / Egress Service** – scans RFID/barcode → allocates/deallocates a spot.  
   * **Spot‑Allocator** – greedy algorithm picking nearest free spot per level; fallback to next level if full.  
   * **Billing Service** – on exit, compute rate = `rate_per_hour × ceil(duration)`.

3. **Storage & Caching**  
   * Primary store: **PostgreSQL** for ACID guarantees.  
   * Cache of free spots per level in **Redis** to avoid DB hits; write‑through sync on updates.

4. **Scalability**  
   * Horizontal scaling via stateless API instances behind a load balancer.  
   * Spot‑allocator can be sharded by level (partition key).

---

### 2️⃣ Depth & Complexity
* Allocation: O(1) with Redis list of free spots; DB write is O(log n).  
* Exit billing: O(1) after lookup.  
* Consistency: optimistic locking on spot status to avoid double‑allocation.

---

### 3️⃣ Edge Cases
* **Simultaneous entry** → race condition resolved by atomic `SETNX` in Redis.  
* **Power outage** → fallback to DB state during recovery; rebuild cache from DB at boot.  
* **Vehicle loss** → manual override flag in Vehicle table.

---

### 4️⃣ Optimization & Communication
* Introduce a *spot‑prediction* model (ML) to pre‑allocate spots near exit points, reducing wait time.  
* Use metrics dashboards (Prometheus + Grafana) for latency and occupancy rates.  

By structuring the system around clear data models, stateless services, and caching layers, we achieve low latency, high throughput, and easy maintainability—qualities prized in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
