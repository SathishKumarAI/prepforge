---
qid: ing_e0433964e8__eli5__local
question: 'Q62: Your search results are relevant but the LLM ignores them and answers
  from its training data. How do you fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 193
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:48-05:00'
sources: []
---

Imagine your AI is like a student who has read many books (its training data) and also has a library of reference books that it can look up when asked a question (the search results).  
Sometimes the student forgets to check the reference books and just recites what he learned from his own notes. To stop this, you give him a simple rule: **“Always open the library first before speaking.”**  

In practice you do two things:

1. **Tell the AI to “look up” the search results each time it gets an answer prompt.**  
2. **Add a small instruction that says “use the information from those results, not just what you already know.”**

This nudges the model to read the fresh facts before replying, so its answers come from the latest data rather than only its old training memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
