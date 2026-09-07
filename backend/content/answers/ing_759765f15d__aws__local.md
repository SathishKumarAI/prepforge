---
qid: ing_759765f15d__aws__local
question: 'Explain: Hey everyone! Today we are going to — System Design: Content Delivery
  Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 648
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:53-05:00'
sources: []
---

**Behavioral – Customer Obsession & Ownership**

*Situation:* At my previous firm we launched a video‑on‑demand platform that saw a 30 % spike in traffic during the launch of a new series.  
*Task:* I had to architect a CDN‑like layer so our users would experience sub‑300 ms latency worldwide without breaking the existing backend.  
*Action:* I mapped user geographies, identified edge locations where latency was highest, and deployed **Amazon CloudFront** with custom cache behaviors for video chunks (HTTP/2 + GZIP). I added **AWS WAF** to mitigate DDoS spikes and set up **Lambda@Edge** to rewrite URLs on the fly.  
*Result:* Within 48 h we reduced average latency from 1.4 s to 0.27 s, boosted cache hit ratio from 45 % to 82 %, and cut origin fetches by 65 %. Monthly costs fell from $12K to $8.5K, saving 30 % while keeping 99.999 % availability.

---

**Technical – System Design**

1. **Requirements Clarification**
   * Low latency (<300 ms) for static assets (images, CSS, JS).
   * Dynamic video streaming with adaptive bitrate.
   * Global reach: North America, EMEA, APAC.
   * Resilience to traffic spikes and DDoS.

2. **Proposed Design**
   * **Amazon CloudFront** as the edge layer; cache policies per content type.
   * Origin: **S3** (immutable assets) + **Elastic Load Balancer → EC2 Auto Scaling** for dynamic API endpoints.
   * **Lambda@Edge** to personalize responses and enforce security headers.
   * **AWS WAF** with rate‑based rules at the edge to block malicious traffic.
   * **Amazon Route 53** latency‑based routing to select nearest CloudFront origin.

3. **Scalability & Availability**
   * Auto‑scaling groups handle 10× baseline traffic; CloudFront scales globally automatically.
   * Multi‑AZ deployments for origins ensure high availability.
   * TTLs tuned per content type: short for dynamic, long for static.

4. **Cost & Trade‑offs**
   * Pay‑per‑request CDN pricing (~$0.085/GB) vs. running a global fleet of edge servers.
   * Slightly higher first‑time setup but lower operational overhead.
   * Trade‑off between cache hit ratio and freshness: we use versioned URLs for immutable assets.

**Bar‑raiser Takeaway:**  
- Demonstrated **ownership** by leading the end‑to‑end CDN rollout.  
- Showed **dive deep** through metrics (latency, cache hits, cost).  
- Learned from a failed initial attempt that over‑caching static content caused stale data; resolved with versioned URLs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
