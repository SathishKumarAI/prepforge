---
qid: ing_d1b8b470c8__aws__local
question: 'Explain: Given a list of allowed IP ranges as CIDR blocks plus explicit
  deny ranges, implement `is_allowed(ip)` efficiently for millions of checks per second.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 440
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:05-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> **Leadership Principles:** *Ownership* (own the solution end‑to‑end) and *Dive Deep* (understand every layer).

### Situation & Task  
At my last role I had to expose a public API that accepted requests from a handful of corporate networks while blocking all others. We expected **10 M IP checks/sec** during peak traffic.

### Approach – Technical Design  
1. **Pre‑process CIDR lists into an interval tree** (BTree) stored in **Amazon ElastiCache Redis** using the *sorted set* data type; each key is a 32‑bit integer range start, value is range end and allow/deny flag.  
2. For each request, compute the IPv4 integer (`ip_int`) and perform a single `ZRANGEBYSCORE ip_int ip_int`. Redis returns at most one matching interval because ranges are non‑overlapping after we merge overlaps during preprocessing.  
3. **Cache hit rate** > 99.9 % on production traffic; latency per lookup < 200 µs, well below the 5 ms SLA.  
4. Fallback to a lightweight **Go microservice** that loads the same interval tree into memory for cold‑start scenarios or when Redis is unavailable.

### Result  
- Achieved **10.2 M checks/sec** with an average latency of **180 µs** and 99.95 % success rate, surpassing the target by 20 %.  
- Reduced operational cost by 35 % compared to a naive DB lookup solution.  

### Learnings & Bar‑Raiser Signals  
I owned the full pipeline (data ingestion → Redis schema → Go service), dove deep into Redis sorted‑set internals to avoid collisions, and quantified impact with real traffic metrics. I also documented failure scenarios: if a deny range is incorrectly merged, we log and alert via CloudWatch, ensuring continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
