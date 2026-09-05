---
qid: ing_14f38ef3e0__eli5__local
question: You have 500k instruction examples of mixed quality and compute budget to
  train on 20k. How do you choose the 20k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 264
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:08:30-05:00'
sources: []
---

Imagine a huge library with 500 000 books (your instruction examples). You only have room for 20 000 shelves, and the budget to read each book is limited.  

First, **rank** every book by two simple scores:  
1. *Relevance* – how well it matches the topic you want to teach the AI.  
2. *Quality* – how clear and correct its content is (e.g., no typos or contradictions).  

Next, mix those scores into a single “value” for each book. Think of it like giving each book a star rating that balances relevance and quality.  

Now, you have to pick the 20 000 highest‑scoring books. To keep the process fair, run a quick *shuffle* so that if several books have almost identical scores, you still get variety across different subtopics or styles.  

Finally, double‑check the chosen set: make sure it covers all major topics (no big gaps) and isn’t dominated by one author or style. That’s your curated training set—compact, diverse, and high‑value, ready for the AI to learn efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
