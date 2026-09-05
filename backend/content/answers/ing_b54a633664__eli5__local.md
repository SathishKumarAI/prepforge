---
qid: ing_b54a633664__eli5__local
question: 'Explain: User Preference Service — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 195
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:24:06-05:00'
sources: []
---

**User Preference Service – Notification Service**

Imagine a smart mailbox that only delivers mail you care about.  
When a user signs up, the system records their *preferences* (favorite topics, time of day, device). That data lives in a **User Preference Service**—a tiny database that keeps each user’s choices.

Whenever something new happens (a post, an offer, a message), the **Notification Service** asks the preference service: “What does this user like?”  
If the answer says *yes*, it sends a notification through the chosen channel (email, push, SMS). If no, it skips sending anything.  

So, the preference service is the *memory* of what each user wants; the notification service is the *mailman* that checks those memories before delivering. This keeps notifications relevant and avoids spam.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
