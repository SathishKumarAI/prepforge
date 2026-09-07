---
qid: ing_4f17000293__faang__local
question: 'Explain: What is a CDN? Why should we — What Is A CDN? How Does It Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 444
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:26-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of a Content Delivery Network (CDN) and why it matters for ML‑centric services—e.g., serving model artifacts, inference APIs, or large datasets. I’ll assume they’re interested in performance, scalability, and reliability.

**Approach**  
1. Define CDN and its core components.  
2. Explain how CDNs reduce latency via edge caching.  
3. Highlight benefits for ML workloads (model distribution, inference latency, data locality).  

**Depth**  
A **CDN** is a globally distributed network of edge servers that cache content close to users. When a request arrives, the CDN’s DNS routes it to the nearest healthy node, which serves the cached copy or fetches from the origin if stale. For ML, this means:  
- **Model distribution:** Large Torch/PyTorch checkpoints (10–100 GB) can be replicated across edges so that edge inference nodes load them locally instead of pulling from a central bucket each time.  
- **Inference latency:** A user’s request for a prediction is handled by an edge node, often within 20–50 ms, avoiding round‑trip to a distant data center.  
- **Data locality:** Training pipelines can pull training shards from the nearest CDN cache, reducing WAN costs and speeding up pipeline start‑up.  

**Edge cases**  
- Dynamic content (real‑time predictions) cannot be cached; need API gateways with edge compute.  
- Cache invalidation: Updating a model requires purging stale copies—use versioned URLs or signed tokens.  
- Multi‑tenant workloads: Ensure isolation and respect privacy when caching across edges.

**Optimize & communicate**  
I’d suggest using an “origin pull” strategy for initial deployments, then “push” updates via signed manifests to guarantee freshness. For highly dynamic models, consider a hybrid CDN + edge compute (e.g., Cloudflare Workers). I would conclude by summarizing the trade‑off: reduced latency vs. cache miss penalty and extra complexity in invalidation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
