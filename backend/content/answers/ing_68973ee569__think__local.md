---
qid: ing_68973ee569__think__local
question: 'Explain: which this should be reserved as well — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 445
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:55:58-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- The user wants an explanation of *why* a “reserved” slot is needed in a parking‑garage design interview (e.g., for special vehicles, VIPs, or future reservations).  
- Assume we’re targeting a large‑scale system (millions of cars, real‑time updates) and that the interviewer cares about trade‑offs: consistency, latency, scalability.  

**2️⃣ Mental model / framework**  
Use the classic *CAP + Scalability* lens plus *resource allocation patterns*:  
- **Consistency** – reservations must be serializable to avoid double‑booking.  
- **Availability** – system should still serve queries even if a reservation service is down (eventual consistency for non‑critical ops).  
- **Partition tolerance** – design across multiple zones or regions.  

**3️⃣ Step‑by‑step reasoning**  
1. Identify the reservation use‑case: pre‑booking, special permits, etc.  
2. Choose data model: a `Reservation` table keyed by parking spot + timestamp; a flag on the spot record.  
3. Decide consistency strategy: optimistic locking (version field) or distributed transaction if strict guarantees are needed.  
4. Think about scaling: sharding by location, using cache for hot spots, background job to clean stale reservations.  
5. Evaluate latency: reservation creation should be < 200 ms; use async acknowledgment for the UI.  

**4️⃣ Common traps**  
- Assuming all reservations can be handled with a single global lock → bottleneck.  
- Over‑engineering consistency (e.g., two‑phase commit) when eventual consistency suffices.  
- Ignoring the “release” path: what if a driver never arrives?  

**5️⃣ Sanity‑check & verbalize**  
Run through edge cases: double booking, concurrent reservations, cancellation. Explain how your design handles each with minimal latency and maximal throughput. End by summarizing trade‑offs you made (e.g., choosing optimistic locking for speed at the cost of occasional retries).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
