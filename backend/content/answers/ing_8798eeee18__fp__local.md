---
qid: ing_8798eeee18__fp__local
question: 'Explain: Capturing the briefing — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 337
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:52-05:00'
sources: []
---

**Capturing the Briefing – The First Step of a Mobile System‑Design Interview**

When an interviewer says *“describe how you would build X on mobile”*, they’re asking you to formalise a **decision problem**: *Given constraints (bandwidth, battery, latency) and user goals (fast, reliable), what architecture maximises overall utility?*  
1. **Unpack the requirement** – ask clarifying questions that reveal hidden objectives (e.g., “Is offline support critical?”). Each answer is a *constraint* or *objective weight*.  
2. **Translate to an optimization problem** – model resources as variables (CPU cycles, memory) and user experience as a utility function. The brief becomes the objective \( \max U(\text{latency}, \text{battery}, \text{data usage})\).  
3. **Select design primitives** – choose components (local cache, background sync, push notifications) that alter variables in predictable ways; each primitive can be represented as a linear transformation on resource budgets.  
4. **Validate with invariants** – ensure the system satisfies *monotonicity* (more resources never hurt utility) and *feasibility* (resource constraints are respected).  

A non‑obvious insight: **the brief itself is a probabilistic model of user behavior**. By treating ambiguous statements as priors, you can design a system that remains optimal even when the interviewer later shifts emphasis—mirroring Bayesian updating in real deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
