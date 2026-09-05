---
qid: ing_8c3afcc75c__eli5__local
question: 'Explain: System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 307
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:51-05:00'
sources: []
---

Think of a food‑delivery app as a **smart restaurant kitchen** that runs on the internet.  
When you open the app, it’s like standing in front of a big menu board (the *front‑end*). Your order is the **request**—a simple message that says “I want pizza and a drink.” That request travels over the network to a **dispatch server** (the *back‑end*), which decides two things:  
1. Which restaurant can cook it fastest, and  
2. Which delivery rider is nearest.

The dispatch server talks to two other kitchens: the **restaurant service** (stores menus, stock, cooking status) and the **rider service** (tracks riders’ GPS). Both of these are *micro‑services*—small programs that do one job well.  

Once a restaurant accepts, it sends a “ready” signal back through the dispatch server to you, who gets a live location of your rider on a map. When the food arrives, the app records the delivery as finished and updates your rating.

All this happens behind the scenes with *databases* that remember past orders, *caching* that speeds up repeated menu look‑ups, and *load balancers* that keep traffic from crashing any single server—just like a busy kitchen uses multiple cooks so no one gets overwhelmed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
