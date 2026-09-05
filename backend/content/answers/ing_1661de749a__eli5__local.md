---
qid: ing_1661de749a__eli5__local
question: 'Explain: 1.1. Uniform Interface — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 237
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:12-05:00'
sources: []
---

Imagine a restaurant that offers a menu, a waiter, and a set of kitchen rules.  
**REST (Representational State Transfer)** is the “menu” for talking to any web service: it tells you how to ask for data (the dish) or send data (a new order).  

* **Uniform Interface** means every request follows the same simple pattern—just like every dish on the menu has a name, price, and description.  
  * **GET** = “Show me this dish.”  
  * **POST** = “Add a new dish to the list.”  
  * **PUT/PATCH** = “Change the recipe of an existing dish.”  
  * **DELETE** = “Remove this dish.”

The waiter (the server) doesn’t care how you’re sitting, just that you use the menu’s language. That consistency lets developers build, test, and swap services without learning new customs each time—just like a chef can serve any customer using the same set of recipes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
