---
qid: ing_870c5df3d4__think__local
question: 'Explain: have the exact data we want exact — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 474
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:57:41-05:00'
sources: []
---

**1️⃣ Clarify & Assumptions**  
   * First, ask what “exact data” means: is it precise vehicle location, timestamp, or just occupancy?  
   * Assume the system must support real‑time queries, high write throughput (entry/exit), and scalability for thousands of cars.  

**2️⃣ Mental Model / Framework**  
   * Treat the garage as a **stateful event‑driven system**: each car entry/exit is an event that mutates state.  
   * Break it into layers—**Sensors → Ingest → Storage → API → Analytics**—and decide on consistency guarantees (eventual vs strong).  

**3️⃣ Step‑by‑Step Reasoning**  
   1. **Ingestion**: use edge sensors (RFID, cameras) pushing events to a message bus (Kafka).  
   2. **Processing**: stream processor updates a key‑value store (Redis or DynamoDB) keyed by license plate for instant lookup.  
   3. **Persistence**: write each event to an immutable log (S3/CloudWatch) for audit and replay.  
   4. **API**: expose REST/GraphQL endpoints that read from the KV store; cache hot spots in memory.  
   5. **Analytics**: batch jobs on the event log compute occupancy trends, peak times, etc.  

**4️⃣ Common Traps to Avoid**  
   * Over‑optimizing for consistency—accept eventual consistency for reads if latency matters.  
   * Ignoring fault tolerance: ensure message replay and idempotent writes.  
   * Underestimating data volume—design sharding from day one.  

**5️⃣ Sanity‑Check & Communicate**  
   * Verify each component satisfies **ACID** or **BASE** as required; explain trade‑offs to stakeholders.  
   * Run a quick “what if” scenario: simulate 10× traffic spike and confirm the system stays within SLA.  
   * Summarize the design in a diagram, then walk through a sample entry–exit flow to show how exact data is maintained end‑to‑end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
