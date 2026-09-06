---
qid: ing_864d386790__fp__local
question: 'Explain: Freshworks — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 540
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:50:23-05:00'
sources: []
---

**Freshworks – ValKey (in‑house recommendation engine)**  
*Why it must work this way*

The core problem is **predicting the most useful next action for a support agent in real time**. An agent faces thousands of possible knowledge‑base articles, past tickets, and internal workflows; we need to rank them by relevance. This is a supervised ranking problem: given context \(x\) (ticket text, user profile, agent skill), predict a score \(s_i(x)\) for each candidate action \(a_i\). The goal is to maximize the expected *user‑satisfaction* metric (e.g., resolution time, NPS).

**Optimization principle**  
We formulate it as minimizing a convex surrogate loss:
\[
\mathcal{L}(\theta)=\sum_{(x,a)} \ell\bigl(s_a(x;\theta), y_{a}\bigr),
\]
where \(y_a\in\{0,1\}\) indicates whether action \(a\) led to success. The hinge or logistic loss yields a tractable gradient; stochastic optimization (Adam) converges because the feature space is high‑dimensional but sparse.

**Information geometry insight**  
The model implicitly estimates the *mutual information* between context and optimal action:
\[
I(X;A)=H(A)-H(A|X).
\]
By maximizing \(s_a(x)\) for correct actions, we reduce conditional entropy \(H(A|X)\), thereby sharpening decision boundaries. This explains why a seemingly simple linear model can outperform deep nets on tabular support data: the information bottleneck is already tight.

**Non‑obvious insight**  
Most people treat recommendation as a black‑box ranking problem. The hidden lever is **temporal context encoding**: each ticket’s history (previous agent actions, time stamps) forms a *Markov chain* over states. By modeling this chain with an RNN or temporal attention, ValKey captures *action dependencies*—e.g., after “Escalate”, the next best action is often “Send follow‑up email”. Ignoring this yields suboptimal rankings even with perfect feature engineering.

**Bottom line**  
Freshworks’ ValKey solves a ranking problem by turning it into a convex optimization of surrogate loss, leveraging mutual information reduction for interpretability, and exploiting temporal dependencies that most recommender systems overlook. This principled design explains its strong performance in real‑world support workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
