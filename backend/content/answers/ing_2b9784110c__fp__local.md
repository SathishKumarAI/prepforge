---
qid: ing_2b9784110c__fp__local
question: 'Explain: Run on each trace and log scores — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 570
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:17-05:00'
sources: []
---

### Why evaluate *every* trace?

When a language‑model (LM) produces an output, the raw text hides two crucial facts:

1. **Behavioral quality** – does it answer correctly?  
2. **Distributional reliability** – is the confidence calibrated across inputs?

A single aggregate metric averages over many traces and masks systematic errors. By evaluating *each* trace we obtain a fine‑grained error surface that can be mapped back to prompts, models, or system components.

### The evaluation pipeline

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **Trace capture** | Every request/response pair is stored (prompt, LM output, metadata). | Provides the raw data for downstream analysis. |
| **Eval script** | A user‑supplied Python function receives the trace and returns a numeric score (e.g., 0–1). | Encodes the *objective* (accuracy, safety, style). |
| **Run per trace** | The eval is applied to each stored trace individually. | Preserves context; avoids conflating unrelated errors. |
| **Log scores** | Scores are written back into the trace store (e.g., as a new field). | Enables filtering, aggregation, and visualization downstream. |

### LangWatch & Langfuse

- **LangWatch** is an open‑source library that automatically hooks into your inference pipeline, capturing traces in real time.
- **Langfuse** stores these traces in a searchable database (PostgreSQL + Redis) and offers a UI for exploring scores.

The combination gives you:

1. **Real‑time monitoring** – see how a new model version affects every trace.  
2. **Trace‑level analytics** – filter by prompt type, user ID, or time window.  
3. **Audit trail** – reproducible evaluation history that can be replayed for debugging.

### A non‑obvious insight

Because each trace is evaluated independently, you can *propagate uncertainty* from the model’s internal logits to the final score. By attaching a confidence interval (e.g., via Monte Carlo dropout) to every trace, Langfuse can surface not only “wrong” predictions but also those that are *borderline*. This enables risk‑aware deployment: shut down or human‑review only the traces whose uncertainty exceeds a threshold, rather than flagging all low‑score outputs.

---

**Bottom line:** Running evals per trace and logging scores turns opaque LM behavior into actionable data, grounded in probabilistic calibration and traceability. LangWatch + Langfuse give you the plumbing to make that happen at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
