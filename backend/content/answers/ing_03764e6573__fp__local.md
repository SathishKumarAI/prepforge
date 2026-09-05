---
qid: ing_03764e6573__fp__local
question: 'Explain: Clarifying Questions to Ask — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 437
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:12:27-05:00'
sources: []
---

**Why ask clarifying questions?**  
At its core, an AI system is a *function* that maps inputs \(x\) to outputs \(y\). The training data only reveals the statistical relationship \(\Pr(y|x)\); it never tells us the *intention* behind each input. When we receive a user request, we must infer which latent variable (the true intent) generated the observed utterance. This inference is ill‑posed unless we reduce ambiguity—exactly what clarifying questions do: they collect additional evidence \(z\) that sharpens our posterior \(\Pr(y|x,z)\).

**Derivation from information theory**  
The value of a question is its *expected reduction in entropy*:
\[
I(z;x)=H(x)-H(x|z).
\]
A well‑designed clarifying question maximizes this mutual information while keeping the cost (time, cognitive load) minimal. Thus, we should target questions that split the hypothesis space into roughly equal halves—akin to binary search in a decision tree.

**Geometric intuition**  
In high‑dimensional feature space, each intent corresponds to a region. A clarifying question acts as a hyperplane that bisects this space, pushing the point closer to a single region. Without such splits, the model remains stuck on a manifold of overlapping intents.

**Non‑obvious insight**  
Most people treat clarification as a courtesy, not a *strategic* tool. The key is **adaptive question sequencing**: early questions should be cheap and highly informative; later ones can afford cost because the remaining uncertainty is already low. This mirrors *active learning*, where sampling decisions are guided by expected model improvement rather than sheer novelty.

In practice, implement a lightweight entropy‑based selector that proposes the next question, then re‑evaluate after each user response—thereby turning clarification into an optimal, data‑driven dialogue strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
