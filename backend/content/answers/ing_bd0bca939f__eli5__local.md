---
qid: ing_bd0bca939f__eli5__local
question: 'Explain: Common Mistakes — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 283
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:36:50-05:00'
sources: []
---

Imagine a town’s mailroom (your server) that receives letters from many post offices (other services). Each time a letter arrives, the post office calls your doorbell (a webhook) and hands you the letter. If you’re not ready—no one at the desk, or the door is jammed—you lose the letter or it gets stuck in a pile.

**Common mistakes**

1. **No acknowledgment** – The post office expects a “thank‑you” reply; if your system never sends one, the sender keeps retrying and floods you.
2. **Blocking processing** – If you read the letter while still waiting for the thank‑you, the door stays ringing, and new letters pile up. Offload work to another worker instead.
3. **Unreliable security** – Without a secret key or signature, anyone could ring your bell with fake letters, overloading or corrupting data.
4. **No back‑pressure handling** – If many post offices call simultaneously, you can’t keep up; the system should queue or rate‑limit incoming calls.

Treat each webhook as a polite, single‑handed knock: acknowledge quickly, process asynchronously, verify authenticity, and manage load so your mailroom stays organized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
