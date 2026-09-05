---
qid: ing_ce277e1999__eli5__local
question: What Went Wrong? — Prime Video Microservices - by Neo Kim
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 233
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:58-05:00'
sources: []
---

Imagine a busy kitchen where every dish is made by a different chef (each microservice). When the restaurant opens, everything runs smoothly—chefs follow recipes, and customers get their meals on time. Then a new menu item appears: “Prime Video.” The chefs suddenly have to coordinate more closely, but their recipes were written for single‑dish orders, not a streaming line of requests.  

In this kitchen, the problem was **data coupling**—each chef (service) kept its own copy of ingredients (user data). When Prime Video needed fresh data, it had to ask many chefs, each replying with slightly different information. The result: inconsistent menus, slow service, and a messy kitchen.

The fix is to give all chefs access to one shared pantry (a central database or cache) and make them hand off ingredients quickly, just like a well‑organized restaurant that keeps the same fresh stock for every dish. This reduces confusion, speeds up delivery, and keeps Prime Video running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
