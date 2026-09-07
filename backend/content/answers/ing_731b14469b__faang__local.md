---
qid: ing_731b14469b__faang__local
question: 'Explain: Common Use Cases — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 462
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:39-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked to explain how a CDN can be designed as a machine‑learning system that optimizes content delivery. Assume we have a global set of edge servers, user requests, and dynamic content (images, videos). We need to predict the best edge for each request and adjust caching policies in real time.

**2️⃣ Approach**  
* • Data collection: logs of latency, bandwidth, cache hit/miss, geo‑location.  
* • Feature engineering: time‑of‑day, user device type, content popularity trend, network health.  
* • Model training: a supervised regression or ranking model (e.g., XGBoost) predicting expected delivery cost per edge; optionally a reinforcement‑learning policy for cache replacement.  
* • Deployment: serve predictions via gRPC to edge routers; use online learning to update weights every few minutes.

**3️⃣ Depth**  
- **Latency predictor**: \( \hat{L}_{e} = w_0 + w^T x_{e} \) where \(x_e\) contains network metrics.  
- **Cache policy**: RL agent chooses which objects to evict; reward = reduction in average latency.  
- Complexity: inference O(d) per request (d ≈ 20 features). Training batch size 10k, 1‑hour window → ~O(n log n).  
- Trade‑offs: heavier models give marginal latency gains but increase CPU on edge nodes.

**4️⃣ Edge Cases**  
- Sudden traffic spikes (flash crowds): fallback to static routing.  
- Cold start for new content: use popularity priors.  
- Network partition: degrade gracefully by using stale predictions.

**5️⃣ Optimize & Communicate**  
Start with a simple linear model, then iterate to tree‑based or deep nets if >2 % latency improvement is needed. Explain each iteration’s impact on accuracy vs. latency overhead. Emphasize that the system must be explainable: log feature importance for ops debugging. This structured plan demonstrates clear problem framing, solid ML design, and practical deployment concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
