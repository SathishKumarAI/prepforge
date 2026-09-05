---
qid: ing_a0e20c1bf0__eli5__local
question: 'Explain: 1.11. Ensembles: Gradient boosting, random forests, bagging, voting,
  stacking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 284
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:52:58-05:00'
sources: []
---

Think of a big decision‑making committee that has to pick the best recipe for a cake.  
Each member (a **model**) tastes a small sample and gives its opinion.  

* **Bagging** – every member gets a different random slice of the same cake, so their mistakes differ; then we take the average taste (the **average vote**).  
* **Random forests** – like bagging but each member also looks at only a few ingredients before tasting, which makes the group even more diverse.  
* **Gradient boosting** – imagine the committee starts with one weak recipe and, after each round, only the members who made the biggest mistake adjust their suggestions. The final recipe is the weighted sum of all these tweaks.  
* **Voting** – simply count how many members favor a particular cake; the majority wins.  
* **Stacking** – run several different committees (bagging, boosting, etc.) and then have a master chef look at their combined opinions to make the final call.

In short: bagging & random forests build diverse “taste” pools; boosting learns from errors step by step; voting chooses the majority opinion; stacking blends several committees into one smarter decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
