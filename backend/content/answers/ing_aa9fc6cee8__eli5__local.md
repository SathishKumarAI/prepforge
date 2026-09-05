---
qid: ing_aa9fc6cee8__eli5__local
question: 'Explain: Cons ❌ — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 235
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:25-05:00'
sources: []
---

Imagine you’re at a café waiting for your coffee.  
With **long polling**, the barista (server) waits in a line until you ask, then sends you a cup and immediately closes the door. Every time you want another sip, you have to knock again—so each request takes time to set up and tear down, and there’s a brief gap where nothing happens.

With **WebSockets**, you keep an open walk‑through with the barista. Once the line is cleared, they stay in your room and can hand you new coffee as soon as it’s ready, no extra knocks needed. The connection remains alive, so updates flow instantly and efficiently.

**Cons of long polling:**  
- Repeatedly opening/closing connections uses more bandwidth and CPU.  
- There’s a lag between the end of one request and the start of the next.  

**WebSockets keep the line open**, eliminating that delay but requiring a persistent connection, which can be harder to manage on some networks or firewalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
