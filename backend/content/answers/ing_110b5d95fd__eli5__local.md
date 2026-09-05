---
qid: ing_110b5d95fd__eli5__local
question: 'Explain: were optional maybe an email or i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 246
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:47-05:00'
sources: []
---

**Optional features in a system‑design interview**

Think of building a parking garage like planning a road trip with a “back‑up” plan.  
You have the main route (the core parking logic) that everyone needs to use, but you can add extra stops—like an optional electric‑vehicle charging station or a smart‑parking‑app notification—to make the journey smoother for some drivers.

In interview terms, **“optional” means:**

* **Not required** by the problem statement.  
  You may propose it if it improves user experience, but you’re not penalized for leaving it out.
* **Should be justified**.  
  Explain why it’s useful (e.g., reduces traffic jams) and how it fits into your architecture (perhaps as a separate microservice or a caching layer).
* **Can be added later**.  
  Show that the system can grow without major redesign.

So, treat optional features like extra pit‑stops: great to have, but not mandatory for reaching the destination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
