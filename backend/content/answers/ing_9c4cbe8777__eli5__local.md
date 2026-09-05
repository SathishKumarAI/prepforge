---
qid: ing_9c4cbe8777__eli5__local
question: 'Explain: Session Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 258
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:12-05:00'
sources: []
---

Think of a **Session Service** as the “conversation‑room manager” in a big chat app like WhatsApp.  
When you open the app, the manager creates a *session*—a temporary, secure room that keeps track of who is online, what messages are waiting, and which devices (phone, tablet) belong to you.  

If you close the app or switch phones, the manager doesn’t delete everything; it just marks the session as “inactive.” Later, when you log in again, the same room is reopened, instantly restoring your chat history and unread counts.  

Key terms:  
- **Session** – a short‑lived record of a user’s active connection (device ID, token, last activity).  
- **Token** – a random string that proves you’re allowed to use that session; it expires after some time for safety.

The manager stores these sessions in fast memory or a quick key‑value store so the app can always find who is online and deliver messages right away. This simple “room” idea keeps WhatsApp responsive, secure, and able to juggle millions of users at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
