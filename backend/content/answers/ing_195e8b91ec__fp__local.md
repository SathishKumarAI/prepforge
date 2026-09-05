---
qid: ing_195e8b91ec__fp__local
question: Your production assistant has started quoting wrong prices to customers.
  Is it an attack or a bug, and how do you find out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 501
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:15-05:00'
sources: []
---

**From the fundamentals of a predictive system**

A language‑model assistant is essentially a function  
\(f(x) \rightarrow y\) that maps user prompts \(x\) to outputs \(y\).  
Its correctness depends on two things:

1. **Training data integrity** – the model learns prices from historical
   records; if those records are wrong or stale, every inference will be
   wrong (a *bug* in the knowledge base).
2. **Runtime input handling** – a malicious prompt can exploit a weakness
   (e.g., prompting for an out‑of‑scope price) and cause the model to
   hallucinate (an *attack*).

**How to decide which it is**

| Step | What to inspect | Why it matters |
|------|-----------------|----------------|
| 1. **Reproduce** | Run the same prompt on a clean, offline copy of the model. | If the wrong price persists, the fault lies in the model itself; if not, the production environment is tainted. |
| 2. **Trace input** | Log the exact token stream and any contextual metadata (e.g., user ID, session state). | A malicious prompt will often contain hidden tokens or patterns that trigger a known vulnerability. |
| 3. **Check data provenance** | Verify that the price database snapshot used by production matches the training checkpoint. | Stale or corrupted data explains systematic errors; an attack does not alter the underlying data. |
| 4. **Audit confidence scores** | Inspect the model’s internal logits for the output tokens. | Low‑confidence, high‑entropy outputs are typical of hallucinations (attack); high‑confidence outputs usually come from memorized training examples (bug). |

**Non‑obvious insight**

Even a *pure* bug can masquerade as an attack if the system has **fallback logic** that replaces missing data with a default or a “best guess” price. That fallback may be triggered by an adversarial prompt that simply forces the model into a corner case, thereby turning a benign defect into a security‑like symptom. Therefore, always examine both *data flow* and *control flow* when diagnosing such anomalies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
