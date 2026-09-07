---
qid: ing_97d2e552b1__aws__local
question: 'Explain: Networking and routing — Kora: The Cloud Native Engine for Apache
  Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:53-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Leadership Principles:** *Ownership* & *Dive Deep*. I owned the end‑to‑end data flow for a real‑time analytics platform and dove deep into Kafka’s networking stack to reduce latency.

**Situation/Task**  
We had 30 TB of sensor data per day arriving via MQTT, which we needed to stream to Apache Kafka on EKS. The existing setup suffered 2–3 s packet loss during peak hours, hurting downstream ML inference accuracy.

**Action**  
1. **Audit & Instrumentation** – enabled VPC Flow Logs and CloudWatch metrics for all ENIs; identified that most loss happened on the “kafka‑broker” subnets due to MTU mismatch.  
2. **Design a Routing Layer** – deployed an NLB in front of each Kafka broker group, using *target groups* with `ip` mode so traffic bypassed the Kubernetes pod IP stack. Added *AWS Global Accelerator* for cross‑AZ resilience.  
3. **Network Optimizations** – set `aws:elasticnetworking:mtu` to 9000 on all ENIs, added Flow Logs aggregation via Kinesis Data Firehose, and enabled *Kafka Connect* with a custom SMT that batches messages into 1 MB records (reducing per‑message overhead).  
4. **Cost & Scalability** – leveraged Spot Instances for consumer pods (cost ↓ 45%) while keeping brokers on On‑Demand to guarantee SLA.  

**Result**  
Packet loss dropped from 2.3 % to <0.01 %, average end‑to‑end latency fell from 2.8 s to 250 ms, and the ML model’s F1 score improved by **12 pts**. The solution now scales to 10× data volume with <5 % cost increase.

**Learning**  
I learned that micro‑level network metrics often hide systemic bottlenecks; proactively instrumenting at the ENI level can surface issues that would otherwise require costly trial‑and‑error fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
