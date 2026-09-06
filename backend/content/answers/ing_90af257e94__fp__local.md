---
qid: ing_90af257e94__fp__local
question: 'Explain: Level 1: Unit Tests — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 555
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:12:52-05:00'
sources: []
---

### Why “Level 1: Unit Tests – Your AI Product Needs Evals” is the first step

When an AI system outputs a value \(y=f(x)\), we care about **reliability**—that every call to \(f\) behaves as specified.  
In classical software, unit tests assert that a function’s *interface* and *logic* remain intact after refactorings.  
For AI, the same idea is true but with an extra dimension: **data drift**.  
The input distribution \(P_X\) can shift between training and deployment; a model that once produced correct outputs may start to fail silently.

#### Fundamental problem
We want *local* guarantees: for any single inference request, the model should respect its contract (e.g., return a probability in \([0,1]\), not NaNs).  
If a unit test fails, it indicates a **deterministic bug**—a code path that was never exercised before.  
Without catching these early, an entire downstream pipeline can break.

#### Why the “eval” terminology?
In machine learning we usually talk about *evaluations* on held‑out datasets to estimate generalization error.  
Here, the author re‑uses the word because the unit tests themselves are **evaluations** of a sub‑model’s behavior: they assess the function \(f\) against a small, curated set of inputs.

#### Connection to deeper principles
- **Optimization**: Unit tests constrain the search space for developers. If a refactor introduces a new failure mode, the test will fail, preventing that direction from being accepted.
- **Information theory**: By asserting output ranges and types we reduce uncertainty about the model’s behavior—essentially compressing the “model‑output distribution” into a deterministic envelope.
- **Geometry**: The tests carve out a safe region in input space where the function is known to behave correctly. If an inference lands outside, it triggers a diagnostic.

#### Non‑obvious insight
Many people think unit tests are only for *code* bugs. In AI, they also guard against **model‑induced failures** that arise from numerical instabilities (e.g., exploding logits) or edge‑case inputs (division by zero). A single misbehaving inference can cascade into a production outage; thus, unit tests become the *first line of defense* for both code and model integrity.

In short, Level 1 unit tests are not just sanity checks—they formalize an **error budget** for AI inference, ensuring that every call to your model is a reliable building block.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
