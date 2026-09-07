---
qid: ing_0426a6f8eb__faang__local
question: 'Explain: The Recursive Resolver — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 463
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:54:08-05:00'
sources: []
---

**1️⃣ Clarify**

> *What is a “recursive resolver” and how does it enable name resolution in the Internet?*  
Assumptions:  
- The client only knows IPs of recursive resolvers (often ISP‑provided).  
- DNS operates on UDP/TCP, 53.  
- All zones are delegated hierarchically from root → TLD → authoritative servers.

**2️⃣ Approach**

1. Client sends query to resolver.  
2. Resolver checks cache; if miss, it starts a *recursive* walk:  
   - Ask root → get NS for the TLD.  
   - Ask TLD → get NS for the domain.  
   - Ask authoritative → obtain A record.  
3. Resolver returns answer (or NXDOMAIN) to client and caches it.

**3️⃣ Depth**

- **Recursive vs Iterative:** The resolver takes responsibility for following referrals until a final answer is found, hiding complexity from the client.  
- **Caching & TTL:** Each response carries a TTL; resolver stores entries in memory/disk, reducing subsequent round‑trips.  
- **Retries & Failover:** If an NS fails, resolver queries another; it may switch to TCP if UDP truncates.  
- **Security:** Uses DNSSEC validation (if enabled) and can apply EDNS0 for larger packets.

**4️⃣ Edge Cases**

- *Cyclic referrals* → recursion depth limit prevents infinite loops.  
- *NXDOMAIN & NOERROR with empty answer* → resolver must distinguish.  
- *Cache poisoning* → mitigated by DNSSEC, transaction ID checks.  
- *Large responses* → truncated UDP → switch to TCP.

**5️⃣ Optimize & Communicate**

To improve latency: implement parallel queries to multiple root/TLD servers; use a shared cache across resolvers; employ connection reuse (TCP keep‑alive). I would explain the trade‑off between aggressive caching (lower load, stale data) and strict TTLs (freshness). In an interview, I'd highlight how this design scales horizontally—adding more resolvers distributes traffic—and how it aligns with core DNS principles: decentralization, delegation, and redundancy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
