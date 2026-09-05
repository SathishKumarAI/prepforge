---
qid: vq_9abd25f7a2__eli5__local
question: What are the three degrees of normalization and how is normalization done
  in each degree?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 331
total_tokens: 495
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:32-05:00'
sources: []
---

Imagine your kitchen cabinets as a database table.  
You want every item (data) to be stored once so you don’t have to rummage through duplicate shelves.

**First Normal Form (1NF)** – *No duplicates in a single drawer.*  
Each cell holds only one value, and each row is distinct. Think of putting every ingredient on its own plate, not mixing apples and oranges together in the same spot.

**Second Normal Form (2NF)** – *Everything that depends on a part of the key goes into its own drawer.*  
If a row’s primary key is made of two parts (say “recipe” + “ingredient”), any data that relies only on one part should move to another table. It’s like having a separate shelf for all spices used in baking, so you don’t keep them mixed with general pantry items.

**Third Normal Form (3NF)** – *No indirect dependencies.*  
If A depends on B and B depends on C, store A directly with C instead of going through B. In our kitchen, that means if “sugar” is needed for “cake” and “cake” is needed for “birthday party,” you put sugar straight in the birthday‑party shelf rather than only via cake.

So, 1NF keeps cells atomic, 2NF removes partial key dependencies, and 3NF eliminates transitive (indirect) dependencies. The result: a tidy kitchen where every ingredient sits exactly where it belongs, making cooking—and querying—fast and error‑free.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
