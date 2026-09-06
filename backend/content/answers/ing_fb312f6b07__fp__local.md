---
qid: ing_fb312f6b07__fp__local
question: 'Explain: Don’t Bother About Requirements — Design System Newsletter - by
  Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 313
total_tokens: 489
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:53:53-05:00'
sources: []
---

**Why “Don’t Bother About Requirements” Makes Sense in ML**

At its core, a machine‑learning model is an *optimization problem*: we search for parameters that minimize loss on data while generalizing to new inputs. Traditional software engineering fixes the interface first—exact input types, output schemas, error codes—and then writes code to satisfy those constraints. In ML this “contract” is brittle: training data drift, feature evolution, or a shift in target distribution can render a rigid spec useless before deployment even starts.

Neo Kim argues that the *real requirement* is not the surface contract but **the ability to learn from data**. If we let the model discover its own representation—via end‑to‑end neural nets or self‑supervised pretraining—the system automatically adapts to new feature spaces and label definitions. The “requirements” become a low‑priority list of *minimal operational constraints* (e.g., latency, memory), not a full API spec.

**Non‑obvious insight:** Treating the model as a *probabilistic inference engine* rather than a deterministic function shifts the design focus from hard coding to *data quality*. A well‑engineered pipeline that guarantees clean, representative samples is far more valuable than a meticulously specified interface. In practice, this means investing in data versioning and monitoring tools first, then letting the ML system flexibly evolve its own “requirements” as it learns.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
