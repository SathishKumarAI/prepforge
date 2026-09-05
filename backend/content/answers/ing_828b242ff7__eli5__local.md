---
qid: ing_828b242ff7__eli5__local
question: 'Explain: 5.1. OAuth Parameters Registration — RFC 8707: Resource Indicators
  for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 259
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:47-05:00'
sources: []
---

Think of an online service (the “resource”) as a fancy hotel that only lets you into certain rooms if you show the right key card.  
**OAuth 2.0** is like a universal key‑card system: you get a token from a trusted “key‑maker” (the authorization server) and hand it to the hotel (the resource server).  
Sometimes the hotel wants more information about *which* rooms you’re allowed into—just one room, or maybe two different floors. That’s where **RFC 8707** comes in.  

It adds a new field called a **resource indicator** to the token request: “Hey, I’m asking for access to *hotel‑A*’s single‑room service.”  
The key‑maker records this preference and gives you a token that only works for that specific room. The hotel then checks the indicator before opening the door, ensuring you can’t slip into rooms you weren’t granted.  

In short: the resource indicator is a polite request that tells the authorization server *which* part of a service you want to use, so the resulting key (token) only works there.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
