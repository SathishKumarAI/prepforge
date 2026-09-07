---
qid: ing_24537d342d__aws__local
question: 'Explain: IP Address Filtering — Top 6 Firewall Use Cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 493
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:03-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our public‑API gateway for a fintech startup that had been hit by repeated DDoS attacks and credential stuffing attempts. The objective was to reduce malicious traffic by 95 % while keeping latency under 100 ms for legitimate users.

**Action (Design)**  
1. **IP Address Filtering with AWS WAF + Shield Advanced** – I created a rule set that blocks known bad CIDRs, rate‑limits new IPs, and allows whitelisted corporate ranges.  
2. **Dynamic IP Reputation via Amazon GuardDuty** – Integrating real‑time threat intel to auto‑update WAF rules every 30 minutes.  
3. **Geo‑Restriction & Country Blacklisting** – Leveraging CloudFront’s origin request policy for high‑traffic regions that are not part of our target market.  
4. **Rate‑Limiting per API Key** – Using Lambda@Edge to enforce per‑user limits before the request reaches the backend.  
5. **Adaptive Whitelisting** – A DynamoDB table holds whitelisted IPs with TTL, refreshed by a scheduled Lambda that pulls from an internal threat‑intel feed.  
6. **Audit & Visibility** – All WAF logs go to Amazon S3 and Kinesis Firehose for real‑time dashboards in QuickSight.

**Result**  
- Malicious requests dropped from 12 k/s to <600 rps (95 % reduction).  
- Latency remained at 92 ms average, with 99.9 % under 100 ms.  
- Cost of WAF rules and Shield Advanced fell by 18 % after consolidating rule groups.

**Leadership Principles**  
*Customer Obsession*: I prioritized uninterrupted service for our users while protecting them from attacks.  
*Ownership & Dive Deep*: I owned the entire attack‑surface, dug into GuardDuty logs to surface patterns, and iterated the WAF rules until we hit the target metrics.  

**Bar‑raiser takeaways** – Showed clear ownership, depth in threat analysis, quantified impact (95 % reduction), and a learning loop from failed early rule sets that informed the dynamic reputation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
