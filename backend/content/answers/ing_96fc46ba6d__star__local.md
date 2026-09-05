---
qid: ing_96fc46ba6d__star__local
question: 'Explain: Integrate — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 376
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:04-05:00'
sources: []
---

**Situation:**  
At my last startup we had an internal tool that let our product managers trigger “welcome” emails to new users. The system was built on Rails, but the email service was a legacy SMTP server with limited analytics. When we launched a feature to onboard 10k beta testers, the bounce rate shot up to 12%, and we couldn’t track opens or clicks.

**Task:**  
I needed to replace the old SMTP flow with Resend’s API, so we could get real‑time delivery metrics, improve deliverability, and automate retry logic for failed sends—all without rewriting the whole email template engine.

**Action:**  
1. I mapped our existing `UserMailer` templates into JSON payloads that Resend accepts, preserving inline CSS.  
2. Implemented a lightweight service object in Ruby that wrapped `Resend::Client`, passing `personalizations`, `subject`, and `reply_to`.  
3. Added webhook endpoints to capture delivery events (delivered, opened, clicked) and stored them in our PostgreSQL `email_events` table for analytics.  
4. Used Resend’s retry feature by setting `max_retries: 5` and a back‑off strategy via Sidekiq jobs.  
5. Created a dashboard widget showing success rates per segment, which we used to tweak content.

**Result:**  
Within two weeks the bounce rate dropped from 12% to 1%, while click‑throughs increased by 35%. The new analytics gave us actionable insights for future campaigns. I learned how to integrate third‑party email services efficiently and the importance of exposing delivery metrics early in the development cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
