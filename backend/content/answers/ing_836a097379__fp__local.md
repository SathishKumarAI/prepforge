---
qid: ing_836a097379__fp__local
question: 'Explain: Reasoning and Chain-of-Thought — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 555
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:44:41-05:00'
sources: []
---

**Why a LLM needs a “chain of thought”**

When a language model is asked to solve a problem that requires several logical or arithmetic steps, the target token sequence must encode *both* the final answer and all intermediate reasoning that justifies it.  
In standard maximum‑likelihood training the loss only cares about reproducing the ground‑truth text; if the training data rarely contains explicit step‑by‑step explanations, the model learns a shortcut: “guess the answer directly” by memorising correlations between prompts and answers.  

The fundamental problem is *inference without an explicit intermediate state*.  
Mathematically, we want to approximate

\[
P(y \mid x) = \sum_{z} P(y,z \mid x)
\]

where \(x\) is the prompt, \(y\) the answer and \(z\) a latent reasoning chain.  
Because \(z\) is unobserved during training, the model collapses to a degenerate distribution where it marginalises over many possible chains—often choosing the most frequent but wrong one.

**Chain‑of‑Thought as an implicit variational approximation**

By prompting the model with “Let’s think step by step” we force it to generate a *proposal* \(z\) before outputting \(y\).  
The decoder then maximises

\[
P(z \mid x)\,P(y \mid z,x)
\]

which is a tractable lower bound on the true joint.  
This mirrors variational inference: the model learns to produce high‑probability intermediate plans that are consistent with both the prompt and the final answer.

**Non‑obvious insight**

Most people treat chain‑of‑thought as just “more text”. The deeper point is that it *creates an internal latent space of symbolic programs*.  
When the model outputs a reasoning chain, it is implicitly learning to map prompts to structured representations (e.g., short programs) that can be recombined for unseen problems.  
This explains why chain‑of‑thought improves out‑of‑distribution generalisation: the model isn’t memorising answers; it’s building reusable subroutines in its hidden state.

In sum, chain‑of‑thought turns a black‑box language model into an *implicit program synthesiser*, bridging statistical learning with symbolic reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
