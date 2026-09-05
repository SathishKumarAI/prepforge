---
qid: ing_5c87a28f71__star__local
question: 'Explain: 🌐 Networking Fundamentals — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 406
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:47-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building a real‑time recommendation engine that had to serve 1 M requests per second across the globe. The latency budget was only 50 ms, so I realized my first bottleneck would be networking: sub‑optimal TCP settings and lack of a clear understanding of how data flows through the cloud.

**Task**  
I needed to design a low‑latency, highly available network layer that could scale with traffic spikes while keeping cost under control. The goal was to reduce end‑to‑end latency by 30 % and keep MTTR below 5 minutes for any networking failure.

**Action**  
1. I started with *“Designing Data-Intensive Applications”* (Martin Kleppmann) and the AWS Well‑Architected Framework, focusing on the “Reliability” and “Performance Efficiency” pillars.  
2. Then I dove into *“Computer Networking: Principles, Protocols and Practice”* to get a deep dive on TCP congestion control and QUIC.  
3. Using those concepts, I reconfigured our ELB listeners to use HTTP/2 over TLS 1.3, added ECMP routing across AZs, and enabled flow‑control windows per connection.  
4. Finally, I automated the rollout with Terraform modules that provisioned an internal VPC with a transit gateway and used AWS Global Accelerator for cross‑region failover.

**Result**  
Latency dropped from 75 ms to 52 ms (34 % improvement), throughput doubled during peak hours, and MTTR fell below 3 minutes. I learned that combining foundational networking theory with practical cloud tooling is the key to building resilient ML systems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
