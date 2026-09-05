---
qid: ing_2e12afebf2__fp__local
question: 'Explain: Anki flashcards — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 329
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:51-05:00'
sources: []
---

**Why those Anki cards are a powerful study tool**

The *system‑design-primer* repository bundles its content as Anki decks because the underlying learning problem is **spaced repetition of combinatorial knowledge**.  
In system design you must recall millions of possible interactions (caches, queues, sharding strategies) and decide which subset fits a new requirement.  The brain stores facts as *associations*, not as isolated nodes; if each card forces you to retrieve an association under realistic constraints (latency, cost, consistency), the retrieval pathway is strengthened.

Anki implements **exponential forgetting curves**: after every recall, it schedules the next review at a time that maximises retention with minimal effort.  This aligns with the *information‑theoretic* principle of optimal sampling—each review is chosen to reduce entropy about a fact as efficiently as possible.

The non‑obvious insight is that **card design matters more than card count**.  
A well‑crafted prompt (“What trade‑off does a read‑through cache introduce?”) forces the learner to *simulate* a design decision, not just regurgitate an answer.  This mirrors the interview’s evaluation of problem‑solving, turning passive memorisation into active reasoning.

So, by converting the primer’s vast combinatorial space into spaced‑repetition cards that demand contextual recall, the repository turns knowledge acquisition into an evidence‑based optimisation process—exactly what system designers need to master.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
