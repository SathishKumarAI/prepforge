---
qid: ing_2879596547__faang__local
question: 'Explain: Create an OpenSearch Service domain — Embed Amazon OpenSearch
  Service dashboards in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 537
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:17:31-05:00'
sources: []
---

**Clarify**

You’re asked how to spin up an Amazon OpenSearch Service (OSS) domain and embed its dashboards into a custom web app.  
Assumptions:  
1. The OSS domain will be used for search/analytics on ingested data.  
2. The application is a typical web front‑end (React/Vue/Angular).  
3. You have IAM permissions to create domains, manage security groups, and embed dashboards.

**Approach**

1. **Provision the OSS domain** via CloudFormation or Terraform – set node type, storage, encryption, VPC endpoints, and fine‑grained access control.  
2. **Index data**: use Logstash/Beats or an AWS Lambda that pushes records to the domain’s index endpoint.  
3. **Enable OpenSearch Dashboards** (formerly Kibana) in the domain settings.  
4. **Create a dashboard** inside OSS that visualises your data.  
5. **Embed**: generate a signed URL with `opensearch-embedding` or use the “iframe” approach, passing an OAuth2 token or IAM role‑based signed cookie for authentication.

**Depth**

- *Provisioning*: `AWS::OpenSearchService::Domain` resource; set `EngineVersion`, `ClusterConfig`, `EBSOptions`.  
- *Security*: enable fine‑grained auth, set up Cognito/SSO if needed.  
- *Embedding*: use the `dashboard/embed.html?embed=true&timepicker=false` endpoint, wrap in `<iframe>` with `sandbox="allow-scripts allow-same-origin"`.  
- *Auth*: generate an AWS SigV4 signed URL (`aws-sdk`) that expires after a short period. Complexity: O(1) for provisioning; embedding is constant‑time per request.

**Edge Cases**

- Network isolation: VPC endpoints must allow inbound traffic to the domain.  
- IAM role mismatch can cause 403 errors in the iframe.  
- Large dashboards may time‑out if not optimized; test with different index sizes.  

**Optimize & Communicate**

Explain that you’d monitor domain health via CloudWatch, auto‑scale nodes based on query load, and use Cognito for single‑sign‑on to avoid token leakage. Narrate the flow: “First we create a secure domain… next we push data… finally we expose dashboards securely via signed URLs.” This demonstrates end‑to‑end ownership, scalability, and security awareness—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
