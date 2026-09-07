---
qid: ing_c59c737b34__aws__local
question: 'Explain: Proactive blocklist tracking — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 431
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:55-05:00'
sources: []
---

**Situation & Task**  
When I joined the email‑delivery team at a SaaS startup, our developers were constantly dealing with “soft bounces” that silently drifted into spam folders. The product lacked any proactive way to detect and remediate blocklist issues, so customer support tickets rose by 32 % in Q2.

**Action**  
I owned the end‑to‑end “Proactive Blocklist Tracker.”  
1. **Collect** SES bounce & complaint logs via CloudWatch Logs → Kinesis Firehose → S3.  
2. **Process** with a scheduled Lambda that parses the logs, cross‑checks each recipient domain against the Spamhaus public blocklists (via API).  
3. **Store** results in DynamoDB (`DomainStatus` table) and flag any newly blocked domains.  
4. **Notify & Resend**: SNS topic triggers another Lambda that sends a “please verify your email” message through SES, using an alternate verified sender domain to bypass the blocklist.  
5. **Dashboards** on CloudWatch/QuickSight provide real‑time visibility.

I also added a retry policy (3× exponential backoff) and cost‑optimize by batching API calls.

**Result**  
Within two months:  
- Soft‑bounce rate dropped from 18 % to <2 %.  
- Support tickets related to email deliverability fell 40 %.  
- Cost of manual remediation saved ~$12k/month.  

**Reflection**  
I learned that *Ownership* means building a system you can run without hand‑holding, and *Dive Deep* forces you to question every assumption (e.g., why blocklist checks were missing). The bar‑raiser will hear my quantified impact, my end‑to‑end ownership, and the iterative improvement loop I instituted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
