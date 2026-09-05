---
qid: ing_4137bc4dfd__fp__local
question: 'Explain: 📜 Citation & Reading More — GitHub - stanfordnlp/dspy: DSPy: The
  framework for programming\u2014not prompting\u2014language models \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 309
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:23:23-05:00'
sources: []
---

**Why “Citation & Reading More” matters in a language‑model framework**

When we program with a model, every *prompt* is an implicit hypothesis test: “Does the model’s internal distribution agree with this particular query?” The **citation** step turns that hypothesis into evidence. By attaching a URL or DOI to each generated claim, we turn a raw probability score \(P(y|x)\) into a verifiable chain of knowledge. This is essential because models are trained on noisy corpora; their confidence does not equal truth.

The *reading‑more* link is the downstream inference step. It transforms the model’s probabilistic output \(\hat{y}\) into an actionable plan: fetch external documents, compute embeddings, or query a database until the posterior \(P(y|x,D)\) exceeds a threshold. In statistical terms, it implements **active learning**—the system actively reduces uncertainty by gathering targeted evidence.

A non‑obvious insight is that citations *do not* merely annotate; they become part of the loss function during fine‑tuning. By penalizing hallucinations that cannot be linked to a source, the model learns a *source‑aware* representation space where each token’s meaning is tethered to an external reference. This aligns training objectives with downstream trust metrics and yields models that self‑audit rather than merely output text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
