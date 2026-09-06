---
qid: ing_6ebffccacd__fp__local
question: Anyone can add documents to your corpus. How do you stop an attacker planting
  a document that hijacks the assistant?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 450
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:00:03-05:00'
sources: []
---

**Why “no‑tampering” is unavoidable**

When a model learns from a corpus, every token it sees becomes part of its internal probability distribution. An attacker can exploit this by inserting a *targeted* document that contains a carefully crafted prompt–response pair. The assistant will then reproduce the answer whenever it encounters the trigger. To guard against this, we must treat the corpus as a *mutable data structure* whose integrity is verified at every ingestion step.

**Fundamental principle – information‑theoretic sanitisation**

From an information‑theoretic viewpoint, any text added to the training set injects mutual information between that text and the model’s output. If we can bound this mutual information—i.e., enforce that a single document contributes no more than ε bits—we guarantee that no single malicious entry can dominate the response distribution. This is akin to differential privacy but with *exact* leakage control.

**Concrete mechanism**

1. **Hash‑based provenance** – Each new document is hashed and stored in a Merkle tree whose root is signed by a trusted authority. The model only accepts documents whose hash appears in the signed ledger.
2. **Per‑document weight clipping** – During fine‑tuning, gradients from each document are clipped to a fixed norm. This caps the influence of any single entry regardless of its content.
3. **Trigger detection** – A lightweight LSTM scans incoming text for high‑entropy patterns that resemble known prompt–response pairs; suspicious passages trigger manual review.

**Non‑obvious insight**

Even if you prevent *exact* duplication, an attacker can still *mimic* the statistical signature of legitimate prompts by blending many benign documents. Therefore, the true safeguard is not content filtering but **probabilistic isolation**: ensure that the probability mass assigned to any user‑supplied trigger remains below a negligible threshold, effectively turning the model into a “safe‑by‑design” system rather than a “clean‑after‑the‑fact” one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
