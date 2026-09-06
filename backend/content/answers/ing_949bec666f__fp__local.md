---
qid: ing_949bec666f__fp__local
question: 'Explain: Customer Outcomes — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 387
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:21:12-05:00'
sources: []
---

**Customer Outcomes – Jobs at Glean**

At its core, a *customer outcome* is the value that a user actually derives when they complete a **job‑to-be-done** (JTBD) with a product. In Glean’s context, the job is “find the right information quickly across an organization.” The fundamental problem: employees waste time scouring disparate data silos; productivity decays exponentially with search latency.

1. **Why it must work that way**  
   - **Information entropy:** Each irrelevant document adds noise \(H_{\text{noise}}\). Reducing noise by filtering relevant content lowers the overall entropy, yielding a clearer signal for the user.  
   - **Optimization principle:** The objective is to minimize search time \(T\) while maximizing relevance \(R\): \(\min_T \max_R L(T,R)\), where \(L\) is a loss function combining latency and accuracy. Glean’s algorithms approximate this Pareto frontier by learning contextual embeddings that collapse high‑dimensional document spaces into low‑dimensional, query‑centric manifolds.

2. **Deeper insight**  
   The non‑obvious part is that *customer outcomes are not merely outputs of the product*, but *feedback signals* that shape future model updates. Each click or dwell time becomes a reinforcement signal \(r_t\), updating policy \(\pi_\theta\) in an online bandit setting. Thus, Glean’s “product” is simultaneously a **policy learner** and a **service provider**, blurring the line between ML research and SaaS delivery.

In short, customer outcomes at Glean are engineered by aligning entropy reduction with JTBD optimization, then continuously refining the model through real‑time outcome feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
