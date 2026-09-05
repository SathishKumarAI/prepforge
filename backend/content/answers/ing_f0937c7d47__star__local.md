---
qid: ing_f0937c7d47__star__local
question: Why Do We Need DNS? — How DNS Actually Works - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 310
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:09-05:00'
sources: []
---

**Situation**  
When my team launched a micro‑services platform for an e‑commerce client, we had to expose dozens of internal services over the public internet without exposing IPs or hard‑coding endpoints in every consumer app.

**Task**  
I needed a scalable way to translate friendly domain names (e.g., shop.example.com) into the dynamic IP addresses of our containerized services that could change with each deployment.

**Action**  
We set up an internal BIND DNS server and integrated it with Kubernetes’ CoreDNS plugin. Every service registered its name in DNS via annotations; when a pod started, it pushed its current IP to CoreDNS using a short TTL (30 s). Clients queried the domain, received the latest A record, and routed traffic accordingly. We also implemented split‑brain DNS: external requests hit Route 53 for public names, while internal pods used the local BIND instance, ensuring no leakage of internal addresses.

**Result**  
The system handled over 1.2 million daily queries with sub‑millisecond resolution, reduced manual IP updates by 95%, and cut downtime during rollouts from minutes to seconds. I learned that DNS isn’t just name resolution—it’s a dynamic service discovery backbone essential for modern, elastic architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
