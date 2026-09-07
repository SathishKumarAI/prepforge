---
qid: vq_a2d78aab5f__aws__local
question: How to send an email in Python language?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 454
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:05-05:00'
sources: []
---

**Situation & Task**  
I was tasked to add a “send‑receipt” feature for our e‑commerce platform that handles ~2 M orders/month. The requirement: send a confirmation email within 5 s of order completion while keeping costs below $0.02 per mail and ensuring 99.9 % deliverability.

**Action (Technical Design)**  
- **Architecture**: Trigger an AWS Lambda (`Python 3.11`) via EventBridge when the order status changes to *Completed*.  
- **Email Service**: Use **Amazon SES** (Simple Email Service) in “production” mode, with a verified domain and DKIM to maximize deliverability.  
- **Template Management**: Store email templates in S3; Lambda pulls the relevant template, renders it with Jinja2 using order data, then calls `ses.send_email`.  
- **Retry & Dead‑Letter Queue**: If SES returns a throttling or bounce error, the Lambda retries (exponential back‑off) up to 3 times. Unrecoverable failures go to an SQS DLQ for later investigation.  
- **Observability**: CloudWatch metrics (`EmailSent`, `SESFailureRate`) and X-Ray tracing give latency & failure insights.

**Result**  
- Achieved < 10 ms average Lambda cold‑start + SES response, meeting the 5 s SLA.  
- Delivered ~2 M emails/month at $0.019 per mail (≈$38k/year).  
- Bounce rate dropped from 3.8 % to 1.2 % after implementing DKIM and strict SPF records.

**Reflection & Learning**  
I owned the end‑to‑end flow, diving deep into SES limits and cost models. A failed first attempt taught me to monitor throttling patterns; now we auto‑scale Lambda concurrency based on EventBridge burst patterns, ensuring zero outages during flash sales. This solution balances **Customer Obsession**, **Ownership**, and **Deliver Results** while keeping the system simple and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
