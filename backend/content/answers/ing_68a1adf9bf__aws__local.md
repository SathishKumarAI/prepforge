---
qid: ing_68a1adf9bf__aws__local
question: 'Explain: Terminology — How to Troubleshoot if You Can\u2019t Access a Particular
  Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 441
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:48-05:00'
sources: []
---

**Situation / Task**  
When I was leading the migration of our e‑commerce front‑end to a multi‑region architecture, a user reported that *shop.example.com* was unreachable from their region (AWS GovCloud). The incident threatened 2 % of our daily traffic and could erode trust in our “always‑available” promise.

**Action**  
1. **Dive Deep into DNS & Networking** – I set up Route 53 health checks, queried the CNAME chain, and inspected VPC flow logs for blocked packets (AWS CloudWatch).  
2. **Deploy a Resilient CDN** – I added an Amazon CloudFront distribution with edge‑location failover to a secondary region, configured Origin Failover to our S3 static site bucket, and enabled *Origin Shield* to cache at the regional edge.  
3. **Automate Recovery** – Using AWS Lambda@Edge I built a lightweight “health‑check” function that returns 503 only when both origins are down, preventing a full outage.  
4. **Cost & Availability Trade‑off** – The dual‑region CloudFront cost increased by 12 %, but the *99.999* SLA hit rate improved from 98.7 % to 99.995 %.

**Result**  
Within 30 minutes of deployment, traffic was automatically rerouted; we logged a 0.03 % downtime reduction and an estimated $2k/month cost increase that delivered a 3× improvement in customer satisfaction scores (CSAT).  

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the incident from triage to resolution.  
*Dive Deep*: I parsed DNS, VPC logs, and CloudFront metrics before acting.  
*Quantified Impact*: Measured SLA uplift and cost trade‑offs.  
*Learning from Failure*: Post‑mortem revealed that health checks must be region‑aware; we updated the monitoring framework accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
