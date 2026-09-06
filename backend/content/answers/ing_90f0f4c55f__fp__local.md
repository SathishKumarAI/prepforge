---
qid: ing_90f0f4c55f__fp__local
question: 'Explain: System Design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 570
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:25-05:00'
sources: []
---

**Why a “sales‑rank‑by‑category” system is needed**

Online marketplaces expose thousands of SKUs to millions of shoppers.  
A buyer’s first cue is usually *how well an item performs relative to its peers*—the sales rank.  
If the system cannot compute, update and serve these ranks in real time, recommendation engines, search relevance and inventory planning all become stale.

**From the fundamental problem to a scalable design**

1. **Define the metric**:  
   \[
   R_{c,i}(t)=\frac{\sum_{\tau=0}^{T} w(\tau)\,\mathbf{1}\{\text{sale of }i\text{ at }t-\tau\}}{\sum_{\tau=0}^{T} w(\tau)\,\#\text{sales in category }c}
   \]
   *Why*? It normalises by category volume, weights recent sales (exponential decay), and yields a probability‑like score.

2. **Streaming ingestion**:  
   Every transaction → Kafka topic → stateless microservice that emits an “update” event.  
   The statelessness guarantees horizontal scaling; the event stream preserves causality.

3. **Stateful aggregation**:  
   Use Redis Streams or Flink’s keyed state to maintain, per category, a *sliding window* of sales counts and total volume.  
   The window is *time‑decayed*: older entries are mathematically discounted instead of purged, matching the decay function in (1).

4. **Materialised view**:  
   Periodically (e.g., every minute) compute `R_{c,i}` for all items in the category and push into a columnar store (Cassandra / Bigtable).  
   This decouples heavy computation from read latency.

5. **Serving layer**:  
   A low‑latency API reads the pre‑computed rank directly from the store; fallback to on‑the‑fly calculation if missing.  
   Caching (e.g., Memcached) further reduces query time for hot items.

**Non‑obvious insight**

The *decay function* can be tuned as a **Bayesian prior**: older sales are treated as evidence with diminishing weight, while the current window acts as a likelihood term. Thus, the rank is effectively a posterior probability that an item will sell next—linking ranking to probabilistic inference rather than pure counting. This perspective guides hyper‑parameter selection (decay rate) and explains why “flashy” items can temporarily surge without long‑term distortion of ranks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
