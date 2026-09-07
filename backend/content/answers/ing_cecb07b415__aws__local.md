---
qid: ing_cecb07b415__aws__local
question: 'Explain: Rate Limits to Implement — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 466
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:28-05:00'
sources: []
---

**Situation / Task**  
While launching a generative‑AI service for a financial client, I discovered that uncontrolled request bursts could expose sensitive data and violate regulatory limits. My goal was to implement rate limiting that ensured safety, governance, and uninterrupted customer experience.

**Action**  
I designed an API gateway‑centric throttling strategy using **Amazon API Gateway + AWS WAF + Lambda@Edge**.  
1. **API Gateway**: Defined a custom usage plan (5 req/s per user) and enabled *client‑side throttling* for burst protection.  
2. **AWS WAF**: Added a rate‑based rule (1000 requests/5 min) to block abusive IPs automatically, storing the offending IP in an S3 bucket for audit.  
3. **Lambda@Edge**: Enforced dynamic policy changes by reading a DynamoDB “rate limits” table; updates propagate within 2 minutes globally.  

The solution leveraged **Amazon CloudWatch** for real‑time metrics (latency, hit/miss ratios) and integrated with **AWS IAM** to give the product team full visibility. We conducted A/B tests: throughput dropped by only 0.3 % while error rates fell from 4.2 % to <0.1 %. Cost increased by <5 % due to minimal Lambda invocations.

**Result**  
The deployment prevented a potential compliance breach, saved the client ~$120k in audit penalties, and improved SLA from 99.8 % to 99.97 % for critical operations—exceeding our target of 99.9 %.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Protect user data while keeping latency low.  
- **Ownership & Dive Deep** – Built a self‑servicing, globally distributed throttling layer that we continually refined based on metrics.  

Bar‑raisers will note my ownership of the end‑to‑end solution, deep dive into AWS service trade‑offs (latency vs cost), and quantified impact on compliance risk and uptime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
