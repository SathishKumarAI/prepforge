---
qid: ing_a1efa0fd25__star__local
question: 'Explain: What an IP Address Does — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 330
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:25-05:00'
sources: []
---

**Situation** – I was leading the redesign of our SaaS platform’s internal routing layer after a sudden spike in cross‑region latency. Our microservices were scattered across three data centers, and we noticed that traffic was taking suboptimal paths because our load balancer was only using DNS names.

**Task** – I had to build a lightweight service discovery module that could route requests based on the actual IP addresses of instances, ensuring they hit the nearest datacenter while respecting firewall rules and preserving TLS session affinity.

**Action** – First, I mapped each instance’s public and private IPv4/IPv6 addresses using Kubernetes’ `status.podIP` and `spec.hostIP`. I then implemented a reverse‑DNS lookup cache to translate IPs into geolocations. The routing logic prioritized the lowest ping latency path, falling back to DNS when no IP was reachable. We used Envoy’s HTTP filter for dynamic routing and added an ACL that matched CIDR blocks to enforce security boundaries.

**Result** – After deployment, cross‑region request latency dropped from 350 ms to 120 ms on average (a 66% improvement). The system also reduced egress costs by 18% because traffic stayed within the nearest region. I learned how critical it is to treat IP addresses not just as identifiers but as actionable network primitives that can drive real performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
