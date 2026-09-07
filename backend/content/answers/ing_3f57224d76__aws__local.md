---
qid: ing_3f57224d76__aws__local
question: Why some websites are not opening in chrome?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 366
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:02-05:00'
sources: []
---

**Situation / Task**  
I was asked by a product owner why several high‑traffic e‑commerce sites would fail to load in Chrome while working fine in Firefox and Safari.

**Action**  
*Customer Obsession & Dive Deep*: I set up a real‑time monitoring stack (CloudWatch, X-Ray) on the user side and logged every failed request. The first clue was that all failures had `ERR_CERT_DATE_INVALID`.  

I discovered that the sites were serving certificates signed by an internal CA that Chrome flagged as untrusted because it lacked intermediate certs in the chain.  
To fix this I:  
1. Re‑issued the certificates via **AWS Certificate Manager (ACM)** with full chain support.  
2. Updated the ELB listeners to use the new cert and enabled **HTTP/2** for performance.  
3. Added a **CloudFront CDN** fronting the origin to reduce latency and provide edge caching, which also ensured the full cert chain was served from every edge location.

I then ran A/B tests: 90% of users on Chrome saw the site in <200 ms vs 35% before, and bounce rates dropped from 48% to 12%.  

**Result**  
- *Deliver Results*: Achieved a 36‑point lift in conversion for Chrome users within two weeks.  
- *Ownership*: Handled certificate rollout end‑to‑end, coordinated with security and ops teams, and documented the process for future incidents.

*Bar‑raiser takeaway*: Showed deep technical troubleshooting (cert chain), quantified impact on key metrics, and learned to validate SSL chains during CI/CD deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
