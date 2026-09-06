---
qid: ing_976b5d8681__fp__local
question: 'Explain: Use case: User views the user timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 430
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:27:22-05:00'
sources: []
---

**Use‑case: “User views the user timeline”**

At its core, the timeline is a *ranking problem*: given a set of candidate tweets \(C\) (posts from followed users, promoted content, replies, etc.), we must order them to maximize a utility function \(U(t)\) for each tweet \(t\).  
The system solves this by learning a scoring model that estimates \(U(t)=f(x_t; \theta)\), where \(x_t\) is a feature vector encoding author credibility, recency, user interests, and interaction history.  

Why it must work this way:

1. **Optimization** – The objective is to maximize engagement (click‑through, likes, replies). This turns the ranking into an *online convex optimization* problem: adjust \(\theta\) so that higher‑utility tweets receive higher scores.
2. **Information theory** – Each tweet carries a signal about user intent. By treating the timeline as a noisy channel, we infer the most informative sequence that keeps the user in the system’s receptive field (maximize mutual information between displayed tweets and future actions).
3. **Geometry** – Tweets live in a high‑dimensional embedding space; ranking is equivalent to projecting onto a *utility hyperplane* defined by \(\theta\). The optimal projection preserves local structure (similarity) while enforcing global constraints (freshness, diversity).

A non‑obvious insight: *Temporal decay should be learned jointly with content relevance.* Instead of hard‑coding a fixed decay function for recency, we let the model learn how quickly different users’ attention wanes. This captures subtle behavioral patterns—e.g., a user who reads long threads may tolerate older content longer than one scrolling quickly. By embedding time as a learnable feature, the system adapts to heterogeneous engagement dynamics without manual tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
