---
qid: ing_204e4f6aea__aws__local
question: 'Explain: Introduction — How to Troubleshoot if You Can\u2019t Access a
  Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 526
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:09-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a support team for a global e‑commerce platform. A customer reported that *example.com* was unreachable from their region. The SLA required 99.9 % uptime and the incident had to be resolved in under 30 min.

**Action (Design)**  
1. **Ingress Check – Route53 + CloudFront**  
   - Query the DNS records via `dig` / `aws route53 list-resource-record-sets`.  
   - If CNAME or A record missing, trigger an automated Lambda that updates the Record Set and publishes a health‑check.

2. **Network Path – VPC Flow Logs & traceroute**  
   - Enable VPC Flow Logs on the customer’s VPC; filter for destination IP of *example.com*.  
   - Run `traceroute` from an EC2 instance in the same AZ to identify hops where traffic is dropped (e.g., at the ISP or peering point).

3. **Application Layer – CloudWatch & X‑Ray**  
   - Correlate latency spikes with Lambda metrics (`aws lambda get-function-configuration`).  
   - Use X‑Ray traces to see if the request hits ALB, then NLB, and finally the target EC2/Container.

4. **Automated Rollback / Recovery**  
   - If DNS propagation is the culprit, deploy a CloudFormation stack that automatically creates a failover alias record pointing to an S3 static site (fallback).

5. **Post‑mortem & Metrics**  
   - Reduced mean time to resolution from 45 min to **12 min** on similar incidents (Δ −73 %).  
   - Implemented a dashboard in CloudWatch that alerts on any Route53 health‑check failure, cutting future incident response by ~50 %.

**Result**  
We restored service within the SLA, improved our monitoring stack, and documented the playbook for cross‑team use.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Quick resolution to maintain trust.  
- **Ownership & Dive Deep** – End‑to‑end troubleshooting with measurable impact.  

**Bar‑raiser cues**  
- Demonstrated end‑to‑end ownership, quantified performance gains, and iterated on failure lessons (e.g., added automated failover).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
