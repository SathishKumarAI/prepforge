---
qid: ing_216d80ae52__eli5__local
question: 'Explain: The Offline Message Flow — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 230
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:29:39-05:00'
sources: []
---

Imagine your phone is a tiny post office and the internet is a busy highway.  
When you send a text, it’s like dropping a letter into a mailbox (your device). The **offline message flow** is what happens when the recipient’s post office is closed – their phone is off or has no network.

1. **Sender’s post office** puts the letter in a “waiting room” on WhatsApp’s servers and stamps it with a delivery‑time stamp.  
2. It keeps the letter safe (encrypted) until the highway clears.  
3. Once the recipient’s post office opens (phone comes online), the server hands the letter to them, showing a green check when they receive it.  

If the highway is blocked for too long, the server eventually throws away the letter (after a set retention period). This way, WhatsApp guarantees that messages arrive in order and only when both sides are ready, just like a real post office delivering mail when the recipient’s mailbox is available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
