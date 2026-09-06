---
qid: ing_96c2a34ee0__fp__local
question: 'Explain: Because the Indians are still sending a — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 482
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:26:15-05:00'
sources: []
---

### Why Indian telecoms still ship content through legacy “push‑only” CDNs  

**The core problem** – *latency versus freshness*.  
A user in India wants a video or an app update that arrives < 200 ms, yet the data originates on a global server far away. The simplest fix is to **push** copies of every asset into every edge node (a “pull‑only” CDN). That guarantees low latency but wastes bandwidth and storage, because most content is never requested locally.

**Why the push model persists**  
1. **Predictability**: Indian ISPs operate under heavy traffic spikes during festivals or exam periods. Pushing pre‑cached bundles lets them guarantee throughput without on‑the‑fly cache miss penalties.  
2. **Cost structure**: The cost of a single data transfer over the expensive intercontinental link is higher than storing an object for a day in a local rack. Thus, it pays to *buy* the bandwidth upfront and let edge nodes serve repeat requests locally.  
3. **Regulatory compliance**: Some Indian regulations require that certain content be stored within national borders; push‑only CDNs make this trivial.

**Deeper principle – “exponential decay of demand”**  
Content popularity follows a Zipfian distribution: the top 1 % accounts for ~50 % of requests. By pre‑pushing the most popular items, you capture most traffic with minimal storage. The *optimal* cache size is therefore set by the tail of this distribution, not by raw capacity.

**Non‑obvious insight**  
Even if a CDN could dynamically pull on demand, the *latency of the pull request itself* (DNS lookup + TCP handshake + first byte delay) dominates for low‑volume content. Thus, a hybrid push/pull strategy—push only the top 10 % by Zipf rank, pull the rest—offers the best trade‑off between cost and performance in India’s heterogeneous network landscape.

In short, legacy push‑only CDNs survive because they turn the statistical structure of user demand into a deterministic bandwidth‑cost advantage that is hard to beat with pure on‑demand designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
