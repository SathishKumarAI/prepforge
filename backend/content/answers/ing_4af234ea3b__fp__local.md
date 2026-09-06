---
qid: ing_4af234ea3b__fp__local
question: 'Explain: What we’re building—and why — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 350
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:44:38-05:00'
sources: []
---

**What we’re building**

We’re developing an end‑to‑end “career navigator” that turns raw professional data (skills, projects, performance metrics) into a *probabilistic map* of optimal growth paths for every employee.

**Why it must work this way**

1. **Fundamental problem** – Human talent is sparse and highly heterogeneous; managers need to match people to roles at scale while avoiding bias.  
2. **Probabilistic reasoning** – Each skill or experience has a *probability* of contributing to success in a given role. By aggregating these probabilities we obtain an objective likelihood score for each candidate‑role pair, rather than a binary fit/no‑fit rule.  
3. **Information theory** – The model maximizes the mutual information between employee attributes and role performance. This guarantees that the recommendations are *most informative* about future success, not just most frequent or historically safe choices.  
4. **Optimization under constraints** – We solve a constrained assignment problem (budget of promotions, diversity targets) using convex optimization, ensuring feasibility while still maximizing expected career progression.

**Non‑obvious insight**

Most systems treat skill matching as a *static* similarity measure. Our approach treats it as a *dynamic trajectory*: the model learns how an employee’s probability vector evolves over time with each new project or training, allowing it to anticipate future fit rather than merely react to current data. This forward‑looking stance turns career planning from a snapshot into a predictive journey, giving both employees and managers actionable foresight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
