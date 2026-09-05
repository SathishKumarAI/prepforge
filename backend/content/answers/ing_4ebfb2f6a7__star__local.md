---
qid: ing_4ebfb2f6a7__star__local
question: What is a denial-of-wallet attack, and how do you defend against it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 362
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:00-05:00'
sources: []
---

**Situation:**  
In a fintech startup we launched a new crypto‑wallet feature for our mobile app. Within the first month, one of our beta testers discovered that by sending thousands of tiny transactions to the same address, they could lock the account’s balance and prevent any legitimate withdrawals—essentially a denial‑of‑wallet attack.

**Task:**  
I had to design an immediate mitigation while preserving user experience and ensuring compliance with AML/KYC regulations. The goal was to stop attackers from draining or freezing wallets without affecting normal usage.

**Action:**  
First, I implemented per‑address rate limiting: no more than 50 micro‑transactions per minute. Then I added a “suspicious activity” flag that triggers an automated audit when the cumulative value of received funds in a short window exceeds $5 k. For flagged wallets, we auto‑lock them for 24 hours and send an email to the owner with instructions to verify identity via our KYC portal. On the backend I used Redis Streams for real‑time event processing and integrated a machine‑learning anomaly detector that learned normal inflow patterns per user segment.

**Result:**  
Within two weeks, we saw zero denial‑of‑wallet incidents in production. Wallet lockout time dropped from 48 hours to 24 hours, and customer support tickets fell by 30 %. I also documented the response as a playbook that now guides our incident‑response team, ensuring any future wallet abuse is handled swiftly and transparently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
