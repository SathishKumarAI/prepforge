---
qid: ing_68973ee569__fp__local
question: 'Explain: which this should be reserved as well — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 419
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:46:54-05:00'
sources: []
---

**Designing a Parking‑Garage Service (Amazon‑style System‑Design Interview)**  

The core problem is *efficiently matching cars to empty spots while guaranteeing data consistency and low latency*.  
1. **State model** – Each spot has an ID, level, size class, and status (`free`, `occupied`). A car record holds its license plate, size, arrival time, and assigned spot.  
2. **Operations** –  
   *`ReserveSpot(car)`* must find the smallest available spot that fits the car in < O(log N).  
   *`CheckIn(car)`* atomically updates the spot’s status to `occupied` and records the timestamp.  
   *`CheckOut(car)`* frees the spot, updates history, and triggers any fee calculation.  

3. **Why it works** –  
   * **Optimisation**: Using a balanced search tree (or skip list) keyed by spot size and availability gives logarithmic allocation time—essential for real‑time service.  
   * **Consistency**: All state changes go through a single transactional log (e.g., DynamoDB with conditional writes) so that concurrent reservations can’t double‑book the same spot.  
   * **Scalability**: Spot data is partitioned by level; each node serves its own cache, reducing contention.  

4. **Non‑obvious insight** – Treat a *spot* as a first‑class “resource” object and expose it via an idempotent RESTful API (`/spots/{id}`). This lets external services (e.g., payment, notification) subscribe to spot events without needing direct knowledge of the garage’s internal layout. It also decouples the UI from the allocation logic, allowing future features like dynamic pricing or valet integration to hook into the same event stream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
