---
qid: ing_c17b4469ca__star__local
question: 'Explain: Private IPv4 Addresses — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 388
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:43-05:00'
sources: []
---

**Situation**  
I was leading the infrastructure redesign for a real‑time fraud detection platform that served millions of transaction streams per day. The existing architecture used public IPs for every microservice instance, which blew our cloud bill and exposed us to unnecessary egress traffic.

**Task**  
Re‑architect the service mesh so that all internal communication runs over private IPv4 addresses while still allowing secure, high‑throughput data flow between the ingestion layer, feature store, model inference pods, and the alerting dashboard. I had to maintain sub‑100 ms latency and guarantee zero downtime during migration.

**Action**  
I introduced a VPC‑native Kubernetes cluster with Calico CNI for network policy enforcement. Each namespace was assigned a unique /24 subnet (e.g., 10.0.x.0/24) so pods received private IPs automatically. I leveraged service mesh sidecars to handle TLS termination and mutual authentication, and set up a centralized Envoy gateway that performed dynamic routing based on label selectors. To keep traffic isolated yet discoverable, I used DNS‑based service discovery with split‑DNS: internal services resolved to private IPs while external clients still hit the public load balancer. Finally, I scripted the migration using Terraform modules so we could roll out new pods in a rolling fashion without affecting existing connections.

**Result**  
The switch cut our outbound data costs by 68 %, reduced network latency from 12 ms to 7 ms on average, and improved overall system resilience—no single public IP failure could bring down the entire pipeline. I learned that careful subnet planning and policy‑driven networking can drastically lower operational risk while keeping ML workloads fast and secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
