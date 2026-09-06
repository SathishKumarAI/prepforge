---
qid: ing_03f91e639f__think__local
question: 'Explain: Disadvantage(s): DNS — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 577
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:00:06-05:00'
sources: []
---

**1️⃣ Clarify & state assumptions**  
- Assume the student wants to critique *DNS* (Domain Name System) as a component in large‑scale, high‑availability systems.  
- Clarify that “disadvantages” refer to operational risks, scalability limits, and security concerns, not the basic function of name resolution.

**2️⃣ Adopt a design‑review mental model**  
Use the classic **“five dimensions”** of system design:  
1. *Reliability* (failures, single points)  
2. *Scalability* (load handling, sharding)  
3. *Performance* (latency, cache hit ratios)  
4. *Security* (spoofing, DDoS)  
5. *Operational complexity* (updates, monitoring)

**3️⃣ Step‑by‑step reasoning**  

| Dimension | DNS disadvantage | Why it matters |
|-----------|------------------|----------------|
| Reliability | Recursive resolvers can become bottlenecks; authoritative zones may have a single outage point. | A downed resolver breaks all name lookups for the whole service. |
| Scalability | Zone data grows linearly; large zones strain memory and CPU on servers. | Exponential growth of records (e.g., micro‑services) strains cache & query throughput. |
| Performance | DNS round‑trip adds ~50–100 ms; MTU fragmentation can drop packets. | Latency compounds in multi‑hop architectures, hurting SLAs. |
| Security | Cache poisoning, DNS amplification attacks, lack of authentication for records. | Compromise leads to traffic hijacking or DoS. |
| Ops Complexity | Zone file maintenance, TTL tuning, dealing with stale data, versioning zones across regions. | Manual ops errors cause outages; automation is hard due to legacy tooling. |

**4️⃣ Common traps & how to avoid them**  
- *Assuming DNS is “just a lookup”* → ignore propagation delays and cache invalidation issues.  
- *Over‑optimizing for speed* → neglect TTL trade‑offs that affect consistency.  
- *Neglecting regional replication* → single authoritative zone can become a global bottleneck.

**5️⃣ Sanity‑check & verbalize**  
- Re‑run the table in your head: “If I were to design an internal service mesh, would DNS be the bottleneck?”  
- Summarize: “DNS is indispensable but introduces latency, scalability limits, and security risks that must be mitigated with caching layers, sharding zones, short TTLs, and DNSSEC.”  

Use this structure to explain disadvantages in interviews or study notes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
