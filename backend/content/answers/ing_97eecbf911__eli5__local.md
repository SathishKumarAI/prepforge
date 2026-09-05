---
qid: ing_97eecbf911__eli5__local
question: 'Explain: Examples — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 232
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:36-05:00'
sources: []
---

Imagine a busy kitchen (your backend services) that prepares many different dishes, but the waiter (the client app) only wants to order from a single menu. The **API gateway** is that waiter: it receives every request, decides which dish it needs, and hands it off to the right chef.  

The **Backend for Frontend (BFF)** is like a custom side‑board that sits next to each waiter’s table. It knows exactly what ingredients that particular waiter’s customers prefer—maybe one waiter serves a mobile app that likes short JSON snippets, while another serves a web app that needs richer HTML fragments. The BFF gathers the right pieces from all the chefs, stitches them together into a single response, and delivers it straight to its waiter.  

So: gateway = traffic controller; BFF = tailor‑made side‑board for each client’s taste. This keeps your kitchen (backends) clean and lets each app get just what it needs without overcomplicating the menu.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
