---
qid: ing_3885323adf__fp__local
question: 'Explain: Role-based access control — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 426
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:04:48-05:00'
sources: []
---

**Why a role‑based model is indispensable**

An enterprise must decide *who can do what* on any resource while keeping the policy manageable.  
From an information‑theoretic point of view, each request \(r=(u,a,rsc)\) generates a binary decision \(\delta\in\{0,1\}\). The set of all admissible decisions defines a *policy space*. A naïve user‑by‑user table is exponential in users; it cannot be stored or audited.  

**Enter the role abstraction.**  
A *role* \(R_i\) is defined as a set of permissions \(\{p_{ij}\}\). Every user \(u\) inherits all permissions from the roles assigned to them:  

\[
P(u)=\bigcup_{R_i\in \mathcal{R}(u)} P(R_i)
\]

Thus, the policy space collapses from \(O(2^{|U|\cdot |A|\cdot |S|})\) to \(O(|R|\cdot |P|)\). This compression is a direct application of *set‑theoretic closure*—permissions are closed under role composition.

**Deep principle: compositionality.**  
Roles act like algebraic generators; permissions are the “atoms.” By enforcing a *partial order* (role hierarchy) we obtain a lattice where least upper bounds represent composite roles, and greatest lower bounds represent common permissions. This structure guarantees that adding or removing users does not ripple through the entire policy.

**Non‑obvious insight:**  
Most implementations treat roles as flat lists, but if you expose the role lattice to *policy writers*, they can create *contextual roles* (e.g., “Finance + Audit” for a quarterly review). This reduces “role explosion” and aligns the authorization model with business processes, not just data models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
