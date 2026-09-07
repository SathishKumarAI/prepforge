---
qid: ing_fcedb53385__aws__local
question: 'Explain: A modern CDN could also transform static'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 493
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:58-05:00'
sources: []
---

**Situation (S)**  
In 2023 my team was tasked with deploying a machine‑learning inference layer for a global e‑commerce recommendation engine. The model was ~200 MB and had to serve 10 M requests/day with <50 ms latency. Our existing backend hit traffic spikes during Black Friday, causing cache misses and 2× higher costs.

**Task (T)**  
I proposed using a modern CDN (Amazon CloudFront + Lambda@Edge) not just for static assets but also to offload model inference, reducing origin load by >70% and cutting latency to <30 ms globally.

**Action (A)**  
1. **Architecture** – Stored the frozen model in an S3 “model‑bucket” behind a private CloudFront distribution with edge‑optimized caching.  
2. **Edge Lambda@Edge** – Deployed a lightweight inference runtime (TensorFlow Lite) that pulls the model from a local cache, performs inference on request payloads, and returns predictions.  
3. **Scalability & Availability** – Leveraged CloudFront’s global edge network; autoscaling of origin via API Gateway + Lambda to handle bursts.  
4. **Cost Control** – Enabled S3 Intelligent‑Tiering for the model bucket and used CloudFront cache hit ratio metrics to adjust TTLs, saving ~35 $K/month.

**Result (R)**  
- Latency dropped from 75 ms to 28 ms (average).  
- Origin request volume fell by 73%, cutting compute costs by $48 K/month.  
- The system handled a 150% traffic spike during a flash sale without degradation, meeting SLAs.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered faster, more reliable recommendations, directly improving conversion rates (+12%).  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility for the edge solution and iterated on cache strategy based on real telemetry.  

*Bar‑raiser note:* The candidate shows ownership by re‑architecting a core service, dives deep into CDN mechanics, quantifies impact with clear metrics, and demonstrates learning from prior failures (e.g., earlier attempts that over‑cached and caused stale predictions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
