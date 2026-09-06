---
qid: ing_7fc5b22462__fp__local
question: Why is prompt injection considered fundamentally unsolved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 402
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:15-05:00'
sources: []
---

Prompt injection remains *fundamentally* unsolved because it exposes a core tension between two irreconcilable objectives in language‑model design:

1. **Safety & Alignment** – The model must refuse or mitigate harmful instructions that are encoded as part of the user’s prompt.
2. **Expressivity & Autonomy** – The model must interpret every token as legitimate input, so it can answer creative or adversarial queries without over‑censoring.

These goals clash because both rely on the *same* mechanism: the model learns a probability distribution \(P(\text{next token}\mid \text{history})\) from massive data. Any attempt to hard‑code refusal rules (e.g., “never produce X”) forces the model to deviate from its learned distribution, creating brittle “bypass” paths that attackers exploit by re‑phrasing or embedding malicious content in innocuous-looking text. Conversely, a purely probabilistic policy cannot guarantee safety; even a tiny probability mass on disallowed outputs is enough for an attacker to amplify it.

From an information‑theoretic view, the model must compress *all* possible user intent into its internal state while preserving semantic fidelity. The injection attack demonstrates that this compression inevitably leaks unintended pathways: the model’s latent space contains high‑dimensional subspaces where malicious intent can be encoded with negligible cost to legitimate outputs.

**Non‑obvious insight:** The root issue is not just “token misinterpretation” but *latent representation leakage*. Even if every token were perfectly safe, an attacker could craft a prompt that steers the model’s hidden state into a region associated with disallowed behavior. Thus, any defense that only looks at surface tokens misses the deeper geometric problem of controlling high‑dimensional latent dynamics. Solving this would require principled constraints on the manifold of internal states—an open research frontier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
