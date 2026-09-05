---
qid: ing_5df588650d__eli5__local
question: 'Explain: Service boundaries — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 250
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:26-05:00'
sources: []
---

Imagine you’re building a big kitchen where each chef is responsible for one dish—one chef handles salads, another sauces, another desserts. A *service boundary* is like the invisible wall that keeps each chef’s station separate so they don’t step on each other’s plates. In microservices, each “chef” is a small software component (a service) that does one job and talks to others only through clear, well‑defined menus (APIs).  

The *pattern language* gives you recipes for drawing those walls:  
- **Bounded Context** – the chef’s specialty area; keep all salad‑related data inside.  
- **Single Responsibility** – each service should have one purpose, like a salad chef who never makes soup.  
- **Contract First** – agree on the menu (API) before starting to cook, so everyone knows what ingredients are expected.  

Just as a kitchen runs smoothly when chefs stay in their zones and follow the same menu, microservices work best when each service stays within its own clear boundary and communicates only through agreed‑upon contracts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
