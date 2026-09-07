---
qid: ing_5529132132__aws__local
question: 'Explain: Managed dedicated IPs — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 643
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:51-05:00'
sources: []
---

**Scenario (S)**  
While revamping our transactional email system for a global SaaS product, we noticed that outbound emails were hitting spam filters more often after scaling from 10 k to 2 M recipients/day. The team needed a solution that would let developers resend messages reliably while keeping the same IP reputation.

**Task (T)**  
Implement a “Managed Dedicated IPs – Resend Email” feature in AWS so that developers can trigger a resend of any email without affecting other traffic, and so that we could isolate reputation and monitor deliverability per tenant.

**Action (A)**  

1. **Design the API layer**  
   * Exposed a REST endpoint (`/emails/{id}/resend`) behind API Gateway.  
   * Used Lambda (Python) to fetch the original message payload from DynamoDB, stamp a new `Message-ID`, and publish it to an SNS topic.

2. **Dedicated IP pool per tenant**  
   * Created a dedicated SES configuration set for each tenant.  
   * Assigned one or more Elastic IPs per set via SES’ “Dedicated IP Pools” feature.  
   * Configured the Lambda to route through the appropriate config set using the `X-SES-CONFIGURATION-SET` header.

3. **Re‑send logic**  
   * Lambda verifies that the email hasn’t been resent > 3 times in 24 h (to avoid spam loops).  
   * Sends via SES with `SendRawEmail`, capturing bounce/complaint metrics in CloudWatch Logs and SQS dead‑letter queues.

4. **Observability & cost control**  
   * Integrated CloudWatch dashboards showing per‑IP delivery rates, bounces, and resend counts.  
   * Added a Lambda that throttles resends if an IP’s bounce rate > 5 % for 7 days, automatically switching to the pool’s “fallback” IP.

**Result (R)**  

* **Deliverability**: Bounce rates dropped from 4.8 % to 0.9 % within 3 weeks.  
* **Resend success**: 97 % of developer‑initiated resends hit inboxes on the first attempt.  
* **Cost**: Dedicated IPs added ~$120/month, but overall SES send cost fell by ~12 % due to higher deliverability and fewer spam complaints.  

---

### Amazon Leadership Principles Highlighted
- **Customer Obsession** – Ensured developers could reliably resend critical emails without manual intervention.  
- **Ownership & Dive Deep** – Took end‑to‑end ownership of the feature, from API design to IP reputation monitoring.  

### What a Bar‑Raiser Listens For
- Clear ownership and measurable impact (bounce rate, cost).  
- Depth: understanding SES config sets, IP pools, and how they affect deliverability.  
- Learning loop: automated throttling based on real bounce metrics shows continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
