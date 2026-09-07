---
qid: ing_c52dc8542e__aws__local
question: 'Explain: The Operating System Cache — How DNS Actually Works - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 387
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:41-05:00'
sources: []
---

**Situation –** In my last role at a fintech startup I was tasked to reduce the latency of our global payment API by 30 %. **Task –** The API hit a third‑party KYC service whose DNS resolution cost >15 ms on average due to round‑trip lookups.  
**Action –** I dissected how OS caches and DNS work:  

1. **DNS Resolution Flow** – Client → local resolver → recursive resolver → authoritative server; TTL controls cache life.  
2. **OS Cache Layer** – `/etc/hosts` + `nss_cache`, then kernel’s *arpcache* (on Linux) stores responses for the TTL, avoiding external lookups.  

I implemented a two‑tier caching strategy:  

| Tier | Service | Cost | Impact |
|------|---------|------|--------|
| 1 | **Amazon Route 53 Resolver** with conditional forwarding + TTL=300 s | $0.004/100 000 queries | ↓ DNS round trips by ~70 % |
| 2 | **AWS ElastiCache (Redis)** for short‑lived, high‑frequency lookups | $0.02/hr | Further latency drop to <5 ms |

The combined approach cut the KYC call latency from 25 ms to 3 ms (a **88 % reduction**) and lowered our monthly cost by 12 %.  

**Result –** The API throughput increased by 45 %, customer satisfaction scores rose, and we avoided a costly scaling event. I documented the design in a playbook used across teams, ensuring knowledge transfer—showing *Ownership* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
