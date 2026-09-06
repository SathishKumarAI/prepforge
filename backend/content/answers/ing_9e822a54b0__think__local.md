---
qid: ing_9e822a54b0__think__local
question: 'Explain: Active-Active — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 410
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:33:49-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Define “Active‑Active” as a deployment pattern where multiple data centers or nodes simultaneously accept read/write traffic.  
   - Assume the reader knows basic replication and consistency concepts but not the specific trade‑offs of active‑active setups.

**2. Adopt a design framework**  
   - Use the *CAP* and *BASE* lenses: how availability, partition tolerance, consistency, and eventual consistency play out.  
   - Map to common patterns (multi‑region replication, conflict resolution, quorum reads/writes).

**3. Build the reasoning step‑by‑step**  
   1. Explain why single‑active is limited by latency and a single point of failure.  
   2. Show how active‑active spreads writes across sites, improving availability but introducing consistency challenges.  
   3. Detail typical mechanisms: vector clocks, CRDTs, or operational transformation for conflict resolution.  
   4. Illustrate read/write quorums (R+W > N) and their effect on latency/availability.  
   5. Discuss data model constraints (e.g., eventual consistency vs strong consistency).  

**4. Watch out for common traps**  
   - Forgetting that “high availability” doesn’t equal “strong consistency.”  
   - Assuming all conflicts can be automatically resolved without domain logic.  
   - Ignoring network partitions: a failure in one region shouldn’t block writes elsewhere.

**5. Sanity‑check & communicate clearly**  
   - Re‑explain the trade‑offs in plain terms (“you get uptime, but you may read stale data”).  
   - Use a simple diagram or table to contrast single‑active vs active‑active on key metrics (latency, availability, consistency).  
   - End with a quick “when to choose this pattern” checklist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
