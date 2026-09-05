---
qid: ing_8baf9bca2f__eli5__local
question: 'Explain: Step 5: Message Creation and Formatting — Design Notification
  Service | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 317
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:03-05:00'
sources: []
---

**Step 5: Message Creation and Formatting – Designing the Notification Service**

Think of your app like a busy post office that sends letters (messages) to people.  
When someone signs up, the system must decide *what* the letter says and *how* it looks before it’s mailed.

1. **What the message contains** – Just as a letter has a greeting, body, and signature, your notification includes fields like `type` (“welcome”, “alert”), `title`, `body`, maybe an image URL or link.  
2. **Formatting for each channel** – A letter to a friend is informal; one to a business partner is formal. Similarly, the same data can be rendered as an email (HTML), a push notification (plain text + icon), or a chat bot reply. The service keeps templates for each format.  
3. **Encoding and safety** – Like sealing a letter with a stamp so only the recipient opens it, you encode the message (JSON, Base64) and add metadata such as timestamps and unique IDs to avoid duplicates or replay attacks.

The notification service’s job is to take raw event data, pick the right template, fill in placeholders, and hand off the finished “letter” to whatever delivery channel—email server, push‑notification hub, or SMS gateway—will actually reach the user. This keeps your app’s messaging reliable, readable, and adaptable to many devices without mixing up content for each channel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
