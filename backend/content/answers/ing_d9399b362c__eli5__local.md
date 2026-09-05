---
qid: ing_d9399b362c__eli5__local
question: 'Explain: 4.1. Client-Side Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 194
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:45-05:00'
sources: []
---

**Service discovery** is like a neighborhood map that tells your phone where to find friends’ Wi‑Fi or a local coffee shop’s menu without you having to remember every address.

Imagine you’re in a new town and want to meet up with friends who keep moving houses. Instead of calling each one to ask, you use a shared “friend locator” app. When someone moves, they update their location on the map; when you look for them, the app instantly shows where they are and gives you the exact address (their network name or URL).  

In computing, each service (like a login server or data store) registers itself with a central registry. Applications query that registry to find the current address of the service they need, even if it’s moved or scaled up. This keeps everything flexible and automatic, just like your friend locator app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
