---
qid: ing_3328677277__aws__local
question: 'Explain: Rate Limiting and Resource Quotas — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 468
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:00-05:00'
sources: []
---

**Situation / Task**  
While launching a new AI‑inference API for a fintech client, the team had to guarantee *safety* (prevent abusive traffic) and *governance* (adhere to regulatory quotas on compute usage).  

**Action** – *Customer Obsession & Ownership*  
1. **Rate limiting**:  
   * Implemented AWS API Gateway with per‑API key throttling (5 req/s burst, 10 req/s steady) backed by a DynamoDB table that records token buckets per user.  
   * Added a Lambda authorizer that checks the user’s current quota and returns `429` if exceeded, ensuring instant feedback.  

2. **Resource quotas**:  
   * Leveraged AWS Service Quotas to cap GPU‑instance usage (max 200 vCPU‑hrs/month) per account.  
   * Created an EventBridge rule that triggers a Step Functions workflow when the quota is nearing 80 %, sending alerts and auto‑scaling to a cheaper inference endpoint.  

3. **Governance & safety**:  
   * Integrated AWS WAF with custom rules to block suspicious IPs and DDoS patterns.  
   * Enabled CloudTrail logs for all quota changes, feeding into Athena dashboards for compliance audits.

**Result** – *Dive Deep & Deliver Results*  
Within 30 days the system handled 1.2M requests/day without any SLA breaches. The throttling layer cut malicious traffic by **87 %**, and automated quota enforcement reduced manual review time from 4 hrs to 15 min per month, saving $3k/month in operational costs.

**Learnings** – *Bias for Action & Learn*  
The initial DynamoDB design caused a hotspot; we switched to using the built‑in API Gateway token bucket engine, which eliminated that latency spike. This iteration demonstrates ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
