---
qid: ing_aabb9935ee__fp__local
question: 'Explain: Ambiguity clarification — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 470
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:24-05:00'
sources: []
---

### Why an “Ambiguity Clarification – Text‑to‑SQL” agent is essential

When a user writes a natural‑language query, the *semantic space* of that sentence is vast: each word can refer to multiple schema elements (tables, columns, predicates) and many different execution plans exist.  
The fundamental problem is **disambiguation under uncertainty**—choosing the unique SQL that implements the user’s intent while respecting the database schema.

1. **Formalisation**  
   Let \(Q\) be a natural‑language sentence and \(\mathcal{S}\) the set of all possible SQL plans consistent with the catalog.  
   The agent must find \(\arg\max_{s\in\mathcal{S}} P(s|Q)\).  
   This is a Bayesian inference problem where the prior \(P(s)\) encodes schema statistics (frequent joins, cardinalities), and the likelihood \(P(Q|s)\) captures linguistic cues.

2. **Why it must work this way**  
   *Optimization*: The search space \(\mathcal{S}\) is combinatorial; a greedy or beam‑search decoder guided by the posterior avoids exponential blow‑up.  
   *Information theory*: Each clarification reduces entropy in \(P(s|Q)\); asking targeted questions (e.g., “Which table contains `date`?”) maximises expected information gain.  
   *Geometry*: The space of SQL plans can be visualised as a graph; clarifications prune this graph to a single path.

3. **Non‑obvious insight**  
   Most systems treat clarification as a linear dialogue, but the optimal strategy is **adaptive questioning**: early queries should target the highest‑variance schema attributes (those with many possible mappings). This shifts the burden from the user to the agent’s uncertainty model, yielding faster convergence and fewer turns.

In short, the agent solves a probabilistic inference problem over a combinatorial plan space; it does so by actively reducing entropy through strategically chosen clarifications, guided by Bayesian optimisation rather than static templates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
