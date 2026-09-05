---
qid: ing_9a5759105c__eli5__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 230
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:23-05:00'
sources: []
---

Think of OAuth like a hotel key system.  
When you ask the front desk (the **authorization server**) for a key, you normally just say “Give me a key.” That’s a simple **Authorization Request**: you identify yourself and request access to the building.

RFC 8707 adds a twist called **Resource Indicators**. Imagine the hotel has several wings—each wing holds different rooms (different resources). If you want a key that works only for the spa wing, you must tell the front desk *which* wing you’re after: “Give me a key for the spa wing.” The indicator is just an extra field in your request that names the specific resource server (the spa wing) you intend to talk to.

So, with Resource Indicators, the authorization server can grant you a token that’s valid only for that particular part of the hotel. It keeps keys from being misused on other wings and lets each wing enforce its own rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
