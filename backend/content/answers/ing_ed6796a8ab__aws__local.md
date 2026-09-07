---
qid: ing_ed6796a8ab__aws__local
question: 'Explain: Connection Layer — How does SSH work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 415
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:12-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led the migration of our on‑prem ML inference cluster to an AWS‑native, multi‑region architecture. One blocker was that our Python workers needed secure, low‑latency communication with a PostgreSQL database behind a corporate VPN. The existing SSH tunnels were brittle and introduced >200 ms latency spikes during model training, hurting SLA‑based revenue by 12%.

**Action (Technical)**  
I designed an **SSH‑Connection Layer** using Amazon EC2 bastion hosts paired with **AWS Systems Manager Session Manager**.  
* **Key design choices** –  
  * Use `ec2-user` IAM role + SSM to avoid key distribution.  
  * Employ AWS Network Load Balancer (NLB) for high‑availability and TLS termination.  
  * Leverage EC2 Spot Instances for the bastion tier, scaling with CloudWatch alarms on CPU/IO metrics.  
  * Persist SSH multiplexing (`ControlMaster`) across worker nodes to cut handshakes from ~5 s to <100 ms.  

**Result (Quantified)**  
Latency dropped from 200 ms → 30 ms (∼85 % reduction). Model training throughput increased by 18%, translating into $1.2M incremental revenue in Q4. The cost of the bastion tier fell from $3,400/month to $950/month due to Spot usage.

**Reflection (Bar‑raiser lens)**  
I owned the full problem space—networking, security, cost—while diving deep into SSH internals and AWS service limits. I iterated quickly, learned that multiplexing was the true bottleneck, and documented a playbook now used across 5 teams. This showcases ownership, bias for action, and a data‑driven impact—core Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
