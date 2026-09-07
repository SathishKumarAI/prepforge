---
qid: ing_0a222ea3ec__faang__local
question: 'Explain: Plan for Address Exhaustion — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 499
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:07:54-05:00'
sources: []
---

**Clarify**  
We’re asked how to design a system that prevents *IP address exhaustion* (i.e., running out of IPv4 or even IPv6 blocks) while still allowing high‑traffic services. Key assumptions:  
1. Clients request dynamic IPs for outbound traffic.  
2. We need low latency, high availability, and auditability.  
3. The system must scale to millions of users/day.

**Approach**  
1. **Centralized address pool manager (APM)** – a stateless API that hands out /32 addresses from pre‑allocated subnets.  
2. **Hierarchical allocation** – allocate /24 blocks per data center, then hand out /28s within them.  
3. **Lease‑based lifecycle** – each IP is leased for a short TTL (e.g., 30 min) and refreshed automatically.  
4. **Redundancy & failover** – replicate the APM state in an eventually consistent store (DynamoDB/Spanner).  
5. **Monitoring & throttling** – expose metrics, cap per‑region issuance rate.

**Depth**  
- *Allocation algorithm*: hash(clientID) → /28 within a region; if exhausted, trigger “scale‑out” to acquire new /24 from the master pool.  
- *Complexity*: O(1) lookup for lease renewal, O(log N) when scaling blocks.  
- *Trade‑offs*: Short leases reduce address churn but increase DNS traffic; longer leases ease DNS but risk fragmentation.

**Edge Cases**  
- **Burst traffic**: temporarily allow over‑commitment with a “soft limit” and backpressure queue.  
- **Region failure**: fallback to secondary APM instance; stale IPs are revoked via blacklist.  
- **IPv6 exhaustion**: repeat the same scheme but with larger prefixes (e.g., /64).

**Optimize & Communicate**  
- *Caching*: clients keep their assigned IP in a local store for 24 h to reduce API calls.  
- *Batch allocation*: pre‑fetch blocks for upcoming load spikes.  
- *Explain to stakeholders*: “We’re essentially treating IPs like seats at an event—reserve, use, and return quickly, so we never run out even as demand grows.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
