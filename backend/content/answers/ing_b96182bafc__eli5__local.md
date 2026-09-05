---
qid: ing_b96182bafc__eli5__local
question: 'Explain: Amazon Trees and Graphs — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 258
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:13-05:00'
sources: []
---

Think of a **decision tree** as a flowchart you draw on paper to decide what to do next.  
At the top is a question (“Is the customer over 30?”).  
If “yes” you go down one branch; if “no”, another.  
Each leaf (end point) gives an answer, like “buy now” or “send discount.”  
In interviews Amazon asks how you’d build such a tree: pick the best question at each step (the feature that splits data most cleanly), stop when you’re confident enough, and prune any branches that add noise.

A **graph** is just a collection of nodes connected by edges—think of cities linked by roads.  
In ML, graphs model relationships (e.g., social networks or product recommendations).  
Amazon’s questions often involve finding the shortest path (“quickest way to recommend a product”) or detecting communities (“groups of users that interact together”).  

So: trees are tidy, one‑direction decision paths; graphs are messy, many‑to‑many connections. Both let you solve real problems by asking the right question at each step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
