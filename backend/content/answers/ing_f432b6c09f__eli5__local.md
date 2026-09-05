---
qid: ing_f432b6c09f__eli5__local
question: 'Explain: Preface — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 311
total_tokens: 483
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:00:55-05:00'
sources: []
---

Imagine you’re sending a group of friends to the nearest coffee shop by telling them “the closest one is in town A.” They look up the address on their phones (DNS) and go there. But if the coffee shop closes or a road blocks, they’ll still head to town A because the phone’s map hasn’t updated yet. That’s what happens with DNS‑based Global Server Load Balancing (GSLB).  

**What it does:** It gives each user an IP address that points to a server near them, based on where the user is when they first ask for the site.  
**Why it breaks:**  
1. **Cache time** – Once a user’s phone remembers the address, it keeps using it until the DNS record expires (often minutes or hours). If traffic spikes or a server fails in that moment, users are still sent there.  
2. **No real‑time health check** – DNS can’t instantly see if a server is down; it only knows from the last update.  
3. **Global view missing** – Users may be routed to a “nearby” server that’s actually overloaded or unreachable, because DNS only looks at geographic proximity, not current load or network path quality.

So while DNS GSLB feels like a quick shortcut, it can send people to closed cafés and keeps the world out of sync with reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
