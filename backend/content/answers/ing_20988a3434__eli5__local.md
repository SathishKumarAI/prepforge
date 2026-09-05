---
qid: ing_20988a3434__eli5__local
question: 'Explain: Object-oriented design interview questions with solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 313
total_tokens: 470
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:27:50-05:00'
sources: []
---

Think of an **object‑oriented design (OOD) interview** like planning a city for a new neighborhood.  
The interviewer asks you to build the “city” (the software) using only the tools that exist in your toolbox (classes, objects, inheritance).  

1. **Identify entities** – Like picking out houses, parks, and roads. You list real‑world items that will become *classes* (e.g., `Car`, `User`).  
2. **Define relationships** – Decide who lives where: *composition* is a house made of rooms (a `House` contains `Room`s), *inheritance* is a “sports car” inheriting from `Car`.  
3. **Encapsulate behavior** – Each building has its own rules: a `BankAccount` knows how to `deposit()` or `withdraw()`.  
4. **Use interfaces** – Think of a utility pole that can carry electricity, water, or internet; the specific service is chosen later.

When you sketch this plan on paper, you’re answering typical questions like “Design a library system” or “Model a ticket booking app.” The solution shows clear classes, their responsibilities, and how they talk to each other—just as a city map shows streets, buildings, and utilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
