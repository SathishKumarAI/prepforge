---
qid: ing_1c009957a6__faang__local
question: 'Explain: Prerequisites — Embed Amazon OpenSearch Service dashboards in
  your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 462
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:06-05:00'
sources: []
---

**Clarify**  
The question asks how to embed dashboards from **Amazon OpenSearch Service** into a custom web or mobile app, as described on the AWS Big Data blog.  
Assumptions:  
* The user already has an OpenSearch domain with indices and visualizations created in Kibana.  
* You want a lightweight, secure integration that does not expose the OpenSearch endpoint publicly.  

**Approach**  
1. **Create an IAM role** granting `es:ESHttpGet`/`es:ESHttpPost` for the domain.  
2. **Set up a Lambda authorizer** (or API‑Gateway authorizer) to sign requests with SigV4, so only authenticated app users can query OpenSearch.  
3. **Proxy Kibana’s REST endpoints** through an HTTPS API Gateway endpoint that forwards signed requests to the domain.  
4. In the front‑end, embed the Kibana dashboard via an `<iframe>` pointing to the proxied URL (or use the Kibana JavaScript SDK).  

**Depth**  
* IAM policy: `{"Action":"es:*","Resource":"arn:aws:es:<region>:<acct-id>:domain/<dom>/index/*"}`.  
* Lambda authorizer signs request headers (`Authorization`, `X-Amz-Date`).  
* API‑Gateway maps query parameters (`?embed=true`) to Kibana’s `app/kibana` URL.  
* Complexity is O(1) per request; latency added by Lambda (~100 ms).  

**Edge Cases**  
* Cross‑origin issues: set proper CORS headers on API Gateway.  
* Large dashboards may exceed iframe size—use responsive CSS or pagination.  
* If the domain becomes unavailable, fallback to a static snapshot image.  

**Optimize & Communicate**  
Explain that this pattern keeps the OpenSearch endpoint private, leverages existing Kibana visualizations, and scales with AWS services. Highlight trade‑offs: extra Lambda invocations vs. security; consider using CloudFront signed URLs for higher throughput. This structured solution aligns with FAANG expectations of clarity, depth, and pragmatic engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
