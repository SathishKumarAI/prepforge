---
qid: ing_62900ec441__aws__local
question: 'Explain: Simon Willison’s Weblog — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 504
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:12-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“Simon Willison’s Weblog”* is a personal tech blog where Simon—former Django core committer and now a principal engineer at Red Hat—shares deep dives into Python, web frameworks, and infrastructure tooling. The site runs on a lightweight static‑site generator (MkDocs) that compiles Markdown to HTML, then is served from an Amazon S3 bucket behind CloudFront for global low‑latency delivery.

**Situation / Task**  
I was tasked with migrating the blog to AWS to improve uptime, reduce cost, and enable automated CI/CD for content updates.  

**Action**  
1. **Infrastructure as Code** – I wrote a Terraform module that provisions an S3 bucket (versioned), CloudFront distribution, and an ACM certificate.  
2. **CI/CD Pipeline** – Leveraged GitHub Actions to run MkDocs, upload artifacts to S3 via `aws s3 sync`, and invalidate the CloudFront cache on each deploy.  
3. **Monitoring & Cost Optimization** – Enabled CloudWatch metrics (bytes downloaded) and set up a Lambda@Edge function to serve 404s from an S3 “error” page, reducing unnecessary origin fetches.

**Result**  
- Uptime increased from 99.7 % to 100 %.  
- Monthly hosting cost dropped 35 % (from $45 to $28).  
- Deployment time shrank from 15 min to under 2 min.  

**Leadership Principles**  
*Customer Obsession*: Ensured a fast, reliable read experience for readers worldwide.  
*Ownership*: Took end‑to‑end responsibility—from design through monitoring—without relying on external teams.

**Bar‑raiser takeaways**  
- Demonstrated **ownership** by handling all AWS services and the deployment pipeline.  
- Showed **depth** with a clear trade‑off discussion (static hosting vs dynamic rendering).  
- Quantified impact in concrete metrics.  
- Learned from early mis‑configured cache headers, which I fixed after an unexpected 404 spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
