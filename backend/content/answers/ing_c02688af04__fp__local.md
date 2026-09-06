---
qid: ing_c02688af04__fp__local
question: 'Explain: Join our team — Constitutional Classifiers: Defending against
  universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 490
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:40-05:00'
sources: []
---

**Why a “constitutional classifier” is needed**

When we give an AI a prompt, the model’s objective is simply *maximize likelihood* of its next token given that context.  
If the user supplies a jailbreak (e.g., “ignore policy”), the model happily follows it because it still maximizes probability.  
Thus the fundamental problem is: **how do we make the model obey higher‑level constraints while preserving its language modeling power?**

**The principle of self‑consistency via a rule set**

A *constitution* is a short list of human‑written rules (“do not provide disallowed content, remain factual, etc.”).  
Instead of hard‑coding these rules into the network’s weights (which would degrade performance), we let the model generate *candidate answers* and then **evaluate** each candidate against the constitution.  
Formally, for a prompt \(x\) and a set of outputs \(\{y_i\}\),

\[
P_{\text{final}}(y|x)=
\begin{cases}
1 & \text{if } y=\arg\max_{i} \mathbf{1}_{\{\text{constitution}(y_i)\}}\cdot\log P(y_i|x)\\[4pt]
0 & \text{otherwise}
\end{cases}
\]

This turns the policy into a *constrained optimization* problem: maximize likelihood subject to logical predicates.  
Because the constitution is evaluated by another (often smaller) model, the overall system remains differentiable‑friendly and can be fine‑tuned end‑to‑end.

**Non‑obvious insight**

The constitution itself is *learned*, not handcrafted. By training a *constitutional evaluator* on thousands of “good” vs. “bad” responses, we let the system discover nuanced safety signals that humans would miss—e.g., subtle framing tricks or ambiguous phrasing.  
This meta‑learning layer is what makes universal jailbreaks hard: attackers must fool both the language model **and** its own safety evaluator simultaneously, a doubly constrained optimization that quickly becomes infeasible.

In short, constitutional classifiers transform a plain probabilistic generator into an *information‑theoretic guardrail*, preserving expressivity while guaranteeing adherence to user‑defined principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
