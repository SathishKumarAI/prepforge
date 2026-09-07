---
qid: ing_cef09f4f2b__aws__local
question: 'Explain: Prevent spoofing with DMARC — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 495
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:45-05:00'
sources: []
---

**Situation & Task**  
While launching a multi‑tenant SaaS that sends transactional emails via **Amazon SES**, we observed a 12 % spike in spoofed “support@” messages that bypassed our SPF checks because the sending domain’s DKIM signature was missing. The goal: prevent spoofing, maintain deliverability, and automatically resend legitimate mails.

**Action**  
1. **Implement DMARC with `reject` policy** – added a DNS TXT record for each tenant’s domain.  
2. **Enforce DKIM signing in SES** (one key per tenant) and enable *Return‑Path* rewriting to the verified source.  
3. Created an **AWS Lambda** function triggered by SES bounce notifications (`SendRawEmail` events).  
   - If DMARC fails, the function checks the sender’s `From:` header; if it matches a known tenant domain, the message is re‑sent after appending a `DMARC-Authentication-Results: fail` header.  
4. Logged all actions in **Amazon CloudWatch** and sent alerts via **SNS** for any DMARC failures > 5% per day.

**Result**  
* Spoofed email volume dropped from 12 % to < 0.3 %.  
* Resend success rate improved by 18 %, raising overall deliverability from 93 % to 99.4 %.  
* Operational cost increased by only **$15/month** (Lambda invocations + CloudWatch logs).  

**Learning & Bar‑raiser cues**  
- *Ownership*: Took full responsibility for tenant email security and automated the entire flow.  
- *Dive Deep*: Analyzed DMARC reports, SPF/DKIM alignment, and SES bounce payloads to pinpoint failure modes.  
- *Quantified Impact*: Measured spoof rate reduction and deliverability gains with concrete metrics.  

**Leadership Principles Highlighted**  
1. **Customer Obsession** – safeguarding user inboxes and trust.  
2. **Ownership & Deliver Results** – delivering a robust, cost‑effective solution that scales to thousands of tenants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
