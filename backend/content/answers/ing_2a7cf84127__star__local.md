---
qid: ing_2a7cf84127__star__local
question: 'Explain: Level 3: Transport, Security, and Where MCP Runs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 374
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:04-05:00'
sources: []
---

**Situation**  
When my team launched the new micro‑service platform (MCP) for our fintech app, we had to guarantee that every transaction was encrypted end‑to‑end and that the service could run in a multi‑tenant environment without compromising data isolation.

**Task**  
I was tasked with designing the transport layer, implementing secure communication protocols, and deciding where the MCP would be deployed so it met compliance (PCI‑DSS) while staying cost‑effective.

**Action**  
First, I chose gRPC over HTTP/2 because it natively supports TLS 1.3 and multiplexed streams, which reduced latency by ~30 % compared to REST. I integrated mutual TLS (mTLS) using Envoy sidecars: the service presented a client certificate signed by our internal CA, while Envoy validated both sides against the same trust store, ensuring only authenticated workloads could talk to MCP. For data at rest, we used AWS KMS‑managed keys with automatic rotation. To keep the service isolated, I deployed MCP in a dedicated VPC with private subnets and enabled AWS PrivateLink; this prevented any inbound traffic from the public internet while still allowing cross‑account access via IAM roles. Finally, I added Prometheus exporters to monitor TLS handshake failures and latency, feeding alerts into PagerDuty.

**Result**  
The new transport stack cut transaction latency by 27 % and eliminated all TLS downgrade attempts in production. Compliance audits passed on the first try, and the isolated deployment reduced our attack surface by 85 %. I learned that choosing the right protocol (gRPC + mTLS) and coupling it with a private, role‑based network design can deliver both performance and security without extra operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
