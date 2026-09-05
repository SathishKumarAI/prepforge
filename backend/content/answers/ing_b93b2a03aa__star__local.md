---
qid: ing_b93b2a03aa__star__local
question: 'Explain: SRV (Service) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 304
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:42-05:00'
sources: []
---

**Situation** – While leading a migration of our SaaS platform from on‑prem to AWS, we discovered that the new load balancer would not correctly route SIP traffic for our VoIP integration. The customer’s domain was already using an A record pointing to the old server, but the application required a specific port and protocol.

**Task** – I had to implement DNS changes so that all clients could resolve the service endpoint with the correct host, port, and priority without disrupting existing traffic or incurring extra cost.

**Action** – I introduced an SRV record for `sip.example.com` targeting our AWS ELB. Using BIND’s `srv` type syntax, I set `_sip._tcp.sip.example.com 86400 IN SRV 10 5 5060 lb-1.elb.amazonaws.com.` I then updated the application to query DNS for the SRV record, falling back to A if missing. I coordinated with the dev‑ops team to propagate changes via Route 53’s API and tested resolution from multiple geographic locations using `dig +short`.

**Result** – The new SRV record reduced connection failures by 92%, cut manual configuration errors, and enabled seamless failover across regions. I learned how a single DNS record type can dramatically improve service reliability and scalability when used correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
