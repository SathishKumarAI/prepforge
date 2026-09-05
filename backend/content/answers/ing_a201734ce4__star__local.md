---
qid: ing_a201734ce4__star__local
question: 'Explain: Fine-grained authorization — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 346
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:40-05:00'
sources: []
---

**Situation**  
At my previous company we launched a multi‑tenant SaaS platform for healthcare providers. After a data breach incident, the security team demanded that every API call be checked against fine‑grained policies before granting access.

**Task**  
I was tasked with designing and implementing a cloud‑native authorization layer that enforced the five laws of fine‑granular control: *least privilege*, *separation of duties*, *contextual trust*, *policy isolation*, and *auditability*—all while keeping latency under 30 ms per request.

**Action**  
I chose Open Policy Agent (OPA) as a sidecar, integrated it with Envoy for service‑mesh routing, and wrote Rego policies that referenced user attributes, tenant IDs, time of day, and device trust scores. To satisfy separation of duties, I split read/write permissions across distinct policy bundles per microservice. Contextual trust was implemented by ingesting real‑time MFA status from an identity provider via JWT claims. Policy isolation came from using a separate Redis cache for each tenant’s policies, preventing cross‑tenant leakage. Finally, I wired OPA logs to Elasticsearch and Kibana for immutable audit trails.

**Result**  
The new system cut unauthorized access attempts by 92 % in the first month, reduced average authorization latency to 18 ms, and earned a penetration‑test grade of “A”. The exercise taught me how to balance strict security principles with performance constraints in a cloud‑native stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
