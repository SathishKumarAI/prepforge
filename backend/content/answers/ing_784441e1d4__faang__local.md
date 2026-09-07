---
qid: ing_784441e1d4__faang__local
question: 'Explain: So Indians, Chinese, people in Asia can — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 458
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:42-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to design a *simplified* Content Delivery Network (CDN) that efficiently serves video content to users in India, China and the rest of Asia.  
Key assumptions to confirm:  

1. Traffic is bursty (peak at 8 pm local time).  
2. Latency target < 200 ms for 95 % of requests.  
3. Data sovereignty rules require at least one copy inside each country.  
4. Cost optimization is secondary to performance.

**Approach**  

1. **Edge tier** – deploy a small number of edge nodes in major cities (Mumbai, Shanghai, Singapore).  
2. **Regional tier** – a few high‑capacity caches per country that aggregate edge traffic.  
3. **Origin tier** – central storage in the cloud with strong consistency.  
4. Use *consistent hashing* to map content keys to regional caches; fallback to origin on miss.  

**Depth**  

- Edge nodes store only hot segments (e.g., last 24 h of popular videos).  
- Regional caches maintain a sliding window of 48 h and use LRU eviction.  
- Replication factor = 3 across regions for durability.  
- Use HTTP/2 + QUIC to reduce handshake latency.  
- Complexity: cache look‑up O(1); replication O(log N) with consistent hashing.  

**Edge Cases**  

- Sudden surge (e.g., live event): edge nodes auto‑scale via serverless functions.  
- Content update: invalidation tags propagate from origin to all tiers in < 5 s.  
- Network partition: regional cache serves stale data until connectivity restores.

**Optimize & Communicate**  

I’d iterate by adding a *predictive prefetch* model that uses time‑of‑day patterns to load upcoming popular videos into edge caches ahead of the peak window, further reducing latency. I’ll explain trade‑offs (extra storage vs. latency) and justify each design choice in terms of cost, compliance, and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
