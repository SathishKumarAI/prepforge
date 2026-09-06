---
qid: ing_53e736e2b6__fp__local
question: 'Q: How does Medusa differ from traditional Speculative Decoding?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 416
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:03:22-05:00'
sources: []
---

**Medusa vs. Traditional Speculative Decoding**

Both aim to speed up transformer inference by *speculating* future tokens before the model’s own decoder has finished, but they differ in how they trade off **accuracy, latency, and complexity**.

| Aspect | Traditional Speculative Decoding | Medusa |
|--------|----------------------------------|--------|
| **Speculation source** | A lightweight “student” model trained to mimic the teacher’s logits. | Two *teacher* models of different capacities (a small, fast one and a larger, accurate one). The fast teacher is queried first; if its top‑k tokens match the large teacher’s, the batch proceeds with the cheap one. |
| **Decision criterion** | Threshold on logit similarity or entropy to accept or reject speculation. | *Confidence gap*: Medusa rejects only when the fast model’s top‑k confidence is lower than a pre‑defined margin relative to the large model. |
| **Latency impact** | Potentially high variance: a wrong guess forces a rollback, incurring a full re‑run. | By ensuring the fast teacher’s predictions are *consistent* with the large one on the same token, Medusa eliminates rollbacks almost entirely; latency becomes deterministic. |
| **Complexity** | Requires training a student and fine‑tuning thresholds per model. | No extra training: it leverages two existing models, requiring only a simple confidence check. |

**Non‑obvious insight:**  
Medusa’s *consistency test* is essentially a form of **ensemble distillation without back‑propagation**. It uses the large teacher not to teach the small one but to *verify* that the small one’s predictions lie within the same high‑probability region. This guarantees that speculative decoding never diverges from the true distribution, thereby preserving quality while achieving near‑constant latency—something conventional student‑based speculation cannot assure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
