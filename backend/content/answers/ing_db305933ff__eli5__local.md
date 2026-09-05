---
qid: ing_db305933ff__eli5__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 218
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:21:14-05:00'
sources: []
---

Think of OAuth 2.0 like a key‑chain that lets you open many doors (APIs) with one master key (the access token).  
RFC 8707 adds a “door label” to each key so the key knows exactly which door it’s meant for.  

**Resource indicator** is just that label – a URL or URI that says, “This token is only good for this particular resource.” When you request an access token, you attach the resource indicator; the authorization server records it with the token. Later, when a service receives the token, it checks the indicator against its own address. If they match, the door opens; if not, the key is rejected.

This prevents a token that works for one API from being misused on another, much like a hotel key that only opens your room and no other rooms. The term “resource” here means any protected web service or data set you want to access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
