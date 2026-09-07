---
qid: ing_03f91e639f__faang__local
question: 'Explain: Disadvantage(s): DNS — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 518
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:33-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for the major drawbacks of the Domain Name System (DNS) when designing large‑scale distributed services such as those described in *system-design-primer*. I’ll assume they want operational, scalability and security concerns that a production engineer must mitigate.

**Approach**  
1. List key pain points: latency, cache invalidation, consistency, fault tolerance, and security.  
2. For each point explain why it matters at scale and give typical mitigation patterns.  

**Depth**  
- **Latency & propagation delay** – DNS lookups involve round‑trips to root/authoritative servers; TTLs can be long (minutes–hours), causing stale routing during rapid scaling or failover.  
- **Cache invalidation & consistency** – Short TTLs reduce cache hit rates; long TTLs risk serving outdated IPs after a pod restart or traffic shift.  
- **Fault tolerance & single points of failure** – A misconfigured authoritative zone can bring down all clients; recursive resolvers may become bottlenecks under load spikes.  
- **Security (DNS‑SEC, spoofing)** – Without DNS‑SEC, attackers can poison caches; the public nature of DNS makes it a target for amplification DDoS attacks.  
- **Operational complexity** – Managing multiple zones, subdomains, and dynamic IPs in Kubernetes or serverless environments adds administrative overhead.

**Edge cases**  
- Sudden traffic spikes (e.g., launch events) can overwhelm recursive resolvers.  
- Zone transfers fail due to network partitions, leaving replicas stale.  
- Malicious NXDOMAIN responses causing “silent” outages.

**Optimize & communicate**  
To mitigate: use low‑TTL records for auto‑scaling groups, deploy multiple authoritative servers (geo‑redundancy), enable DNS‑SEC, and monitor query latency with a dedicated metrics pipeline. When explaining this in an interview, I’d walk through a real‑world scenario (e.g., rolling out a new API version) to illustrate how each disadvantage manifests and the trade‑offs of common countermeasures. This demonstrates structured thinking, depth, and practical design insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
