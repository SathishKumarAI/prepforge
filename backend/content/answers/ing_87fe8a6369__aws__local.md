---
qid: ing_87fe8a6369__aws__local
question: 'Explain: Getting Started — Amazon S3 + Amazon CloudFront: A Match Made
  in the Cloud | Networking & Content Delivery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 461
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:45-05:00'
sources: []
---

**Situation**  
I was tasked to publish a 12‑hour video training set (≈ 200 GB) for a global ML research team while keeping latency < 300 ms for all U.S. users.

**Task**  
Build a highly available, low‑cost delivery pipeline that scales automatically and protects the data from accidental leaks.

**Action**  
1. **Ownership & Customer Obsession** – I scoped the problem as “data scientist’s view” rather than “IT ops.”  
2. **AWS Services** – Uploaded raw files to an *S3* bucket (versioning + MFA‑Delete) and created a *CloudFront* distribution with:
   - Origin Access Identity (OAI) so only CloudFront can read S3
   - `Restrict Viewer Access` enabled, signed URLs for 24 h
   - Edge caching set to 7 days, custom error pages
3. **Dive Deep** – Calculated cost:  
   *S3* storage ≈ $0.023/GB/mo → $4.6/mo;  
   *CloudFront* data transfer (50 TB/month) at $0.085/TB → $4.25/mo;  
   Total <$10/mo vs. on‑prem CDN >$200.
4. **Scalability & Availability** – Leveraged S3’s 99.999% SLA and CloudFront edge locations to auto‑scale with traffic spikes (e.g., during live demos).
5. **Bias for Action** – Deployed IaC in Terraform; automated rollouts via CodePipeline.

**Result**  
Latency dropped from 1.2 s to < 300 ms for 95th percentile U.S. users, and monthly cost decreased by 87%. The team now streams training data globally without any manual intervention, freeing 3 FTEs per week.  

*Bar‑raiser notes*: clear ownership, quantified performance gains, deep dive into cost/latency trade‑offs, and evidence of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
