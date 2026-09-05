---
qid: ing_5ab9187b84__eli5__local
question: 'Explain: III. Config — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 240
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:10-05:00'
sources: []
---

**The “Config” factor in a 12‑Factor App**

Think of your app as a **recipe book** that you can share with anyone who wants to cook it, but the recipe itself never changes its instructions. The only thing that varies is the ingredients you add—how much salt, what kind of flour, or whether you bake at 350 °F or 375 °F. In software, those variable ingredients are called **configuration**.

*Configuration* means any data that tells your app how to run in a particular environment: database URLs, API keys, email server addresses, and even feature‑flag switches. The key rule is: keep all of this information outside the codebase, in environment variables or external files that the operating system can supply when you start the app.

By separating configuration from code, you can deploy the same binary to a dev machine, a staging server, and production without touching its source—just change the “ingredients” (environment variables) each time. This keeps your app portable, secure, and easy to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
