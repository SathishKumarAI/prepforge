---
qid: ing_9c49c4e0c2__eli5__local
question: 'Explain: Remove a Table from the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 216
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:04-05:00'
sources: []
---

Think of your Supabase database like a well‑organized pantry. Each **table** is a shelf holding a specific type of food (data). The **GraphQL API** is the set of instructions you give to a robot that can fetch or delete items from those shelves.

When you “remove a table” you’re telling the robot, *“Take this whole shelf out and throw it away.”* In GraphQL terms, you send a **mutation** (an action command) called `deleteTable` with the name of the shelf. The API checks that you have permission to do so, then deletes every row on that shelf and removes the shelf’s definition from the pantry.

So:  
- **Mutation** = instruction to act.  
- **Table name** = which shelf to delete.  
The robot (Supabase) performs the deletion instantly, leaving your pantry clean and ready for new shelves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
