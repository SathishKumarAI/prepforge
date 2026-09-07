---
qid: ing_217857a0fc__aws__local
question: 'Explain: Cache Key Bugs — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 471
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:59-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of our global e‑commerce catalog delivery. A recurring “cache key bug” in Amazon CloudFront was causing stale product pages to be served, hurting conversion rates (≈ 3 % drop during high‑traffic sales). The goal: eliminate the bug and ensure 99.999 % cache hit accuracy.

**Action**  
1. **Root‑cause dive** – I logged every request path + query string into CloudWatch Logs, then used Athena to correlate mismatched ETag headers with missing cache keys.  
2. **Design fix** – Implemented a deterministic “cache key normalizer” in Lambda@Edge:  
   * Strip irrelevant query params (`utm_*`, `session_id`).  
   * Canonicalize case and sort remaining params.  
   * Append a version hash derived from the S3 object’s last‑modified timestamp.  
3. **Deployment & rollback** – Rolled out via CloudFront distribution “feature flag” (alternate cache policy). Monitored hit ratios with Amazon CloudWatch Metrics; after 48 h hit accuracy rose from 92 % to 99.998 %.  
4. **Cost & scalability** – Lambda@Edge invocations cost ≈ $0.20 per 1M requests, negligible against the $2 M/month saved by reducing origin fetches.

**Result**  
Cache hit accuracy improved to 99.998 %, boosting conversion rates by 1.8 % during a subsequent flash sale (≈ $120K incremental revenue). The incident was documented in our post‑mortem, and I introduced automated cache‑key validation tests in CI/CD to catch regressions early.

**Leadership Principles**  
- **Customer Obsession** – Delivered fresher content, directly improving user experience.  
- **Ownership & Dive Deep** – Took full responsibility for the bug, dissected logs, engineered a robust solution, and built safeguards against future failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
