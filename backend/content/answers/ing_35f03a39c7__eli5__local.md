---
qid: ing_35f03a39c7__eli5__local
question: 'Explain: Drawbacks of GraphQL — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 291
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:10-05:00'
sources: []
---

Imagine you’re ordering food at a restaurant that offers two menus.  
**REST** is like a classic menu: each dish (resource) has its own page, and you pick one dish per order. If you want the salad *and* the soup, you have to go back to the kitchen twice—two separate orders, two waits.  

**GraphQL** is like a “build‑your‑own‑meal” table where you tell the chef exactly what ingredients you want in one request. That sounds great, but it also means the chef must parse your custom list every time and may end up cooking more than you need (over‑fetching). Also, because the chef has to understand all possible combinations, the kitchen can get busy and slow if many customers ask for complex mixes at once—your server’s resources are stretched.

So while GraphQL lets you request precisely what you want in one shot, it can lead to:
- **Over‑fetching** (extra data you ignore)
- **Complex queries** that strain the server
- **Less caching** because each query is unique

REST’s fixed endpoints keep things simple and cacheable, but they sometimes require multiple round‑trips. Both have trade‑offs; choose based on how your “kitchen” handles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
