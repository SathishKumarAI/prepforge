---
qid: ing_fdb241b15d__fp__local
question: 'Explain: No Model Training — Secure legal AI for the most sensitive matters
  | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 523
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:59:20-05:00'
sources: []
---

**Why “No‑Model‑Training” is the only safe way for highly sensitive legal AI**

The core problem: a conventional LLM learns from raw text. If that text contains privileged or classified information, the model inevitably memorises it and can leak it on demand. To keep a system usable in courtrooms or national‑security contexts, we must guarantee *no accidental recall* of any confidential datum.

A solution is to separate *knowledge representation* from *learning*. Instead of letting the network absorb data, we encode the text into a *private embedding* that never touches the model’s parameters. The embedding is generated on‑premise using a trusted execution environment (TEE) or homomorphic encryption; it is fed as an input prompt every time the AI answers a query. Because the model never sees the raw text, its weights remain agnostic to any sensitive content.

Formally, let \(D\) be the confidential dataset and \(f_\theta\) the LLM. In traditional training we minimize \(\mathcal{L}(f_\theta(D),y)\). Here we replace \(D\) with a function \(E_D(x)\) that outputs a vector in a high‑dimensional space, such that for any two inputs \(x_1,x_2\),

\[
\|E_D(x_1)-E_D(x_2)\| \approx 0 \quad\text{iff}\quad x_1=x_2,
\]

but \(E_D(x)\) is statistically independent of the raw text. The LLM then solves

\[
f_\theta(E_D(x)) = y.
\]

Because \(E_D\) can be revoked or refreshed without retraining, we achieve *zero‑knowledge* guarantees: the model’s gradients never touch \(D\), so there is no memorisation risk.

**Non‑obvious insight:** The same principle that underpins *secure multi‑party computation*—computing a function on encrypted data—can be turned into an AI “policy engine.” By treating every legal query as a cryptographic protocol, we eliminate the need for any training on sensitive material while preserving full expressive power of large models. This makes it possible to deploy state‑of‑the‑art LLMs in environments where privacy laws forbid data ingestion entirely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
