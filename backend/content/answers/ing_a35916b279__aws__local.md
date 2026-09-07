---
qid: ing_a35916b279__aws__local
question: 'Explain: MRU (Most Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 483
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:49-05:00'
sources: []
---

**Situation & Task**  
When I was redesigning the recommendation engine for a high‑traffic e‑commerce platform, the cache layer was blowing out during flash sales. The team needed an eviction policy that kept the most valuable items in memory while staying cost‑effective on **Amazon ElastiCache (Redis)**.

**Action – Technical Design**  
I evaluated the *top 8* eviction strategies for Redis:  
1. **LRU** (Least Recently Used) – removes entries least accessed.  
2. **LFU** (Least Frequently Used) – removes entries with lowest hit count.  
3. **TTL** – evicts based on time‑to‑live expiration.  
4. **Volatile-LRU / Volatile-LFU** – same as above but only for keys with expirations.  
5. **Allkeys-LRU / Allkeys-LFU** – apply to all keys regardless of expiry.  
6. **Random** – evicts a random key when memory is full.  
7. **Volatile-TTL** – evicts the key with nearest expiration.  
8. **None** – no eviction; raises OOM errors.

I chose **Allkeys-LRU** because our traffic pattern showed that frequently accessed items (top 10 % of products) dominated revenue, and LRU matched that access profile. I also added a small *TTL* to stale catalog entries to avoid serving outdated data.

**Result – Data‑Driven Impact**  
After deployment:  
- Cache hit rate rose from **68 % → 92 %**.  
- Page latency dropped by **35 ms** per request, translating to ~$12k/month in avoided compute costs on EC2.  
- Incident tickets for cache OOM errors fell to zero.

**Reflection & Learning**  
I *owned* the problem end‑to‑end, performed a deep dive into access logs (Dive Deep), and iterated quickly—demonstrating Bias for Action. The experiment taught me that even simple eviction tweaks can unlock substantial performance gains when aligned with business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
