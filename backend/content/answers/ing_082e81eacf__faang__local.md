---
qid: ing_082e81eacf__faang__local
question: What Makes DNS Fast and Reliable? — How DNS Actually Works - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 472
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:03:14-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks why the Domain Name System (DNS) can resolve hostnames in milliseconds and stay highly available. I’ll assume we’re talking about the public DNS infrastructure (root servers, TLDs, authoritative zones) and not a local resolver cache.

**2️⃣ Approach**  
Explain the multi‑tiered lookup chain:  
1. **Local resolver / caching stub** → checks OS cache.  
2. **Recursive resolver** → contacts root → TLD → authoritative.  
3. **Caching & redundancy** at each hop, plus parallel queries for failover.

Highlight design patterns: distributed hash tables, aggressive TTLs, Anycast routing, and rate‑limiting.

**3️⃣ Depth**  
- *Speed*: 1–2 round‑trips over UDP (≈20 ms latency) thanks to compact DNS packets (<512 B). Recursive resolvers keep a local cache; most queries hit the cache.  
- *Reliability*: Anycast IPs let multiple servers share a single address, so traffic is load‑balanced and automatically rerouted if one node fails. Root/TLD servers are geographically dispersed with redundant power/links. The use of UDP + fallback to TCP ensures delivery even on packet loss.  
- *Consistency*: TTLs control how long records stay cached; short TTLs for dynamic services, long TTLs for static sites. Negative caching (NSEC/NSEC3) prevents repeated “name not found” lookups.

**4️⃣ Edge Cases**  
- DNS amplification attacks → rate‑limit queries and use EDNS0 cookie.  
- Cache poisoning → DNSSEC validation.  
- Network partitions → Anycast ensures clients still reach a healthy node.

**5️⃣ Optimize & Communicate**  
If I were designing a new resolver, I’d add *vectorized parallel lookups* (query root/TLDs concurrently) and *adaptive caching* that shrinks TTLs under high churn. I would explain these optimizations by comparing expected latency reductions and illustrating with a simple timing diagram. This shows structured thinking, deep technical grasp, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
