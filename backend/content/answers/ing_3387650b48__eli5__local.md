---
qid: ing_3387650b48__eli5__local
question: 'Explain: Online Banking — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 211
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:57:43-05:00'
sources: []
---

Think of an online bank like a busy hotel with a front‑desk and many rooms.  
**Client (guest)**: the phone or computer you use to check your balance or pay a bill.  
**Server (hotel’s back‑end)**: the powerful computers that keep all guest records, process payments, and run the security checks.  

When you log in, your device (the client) sends a “request” to the server over the internet—just as a guest walks into the front desk with a key card. The server verifies your identity, looks up your account information, performs any requested actions (like transferring money), and then sends back a response (“Your balance is $1,200”).  

All data stays on the server; the client only sees the results. This separation lets many users work at once while keeping sensitive financial records safe in a central, well‑protected location.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
