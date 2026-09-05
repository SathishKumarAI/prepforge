---
qid: ing_4f548bfe7e__eli5__local
question: 'Explain: Request Headers — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 241
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:46-05:00'
sources: []
---

Think of a webhook as a post‑man delivering a letter (the data) to your house (your server).  
The **request header** is the envelope’s front label: it tells the post‑man how to handle the mail before he even opens it.

* **Content‑Type** – says what kind of letter it is (JSON, XML, plain text), so you know which “reading glasses” to put on.  
* **Authorization** – a secret code that proves the sender is allowed to drop the letter at your address.  
* **User‑Agent** – who sent it: “GitHub.com/PushBot v2.1”.  
* **X‑Webhook‑ID** – a unique ID so you can later say, “I received this exact letter” or “Ignore duplicates.”

When the webhook fires, your server reads the header first, verifies the code, knows how to parse the body, and then processes the payload. It’s like checking the envelope before reading the note—safe, organized, and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
