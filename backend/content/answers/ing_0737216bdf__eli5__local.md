---
qid: ing_0737216bdf__eli5__local
question: 'Explain: Types of data architecture — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 255
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:47:05-05:00'
sources: []
---

Imagine you’re building a giant library that will teach a robot how to read and answer questions.  
**Data architecture** is the blueprint that tells the robot where every book (data) lives, how it’s organized, and how it can be fetched quickly.

There are three main “rooms” in this library:

1. **Raw‑data room (Data Lake)** – a huge storage hall where all kinds of unprocessed files arrive, just as they were collected from sensors, websites, or apps.  
2. **Curated‑data wing (Data Warehouse)** – a tidy, sorted section where the books have been cleaned, labeled, and arranged into tables that make sense for business questions.  
3. **Feature‑store alcove (Feature Store)** – a special shelf where pre‑made, reusable “features” (like average daily temperature or user click‑rate) are kept so every machine‑learning model can pick the exact items it needs without re‑creating them.

By designing these rooms correctly, the robot can find the right data fast, train smarter models, and answer questions reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
