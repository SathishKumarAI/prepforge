---
qid: ing_8e06d97df4__eli5__local
question: 'Explain: Step 1: Register an Endpoint — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 223
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:55-05:00'
sources: []
---

Think of your app as a **post office** and the “endpoint” you register as a **mailbox that can receive letters automatically**.  
When you set up a webhook, you’re telling the sender (the other system) where to drop its mail: you give it an address (URL) and tell it what kind of letters it should send (JSON payload).  

The post office (your server) must be ready to open that mailbox at any time. It “registers” the endpoint by:
1. **Creating a listening spot** – a route in your code that accepts HTTP POST requests.  
2. **Declaring what’s allowed** – you specify the expected content type and maybe a secret key so only trusted senders can drop letters there.  

Once registered, whenever the sender “writes” a letter (sends an event), it goes straight into this mailbox, and your system can immediately read and act on it—just like receiving a package without having to ask for it first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
