---
qid: ing_d3afd6678a__eli5__local
question: 'Explain: Step 8: Sending the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 261
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:38-05:00'
sources: []
---

**Step 8 – “Sending the Notification”**  
Think of your app as a busy post office. After the mail (the user’s action) is sorted, the clerk must decide *how* to deliver it—by email, SMS, push notification, or in‑app message. The **Notification Service** is that clerk.

- **Notification Service**: A small program that takes a “message” and decides which channel to use.  
- **Channel**: The delivery method (email, SMS, push).  
- **Template**: The message’s wording, with placeholders for user data.  

The service first looks up the user’s preferences (do they want email or push?). It then pulls the correct template, fills in the details (like “Hello Alice”), and hands it off to a *delivery provider* (e.g., SendGrid for email). If that provider is busy, the service retries later.  

By keeping this clerk separate from the rest of your system, you can change delivery rules or add new channels without touching core business logic—just like adding a new mailbox in the post office.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
