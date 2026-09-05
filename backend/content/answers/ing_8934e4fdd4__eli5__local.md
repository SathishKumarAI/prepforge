---
qid: ing_8934e4fdd4__eli5__local
question: Design a retrieval evaluation harness the team will actually use. What runs,
  when, and what blocks a merge?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 211
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:14:09-05:00'
sources: []
---

Imagine your AI system is a chef who must pick the best ingredients (retrieved documents) for each recipe (user query).  
**What runs:**  
1. **Ingredient fetcher** – pulls candidate documents from the database.  
2. **Taste tester** – scores each document with a relevance model.  
3. **Recipe checker** – compares the top‑k results to a gold standard set of correct answers.

These three steps run every time a new batch of queries is evaluated, automatically generating an “accuracy score.”  

**When it blocks a merge:**  
- If the accuracy drops below a preset threshold (e.g., 0.85), or  
- If the model’s latency exceeds the allowed limit (e.g., 200 ms per query).  

Only when both conditions are satisfied does the team approve merging the new code into production, ensuring every version of the AI keeps delivering reliable, timely answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
