---
qid: ing_233a201038__fp__local
question: 'Explain: Breaking down the different types of tracing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 459
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:24-05:00'
sources: []
---

## Tracing in Machine Learning – a principled taxonomy

At its core, **tracing** is the act of recording *how* an input propagates through a system to produce an output.  
The fundamental problem it solves is *causality*: given a prediction or a decision, we want to know which parts of data, code, and model contributed to it.  

From this requirement emerge three orthogonal axes:

| Axis | What is captured | Why it matters |
|------|------------------|----------------|
| **Source** | Raw inputs (images, text, sensor streams) | Enables bias audits; ensures the data used matches the claim. |
| **Transformation** | Pre‑processing steps, feature extraction, model layers | Reveals hidden dependencies and potential leakage of sensitive information. |
| **Execution** | Runtime control flow, tensor operations, GPU kernels | Detects performance bottlenecks, security vulnerabilities, and reproducibility issues. |

Combining these axes gives four practical tracing types:

1. **Data provenance tracing** – records lineage of each datum (e.g., who labeled it, when).  
2. **Feature‑level model tracing** – logs activations per layer; crucial for interpretability methods like SHAP or LIME.  
3. **Execution tracing** – captures call stacks and tensor shapes during inference/training; used in profiling tools such as PyTorch’s autograd profiler.  
4. **Audit‑trail tracing** – aggregates the above into a tamper‑evident log, satisfying regulatory frameworks (GDPR, HIPAA).

### Non‑obvious insight
Most practitioners think of tracing only for debugging or performance. In fact, *information flow theory* tells us that any trace is an information channel: the more detailed the trace, the higher the entropy of the channel and the finer our ability to reconstruct causality. Thus, a minimal trace (e.g., just final logits) may satisfy correctness but utterly fails to expose subtle data leakage or model over‑fitting—an insight often missed until a compliance audit reveals it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
