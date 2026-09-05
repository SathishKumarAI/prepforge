---
qid: ing_2cc85e2e98__eli5__local
question: 'Explain: Clarifying Questions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 256
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:26-05:00'
sources: []
---

When a recruiter asks you to “design the Airbnb system,” they’re not just looking for your final blueprint—they want to see how you think.  
Imagine you’re building a giant, ever‑changing library where people can search, reserve, and review books that travel from one shelf to another. The first thing you do is ask clarifying questions:  

* **What are the main tasks?** (Check inventory, book a stay, pay, leave reviews.)  
* **Who uses it?** (Guests, hosts, admins.)  
* **How fast must things feel?** (Search should return in milliseconds; booking can tolerate a few seconds.)  
* **Where is the data stored?** (Global regions vs. local caches.)  

These questions are like gathering a map before you start digging. They let you choose the right “roads” (databases, caching layers, load balancers) and avoid building a bridge that’s too wide or too narrow. In short, clarifying questions turn a vague “build an app” into a clear, focused plan that can scale to millions of users without crashing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
