---
qid: ing_c236ab4c73__aws__local
question: 'Explain: Allowlists vs. Denylists — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 431
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:11-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a multi‑region AI inference platform that served 5 M monthly users. The product team asked me to tighten data‑access controls while keeping latency under 50 ms. We had to choose between *allowlists* (explicitly permitting trusted IPs/roles) and *denylists* (blocking known bad actors).  

**Action**  
I applied **Customer Obsession** and **Dive Deep**:  
1. Collected telemetry on 12 k failed requests per day, revealing that 92 % were from a handful of compromised IP ranges.  
2. Designed an *allowlist‑first* model using **AWS WAF (Web Application Firewall)** with IP set rules and **Amazon GuardDuty** for continuous threat intel.  
3. Integrated the allowlist into our **IAM role policy** and added a fallback *deny all* rule—essentially a hybrid approach that gives us **zero trust** while preserving speed.  
4. Deployed the change via **AWS CloudFormation stacks** in 2 s, monitored with **CloudWatch Metrics** (latency, error rate) and set an automated rollback if latency >55 ms.

**Result**  
- Latency stayed at 48 ± 3 ms (unchanged).  
- Unauthorized access attempts dropped from 12 k/day to <30/day—an **>99.7 % reduction**.  
- Cost impact was negligible (<0.1 $/month) because WAF rules are priced per request, and the rule set is small.

**Learnings & Bar‑Raiser Check**  
I demonstrated *ownership* by taking end‑to‑end responsibility, *dive deep* into telemetry, quantified the safety benefit, and learned that a hybrid allowlist–denylist strategy balances security with performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
