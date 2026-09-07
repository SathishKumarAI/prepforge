---
qid: ing_ff12a22913__faang__local
question: 'Explain: Service quotas — Amazon Simple Notification Service endpoints
  and quotas - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 612
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:06-05:00'
sources: []
---

**Clarify**

You’re asking about the *service‑level limits* that Amazon SNS imposes on its API endpoints (e.g., `Publish`, `Subscribe`). These are “quotas” or “limits” that AWS sets per account to protect the service and ensure fair usage.  
Assumptions:  
- You’re using a standard AWS account, not a special program (GovCloud, China).  
- You need an overview of the most common limits and how to adjust them.

**Approach**

1. Identify the key SNS endpoints that have quotas.  
2. Summarize each limit’s default value and the conditions under which it applies.  
3. Explain how to request a quota increase via AWS Support.  
4. Note the impact of throttling on application design (retry/back‑off).  

**Depth**

| Endpoint | Default Quota | Notes |
|----------|---------------|-------|
| `Publish` (per topic) | 30 000 requests/second per account (global, not per topic) | Can be increased; rate limited by the *topic*’s traffic. |
| `Subscribe` / `Unsubscribe` | 2 500 requests/second per account | For creating/removing endpoints. |
| Topic creation | 10 000 topics per account | Hard limit; can’t exceed even with increase. |
| Message size | 256 KB (including attributes) | Larger messages must be stored in S3 and referenced via URL. |
| Delivery attempts | 1 000 per message (default 4 retries over ~5 days) | Custom retry policies are configurable. |

*Quota adjustments*:  
- Open a *Service Quotas* request or use the SNS console → “Request quota increase.”  
- Provide expected traffic patterns and justification; AWS typically approves within 24–48 hrs for most increases.  

**Edge Cases**

- **Bursting**: A sudden spike can hit per‑second limits even if total daily usage is below the cap. Design with exponential back‑off.  
- **Cross‑region**: Limits are region‑specific; a global application must consider each region’s quota.  
- **IAM permissions**: Missing `sns:*` actions won’t trigger throttling but will return 403; distinguish from 429 (throttled).  

**Optimize & Communicate**

- **Monitoring**: Enable CloudWatch metrics (`DeliveryTime`, `NumberOfMessagesPublished`) and set alarms on `Throttled`.  
- **Caching**: For high‑frequency publishes, batch messages or use SNS’s “message batching” via SQS integration.  
- **Fallback**: If a quota is reached, route to an alternative queue (SQS) or retry later.  

By documenting these limits and proactively monitoring them, you can design resilient services that gracefully handle throttling while staying within AWS’s operational boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
