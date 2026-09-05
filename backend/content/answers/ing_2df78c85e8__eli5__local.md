---
qid: ing_2df78c85e8__eli5__local
question: 'Explain: 🌎 Geographic Regions — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 199
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:35-05:00'
sources: []
---

Imagine a huge library that must keep its books safe and always reachable no matter where you are.  
AWS builds its “library” the same way: it splits the world into **Regions**—large, independent clusters of data centers that act like separate cities. Each Region is isolated from others so if one city faces trouble (power outage, natural disaster), the others keep running.

Inside a city you have several **Availability Zones (AZs)**, which are like distinct neighborhoods with their own power, cooling and network. By placing your “books” (servers, databases) in multiple AZs, you guarantee that even if one neighborhood goes dark, the books in another remain accessible.

So, Regions = cities; Availability Zones = neighborhoods within those cities—together they give AWS a global, resilient architecture that keeps services online worldwide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
