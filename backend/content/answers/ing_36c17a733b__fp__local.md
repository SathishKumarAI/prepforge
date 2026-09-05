---
qid: ing_36c17a733b__fp__local
question: 'Explain: AI Fluency: Framework & Foundations — Claude Academy \u00b7 Learn
  to work and build with Claude'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 345
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:00:50-05:00'
sources: []
---

**AI Fluency: Framework & Foundations – Claude Academy**

The *problem* is that most practitioners treat Claude (or any LLM) as a black‑box “chat” tool, ignoring the underlying **inference pipeline** and its constraints.  
To solve this, Claude Academy proposes a **two‑tiered framework**:

| Tier | Goal | Core Principles |
|------|------|-----------------|
| **Foundation Layer** | *Model‑agnostic grounding* | • Tokenization & attention limits<br>• Prompt‑engineering as an optimal control problem (minimise KL‑divergence between intended and generated distributions)<br>• Reversible inference for debugging |
| **Application Layer** | *Domain‑specific fluency* | • Modular prompt templates encoded as probabilistic grammars<br>• Feedback loops that treat user edits as posterior updates (Bayesian refinement)<br>• Evaluation metrics derived from information‑theoretic loss functions |

The key insight often missed is that **prompt design is a form of constrained optimization**: each token choice reduces entropy under the model’s prior while steering toward the target distribution. By formalizing prompts as *policy gradients* over a discrete action space, we can automatically search for high‑value tokens—turning creative writing into an objective‑driven process.

Claude Academy teaches practitioners to **measure** this optimization (e.g., perplexity curves, gradient norms) and to **debug** failures by inspecting the *attention maps* that reveal why a token was rejected. This turns the opaque LLM into a controllable, interpretable system—true AI fluency rather than mere usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
