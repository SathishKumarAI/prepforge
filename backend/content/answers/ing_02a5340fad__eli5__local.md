---
qid: ing_02a5340fad__eli5__local
question: 'Explain: Evaluation plan — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 218
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:39:21-05:00'
sources: []
---

Imagine you’re teaching a new robot librarian that can find books by understanding what you really mean, not just matching exact words. **Evaluation plan** is the set of tests you give this librarian to see how well it works.

First, you create a *test set*: a list of questions and the books that should come up. Then you ask the librarian for each question and record which books it returns.  

You compare those results to the “gold standard” (the right books) using simple scores:  
* **Precision** – how many returned books are actually relevant?  
* **Recall** – how many of the relevant books did it find?  

Finally, you look at the overall score and maybe tweak the librarian’s settings until its precision‑recall balance is just right. This cycle—prepare questions, run searches, measure scores, adjust—ensures your semantic search keeps getting smarter and more accurate over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
