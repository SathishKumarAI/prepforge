---
qid: ing_90ee9502ae__star__local
question: 'Explain: Clean up — Embed Amazon OpenSearch Service dashboards in your
  application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 334
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:39-05:00'
sources: []
---

**Situation:**  
At my previous company we built an internal analytics portal for the marketing team. The dashboard layer was hosted on Amazon OpenSearch Service, but each user had to log in separately through a public endpoint, which caused friction and compliance concerns.

**Task:**  
I needed to embed the OpenSearch dashboards directly into our secure web application, streamline authentication with SSO, and reduce external exposure while maintaining performance and audit logs.

**Action:**  
First, I used IAM roles and AWS Cognito to create a single‑sign‑on flow that passed temporary credentials to the front‑end. On the backend, I set up an API Gateway endpoint that fetched OpenSearch query results via signed requests. For embedding, I leveraged the OpenSearch Dashboards iframe with a custom CSS overlay, ensuring cross‑origin policies were respected by configuring CSP headers. I also enabled fine‑grained access control in OpenSearch to restrict index visibility per user role, and added CloudWatch metrics for dashboard load times. Finally, I automated the deployment with Terraform, bundling the dashboards as part of our CI/CD pipeline.

**Result:**  
The embedded dashboards reduced login steps by 70%, cutting average user time on analytics pages from 8 min to 2 min. Compliance audits passed without any data leaks, and we saw a 15% increase in daily active users of the portal. I learned how to balance security, performance, and developer experience when integrating managed search services into custom applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
