---
qid: ing_d95a9cfefa__aws__local
question: 'Explain: Choosing a Strategy — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 448
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:31-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to redesign the inference pipeline for our recommendation engine (≈ 10M users, 5 k model variants). The latency dropped from **350 ms** to **80 ms** while keeping cost < 20 % of the previous spend.  

**Action** – *Customer Obsession & Ownership*  
1. **Profile**: Measured per‑request cache hit ratios and model warm‑up times with CloudWatch metrics.  
2. **Strategy** – Adopt a **two‑tier caching** approach:  
   - **Edge layer** (CloudFront + Lambda@Edge) for *static feature bundles* (≈ 200 KB).  
   - **In‑memory layer** (Amazon ElastiCache Redis) for *dynamic model outputs*, keyed by `(user_id, model_version)`.  
3. **Eviction policy**: LRU with TTL ≈ 10 min to balance freshness vs. hit rate.  
4. **Cost/scale trade‑off**: Provisioned 2× read replicas; auto‑scaling based on CloudWatch `CacheHits` → cost saved 18 % versus a single large node.  

**Result** – *Deliver Results & Bias for Action*  
- Hit ratio rose from **42 %** to **88 %**, reducing average latency by **77 %**.  
- CPU usage on SageMaker endpoints fell from **92 %** to **35 %**, freeing capacity for new experiments.  

**Learnings** – *Dive Deep & Bar‑Raiser Lens*  
I iterated the TTL after observing a spike in stale data; adjusted to 8 min, which improved accuracy by **1.2 %**. The design now supports graceful degradation: if Redis fails, CloudFront serves cached features, ensuring continuous service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
