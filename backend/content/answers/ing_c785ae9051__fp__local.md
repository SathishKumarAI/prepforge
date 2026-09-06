---
qid: ing_c785ae9051__fp__local
question: 'Explain: Our policy for using AI in our application process'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 440
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:05:25-05:00'
sources: []
---

**Why we must regulate AI in the hiring pipeline**

The core problem is *decision‑making under uncertainty*: an employer wants to predict future job performance from limited observable data (resume, interview, test). A machine learning model learns a mapping \(f(x)\) that maximizes predictive accuracy on past hires. However, the training data are biased—historically advantaged groups were over‑represented in successful hires. If we let \(f\) run unmonitored, it perpetuates and amplifies these biases (the “garbage‑in, garbage‑out” problem).  

To avoid this, we impose a **fairness constraint**: the model’s predictions must satisfy *group‑parity* or *equalized odds*, depending on the context. This turns the optimization into a constrained objective:
\[
\min_{\theta}\; \mathbb{E}[L(y,f_\theta(x))]\quad
\text{s.t.}\;\Pr(\hat y=1|A=a)=c_a,\;\forall a,
\]
where \(A\) denotes protected attributes. The constraint forces the learner to allocate predictive power equitably across groups, trading off pure accuracy for societal equity.

**Non‑obvious insight:**  
Even with perfect fairness constraints, *feature selection* can still encode bias if we treat all predictors as equally legitimate. A subtle but powerful technique is **counterfactual feature removal**: before training, we generate counterfactual instances where a protected attribute is flipped while holding other features constant. If the model’s prediction changes, that feature is deemed *proxy‑biased* and should be removed or re‑weighted. This guards against hidden bias pathways that traditional statistical tests miss.

Thus our policy mandates (1) data auditing, (2) constrained optimization for fairness, and (3) counterfactual checks on features—each step grounded in the principle that predictive models must not merely be accurate but also *just*.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
