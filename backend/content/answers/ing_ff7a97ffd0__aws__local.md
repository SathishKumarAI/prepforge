---
qid: ing_ff7a97ffd0__aws__local
question: 'Explain: Prefix Caching — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 433
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:44-05:00'
sources: []
---

**Prefix Caching – Short‑Term Context**  
*Leadership Principles: Customer Obsession & Dive Deep.*

**Situation / Task**  
At my previous company we launched an AI‑driven recommendation engine that served 3 M requests/day. Each request required a *short‑term context* of the last 10 user actions, which were recomputed on every inference call, causing >30 ms latency spikes and ~12 % CPU waste.

**Action**  
I introduced **Prefix Caching**: a per‑user sliding window stored in an LRU cache (Redis‑compatible) that held the last *N* tokens. I rewrote the inference pipeline to first check the cache; if hit, it appended the new token and forwarded only the delta to the model. The cache was backed by **Amazon ElastiCache for Redis** with auto‑scaling shards.  
- **Design trade‑offs:** We chose a 4 kB key per user (≈50 bytes * 80 actions) → ~240 GB total for 5 M active users, cost ≈$3k/month.  
- **Availability:** Redis cluster with Multi-AZ and cross‑region read replicas ensured <1 ms failover.  
- **Cost vs. performance:** Reduced model calls by 45 %, cutting GPU hours from 180 hrs to 99 hrs/quarter, saving ~$8k.

**Result**  
Latency dropped from 32 ms to 18 ms (46 % faster), and CPU utilization fell 27 %. User satisfaction scores rose 1.4 points on a 5‑point scale.  

**What the bar‑raiser heard** – clear ownership of the bottleneck, deep dive into cache sizing, quantified impact, and a learning loop: we logged cache hit rates and adjusted *N* based on real traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
