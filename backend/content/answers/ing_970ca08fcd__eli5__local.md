---
qid: ing_970ca08fcd__eli5__local
question: 'Explain: Interview Notes - Zomato Design — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 266
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:37:24-05:00'
sources: []
---

Imagine you’re the head chef of a huge kitchen called **Zomato**, where every dish (restaurant) must be served to diners in the right order and with the right flavor. In the interview, the design team asked you to build a “menu‑planner” that decides which dishes should appear first on the screen.

The key idea was to treat each dish like a *recipe card* that carries three ingredients:  
1. **How many people liked it** (popularity).  
2. **How fresh the ingredients are** (recency of reviews).  
3. **How close it is to the diner’s taste profile** (personalization).

Your job was to write a recipe‑mixing algorithm that weighs these ingredients, then “plates” the top cards for each user. The interview notes show how you’d test this by simulating diners with different tastes and measuring if they pick more food when the menu feels tailored.

In short, it’s about mixing popularity, freshness, and personal taste into a single score—just like combining spices to create a dish that everyone loves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
