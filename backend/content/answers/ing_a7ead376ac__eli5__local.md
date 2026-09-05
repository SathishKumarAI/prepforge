---
qid: ing_a7ead376ac__eli5__local
question: 'Explain: Types of APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 344
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:14-05:00'
sources: []
---

**What’s an API?**  
Think of an API (Application Programming Interface) as a restaurant menu. The menu lists dishes you can order (functions), tells you the ingredients (parameters), and what comes back on your plate (output). You don’t need to know how the kitchen cooks; you just pick a dish, give the chef the needed details, and receive a finished meal.

**Types of APIs**

| Type | How it works | When you use it |
|------|--------------|-----------------|
| **Web/REST API** | Uses HTTP requests (GET, POST, etc.) to ask for data or tell the server to do something. | Fetching weather info, posting a tweet. |
| **GraphQL API** | You write a query that specifies exactly what pieces of data you want; the server sends back only those parts. | Apps needing custom views of user profiles. |
| **Library/SDK API** | A collection of pre‑written code in your own program’s language, exposing functions like “saveImage()”. | Adding payment processing to a mobile app. |
| **Hardware API** | Commands that talk directly to devices (e.g., controlling a robot arm). | Writing firmware for an IoT sensor. |

Each type is a different menu style—some are simple and fixed, others let you pick exactly what you need. The goal remains the same: provide a clear way for one part of software to ask another part for help without getting tangled in its internal workings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
