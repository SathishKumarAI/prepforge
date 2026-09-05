---
qid: ing_09b524362a__eli5__local
question: 'Explain: You''re [probably] doing it wrong — GitHub - brettwooldridge/HikariCP:
  \u5149 HikariCP\u30fbA solid, high-performance, JDBC connection pool at last. \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 277
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:13-05:00'
sources: []
---

Think of a database like a busy restaurant kitchen. Every time an app wants to run a query, it needs a “chef” (a JDBC connection) to prepare the dish. If your program keeps opening new chefs for each request and then throws them away when done, you’ll exhaust the kitchen’s capacity and cause delays—just as creating and closing connections is slow.

HikariCP is like hiring a team of highly skilled, ready‑to‑cook chefs who sit in a well‑organized station. Instead of building a new chef from scratch each time, the app asks Hikari for an available chef, uses him to cook the dish, then returns him to the station so he can be reused immediately.

If you’re “doing it wrong,” you’re probably creating a fresh HikariCP pool every request or not closing the pool at all. Just as letting chefs wander off into other kitchens wastes talent, repeatedly re‑creating pools wastes time and memory. The right way is: create one shared HikariCP pool (a single kitchen), let it live for the life of your app, and borrow a chef from it whenever you need to run a query. This keeps the kitchen humming smoothly and your app fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
