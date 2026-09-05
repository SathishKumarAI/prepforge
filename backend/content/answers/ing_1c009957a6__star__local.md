---
qid: ing_1c009957a6__star__local
question: 'Explain: Prerequisites — Embed Amazon OpenSearch Service dashboards in
  your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 393
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:25-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we had an internal analytics platform that needed real‑time visibility into transaction fraud patterns. The team was using Amazon OpenSearch Service for log ingestion and Kibana dashboards, but end users could only view them through the OpenSearch console, which required separate credentials and disrupted workflow.

**Task:**  
I was tasked with embedding those OpenSearch dashboards directly inside our React web app so that analysts could see metrics side‑by‑side with their daily reports, without leaving the application or logging in twice. The solution had to respect IAM permissions, be secure, and load quickly under a 5 ms latency SLA.

**Action:**  
I first set up an Amazon Cognito identity pool linked to our existing user directory to provide temporary OpenSearch credentials. Using the OpenSearch Dashboards API, I generated signed URLs for each dashboard panel. In React, I wrapped these panels in iframes with the `sandbox` attribute and passed the signed URLs as `src`. To avoid cross‑origin issues, I updated the OpenSearch cluster’s CORS policy to allow our app’s domain. For performance, I enabled caching on CloudFront in front of the dashboards and added a lightweight loading spinner that timed out after 2 s. Finally, I wrote unit tests with Jest to confirm that only authorized roles could retrieve signed URLs.

**Result:**  
Within two weeks we launched the embedded dashboards; page load times dropped from ~8 s to <1 s for analysts, and adoption rose by 35% compared to the console. Security reviews passed without new IAM changes, and we reduced support tickets related to credential management by 80%. I learned how to leverage OpenSearch’s signed URL feature with Cognito to embed dashboards securely while maintaining performance and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
