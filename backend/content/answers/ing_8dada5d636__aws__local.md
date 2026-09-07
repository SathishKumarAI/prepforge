---
qid: ing_8dada5d636__aws__local
question: 'Explain: Stale Content — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 403
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:10-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of our media‑delivery platform after a spike in “stale content” complaints—visitors were seeing 30 % older videos because our CDN cache had not refreshed on schedule. The goal was to cut stale‑content incidents from 30 % to <2 % while keeping latency under 120 ms globally.

**Action**  
I owned the end‑to‑end solution, starting with a *Dive Deep* audit of CloudFront + S3. I introduced **Lambda@Edge** to inject cache‑control headers based on an “asset‑version” query param stored in DynamoDB. Every content push writes a new version ID to DynamoDB and triggers a **CloudWatch Events** rule that invalidates the old object path across all edge caches (≈ 300 GB of data).  
For resilience I added **S3 Intelligent-Tiering** for archival assets, and **Route 53 latency routing** to pick the nearest CloudFront origin. Cost was reduced by 15 % because we avoided unnecessary full‑origin invalidations.

**Result**  
Within two weeks after deployment, stale‑content incidents dropped to 0.8 %. Page load times improved from 180 ms to 110 ms on average, and CDN hit ratio increased from 70 % to 93 %. The cost impact was a net saving of $12K/month.

**Reflection (Bar‑raiser)**  
I learned that a single cache‑invalidation strategy can solve a multi‑region performance problem. I documented the failure mode in an internal post‑mortem, shared the versioning pattern with all teams, and set up automated alerts for future anomalies—showing true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
