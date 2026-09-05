---
qid: ing_8f7255b6b0__star__local
question: 'Explain: CNAME (Canonical Name) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:48-05:00'
sources: []
---

**Situation:**  
During a migration of our e‑commerce platform from a legacy hosting provider to AWS Route 53, the marketing team needed to point multiple branded subdomains (shop.example.com, blog.example.com) to new CloudFront distributions without reconfiguring DNS for every change.

**Task:**  
I had to design a scalable DNS strategy that allowed us to swap underlying resources behind each subdomain quickly while keeping SSL certificates and analytics intact. The goal was to reduce downtime to under 30 seconds per domain and avoid manual edits in the UI.

**Action:**  
I introduced CNAME (Canonical Name) records for each branded subdomain, mapping them to short, stable CloudFront distribution aliases (e.g., shop.example.com → d123.cloudfront.net). Using Terraform I scripted these CNAME entries with a TTL of 60 seconds. For internal services that required A/AAAA records, I paired the CNAMEs with Route 53 alias records pointing to ELB load balancers. I also set up health checks and fail‑over routing so that if a CloudFront edge failed, traffic would automatically redirect to an alternate distribution.

**Result:**  
The migration completed in two hours with no reported outages. Subsequent updates—like moving the blog from one CDN to another—required only changing the target of the CNAME record; DNS propagation took ~45 seconds on average. This approach cut our change‑over time by 75% and gave us confidence that future infrastructure shifts could be handled without manual DNS churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
