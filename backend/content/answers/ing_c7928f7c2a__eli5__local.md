---
qid: ing_c7928f7c2a__eli5__local
question: 'Explain: REST vs GraphQL — 10 System Design Tradeoffs You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 450
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:51:58-05:00'
sources: []
---

Imagine you’re ordering food at a restaurant that offers two menus.

**REST** is like a menu with fixed dishes: each dish (endpoint) has a set price and a fixed list of ingredients. If you want more or fewer items, you must ask for a new dish or combine several. It’s reliable—every order works the same way—but you can’t customize a single dish without paying extra.

**GraphQL** is like a build‑your‑own meal bar: you pick exactly which ingredients (fields) you need and how they’re related (nested queries). The kitchen gives you just that, no more, no less. You avoid over‑fetching or under‑fetching data, but the system must understand your custom requests.

| Tradeoff | REST | GraphQL |
|---|---|---|
| **Flexibility** | Fixed endpoints, hard to change | Dynamic queries, fine‑grained control |
| **Over/Under‑fetching** | Often fetches too much or too little | Fetch only what you ask for |
| **Caching** | Simple URL caching works well | Requires custom cache logic |
| **Learning curve** | Straightforward, many developers know it | Needs understanding of query language |
| **Tooling & Debugging** | Mature tools exist | Newer tooling, but growing fast |
| **Versioning** | Add new endpoints for changes | Prefer schema evolution (deprecations) |
| **Network cost** | One request per endpoint | Single request can replace many |
| **Security** | Easy to restrict by endpoint | Must guard query complexity |
| **Real‑time support** | Limited, usually via polling | Built‑in subscriptions for live data |
| **Server load** | Predictable, one call at a time | Variable, depends on query size |

So, pick REST when you want simplicity and predictable caching, or GraphQL when you need precise data shapes and fewer round trips. The choice hinges on how much control you want over the payload versus how easy it is to build and maintain your API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
