---
qid: ing_d2f2838a6b__fp__local
question: 'Explain: Core Compliance Obligations for High-Risk AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 423
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:34-05:00'
sources: []
---

**Core Compliance Obligations for High‑Risk AI**

High‑risk AI systems (e.g., medical diagnostics, autonomous driving) must **minimise unintended harm** while preserving the system’s intended function.  
At a first‑principles level this translates into four obligations:

1. **Transparency & Explainability** – The system must generate *auditable* evidence that its decisions can be traced to input data and design choices. This is an information‑theoretic requirement: the entropy of the decision process should be low enough for humans to reconstruct it, guaranteeing that the algorithm’s mapping from inputs to outputs is not a black box.

2. **Robustness & Safety** – The system must tolerate realistic perturbations (adversarial attacks, sensor noise) without catastrophic failure. This is a geometric constraint: the decision boundary must be smooth and well‑separated in high‑dimensional feature space, ensuring that small input changes do not cross class thresholds.

3. **Data Governance & Fairness** – Training data must be representative, free from bias, and subject to privacy safeguards. The underlying principle here is *probability*—the empirical distribution used for training should converge to the true population distribution; otherwise the system’s performance will systematically deviate on under‑represented groups.

4. **Human Oversight & Accountability** – There must exist a clear chain of responsibility and mechanisms for post‑deployment monitoring, allowing corrective action when the system behaves unexpectedly. This is an *optimization* principle: continuously update the model within bounds that preserve overall utility while constraining risk.

> **Non‑obvious insight:**  
> Compliance is not merely about adding safety layers; it requires *co‑designing* data, architecture, and governance from the outset. A system built with a rigid safety module but trained on biased data will still produce unfair outcomes—an oversight that many regulators overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
