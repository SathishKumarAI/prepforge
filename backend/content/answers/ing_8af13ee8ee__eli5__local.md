---
qid: ing_8af13ee8ee__eli5__local
question: 'Explain: Trees (15 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 281
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:16:37-05:00'
sources: []
---

Think of a decision tree like a choose‑your‑own‑adventure book that helps you guess something—say whether a fruit is an apple or a banana.  
At the top (the *root*), you ask one question: “Is it red?” The answer splits the story into two branches. Each branch is another question (“Does it have a stem?”, “Is it sweet?”). You keep asking questions until you reach a leaf that says “Apple” or “Banana.”  

In machine learning, a **decision tree** works exactly like this:  
* **Node** – a spot where we ask a question (a split rule).  
* **Leaf** – the final answer or prediction.  
The algorithm learns which questions to ask by looking at many labeled examples and choosing splits that separate the classes as cleanly as possible.  

Just as you follow a path from start to finish in the book, the model follows one path down its tree to make a decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
