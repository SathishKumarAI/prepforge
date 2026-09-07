---
qid: ing_cacf96b389__aws__local
question: 'Explain: IP and domain monitoring — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 426
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:39-05:00'
sources: []
---

**Situation & Task**  
While leading the IP‑Protection team for a SaaS firm, we noticed that developers were frequently missing “Domain Infringement” alerts—our automated email system failed to resend after a user clicked *Resend* due to a race condition in our event queue. The impact: 18% of infringement cases slipped past compliance checks, risking legal penalties.

**Action**  
1. **Own & Dive Deep** – I mapped the entire flow from SQS → Lambda → SES, identified that duplicate `Resend` events were being throttled by a single‑threaded consumer.  
2. Designed a *stateless* architecture:  
   - **EventBridge Scheduler** to trigger a **Lambda** that checks DynamoDB for an “infringement flag” and writes a unique message ID.  
   - **SNS topic** with *deduplication* (content‑based) publishes to **SES**; duplicates are discarded at the broker level.  
3. Implemented **CloudWatch metrics** (`ResendAttempts`, `FailedEmails`) and an alarm that auto‑scales Lambda concurrency to 200, ensuring 99.9% availability during peak “Resend” bursts.  
4. Added a simple *retry* policy (exponential backoff) for SES failures.

**Result**  
- Reduced missed alerts by **92%**, cutting potential legal exposure from $1.2M to <$50K per year.  
- CPU usage dropped 35%, saving ~$600/month in Lambda cost.  
- Team now routinely reviews CloudWatch dashboards, fostering continuous improvement.

> **Bar‑raiser notes:** Demonstrated ownership (took full responsibility), deep dive into the event pipeline, quantified impact (metrics & cost savings), and learned from failure (re‑architected for idempotency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
