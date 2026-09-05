---
qid: ing_b83e0285ea__eli5__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 290
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:25-05:00'
sources: []
---

Imagine you’re sending a package (a request) through a courier that delivers many different items at once. Each package must carry a label telling the courier where it belongs so it doesn’t get mixed up. In OAuth 2.0, “resource indicators” are those labels: short URLs that say which protected service (the *resource*) the access token is meant for.

RFC 8707 says that when you ask a server for an access token, you can attach one or more of these labels in your request. The server then checks each label and only grants permission if it matches the resource you’re trying to reach. Think of it like a “no‑entry” sign: even if you have a key (the token), you can’t open doors (APIs) that don’t match the sign on your key.

**Key terms**

* **OAuth 2.0** – A protocol that lets apps request limited access to user data without sharing passwords.
* **Access token** – The “key” that authorizes an app to use a protected resource.
* **Resource indicator** – A short URL in the request telling which specific service the token should apply to.

By attaching these indicators, developers can safely issue one token for many services while ensuring each token only works where it’s intended.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
