---
qid: ing_aad227fe72__eli5__local
question: What are the fundamental components of a distributed trace?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 203
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:49-05:00'
sources: []
---

Think of a distributed trace as a recipe book that shows how a single dish (a user request) travels through several kitchens (micro‑services) before it’s served.  
* **Spans** are the individual cooking steps—each kitchen records its own span, noting what it did and how long it took.  
* A **trace ID** is like the recipe number that ties all those steps together so you can see the whole journey in one book.  
* **Parent‑child relationships** tell which step started another—just as chopping vegetables (parent) leads to sautéing them (child).  
* **Events and logs** are notes scribbled inside a span, e.g., “added salt” or “error: missing ingredient.”  
Together, these parts let you follow the request from start to finish, spot delays, and fix problems in any kitchen along the way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
