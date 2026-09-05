---
qid: ing_ed34e2b336__star__local
question: 'Explain: Everything in your control — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 342
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:09-05:00'
sources: []
---

**Situation**  
At my last startup, we built a SaaS onboarding platform that sent welcome emails via SendGrid. After a quarterly audit, we discovered a 12% drop in activation rates because developers were hitting the “Resend Email” button too often and our system was throttling requests, leading to bounced emails.

**Task**  
I had to redesign the resend flow so that every request stayed within our API limits, ensured deliverability, and gave developers real-time feedback on email status without overloading SendGrid’s rate‑limit.

**Action**  
First, I introduced a token bucket algorithm in Go, capping resend attempts to 3 per minute per user. Then I wrapped the SendGrid client with a retry layer that used exponential backoff and logged each attempt in Redis for auditability. For UI, I added an inline status badge (✓ sent, ⚠ pending, ✖ failed) powered by WebSocket updates so developers saw instant results. Finally, I set up Grafana dashboards to monitor queue depth and bounce rates.

**Result**  
Within two weeks of launch, resend‑related bounces fell from 8% to 1%, while activation rates rose by 7%. The system handled peak traffic without hitting SendGrid limits, and we gained a 30 % reduction in support tickets about email delivery. I learned that combining rate‑limiting, real‑time feedback, and observability turns a pain point into a reliable feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
