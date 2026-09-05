---
qid: ing_8fa9cbcc38__eli5__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 249
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:33-05:00'
sources: []
---

Imagine you’re borrowing a book from a library that has many branches (each branch is a *resource server*). You first show your library card at the main desk (the *authorization server*) to get permission. The desk gives you a special “borrow slip” (an *access token*). Normally, this slip works only for one branch, but sometimes you want to borrow books from several branches in one trip. That’s where *resource indicators* come in: when you ask the main desk for your slip, you also tell it which branches you plan to visit—just like listing the book titles and their locations.

In OAuth 2.0, RFC 8707 lets a client (the user’s app) send a **Resource Indicator** field in its token request. The authorization server reads this list of resource URLs, validates that the client is allowed to access each one, and then issues an access token that is valid for all those resources. It’s like getting a single slip that authorizes you at multiple library branches, keeping the process simple yet secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
