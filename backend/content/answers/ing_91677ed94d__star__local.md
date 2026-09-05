---
qid: ing_91677ed94d__star__local
question: 'Explain: Host the HTML code — Embed Amazon OpenSearch Service dashboards
  in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 369
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:38-05:00'
sources: []
---

**Situation:**  
At my previous company we built an internal analytics portal for the marketing team. They needed real‑time insights from our customer segmentation model, but the dashboards were only available in the Amazon OpenSearch Service console and couldn’t be accessed directly from our single‑page app.

**Task:**  
I was tasked with embedding those OpenSearch dashboards into our React application while keeping authentication secure and ensuring minimal load times for a 200‑user base.

**Action:**  
First, I created an IAM role that allowed the application’s EC2 instances to assume permissions for OpenSearch. Using AWS SDK for JavaScript (v3), I fetched temporary credentials via STS and passed them into the OpenSearch Dashboards “embed” URL with `?embed=true`. I wrapped the iframe in a lazy‑load component, adding CSP headers (`frame-ancestors 'self'`) to prevent clickjacking. To improve performance, I enabled the OpenSearch “searchable snapshots” feature so queries hit cold storage instead of hot nodes, cutting query latency from 3 s to under 1 s. Finally, I added a custom OAuth2 flow with Cognito so users logged in once and received a single‑sign‑on token that the iframe validated.

**Result:**  
The marketing team could view dashboards within their existing workflow, reducing report‑generation time by 70%. The portal handled concurrent traffic without spikes, and we saw a 30% drop in support tickets related to dashboard access. I learned how to securely embed managed services while balancing performance trade‑offs between hot and cold nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
