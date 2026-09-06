---
qid: ing_54b7b59bf0__fp__local
question: 'Explain: Promoted Tweets Analytics — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 429
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:04:58-05:00'
sources: []
---

**Promoted‑Tweet Hit Counter Design – From First Principles**

When a platform pays for visibility, it must prove that the money earned a *real* reach. The underlying problem is **estimating exposure in a streaming, high‑volume environment with minimal bias**.  

1. **Event Capture**  
   Every render of a promoted tweet generates a low‑latency event (`render_id`, `user_id`, `timestamp`). These events are sharded by hash(`render_id`) to guarantee *linear* ingestion; no single node can become a bottleneck.

2. **Uniqueness & Duplicates**  
   A user may see the same tweet multiple times in quick succession (carousel, refresh). We must count *unique impressions*, not raw hits. By maintaining a Bloom filter per shard with a 0.1 % false‑positive rate, we can discard duplicates on‑the‑fly while keeping memory under control.

3. **Time‑Window Aggregation**  
   The revenue model is time‑sensitive (e.g., CPM over the last 30 days). A *time‑bucketed counter* (5‑minute windows) permits sliding‑window aggregation with constant‑time updates and O(1) memory per bucket.

4. **Probabilistic Sampling for Scale**  
   When traffic exceeds 10⁶ renders/sec, we sample every Nth event. The sample rate is dynamically adjusted to keep the variance below a target (≈ 2 %). Confidence intervals are computed via Poisson statistics, guaranteeing that reported metrics stay within ±0.5 % of true values.

### Non‑obvious Insight
**Sampling *before* deduplication reduces false positives dramatically.**  
If we sample first, Bloom filters see fewer entries, thus their collision probability drops quadratically with the sample rate. This two‑stage pipeline preserves accuracy while keeping per‑event processing light—critical for real‑time billing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
