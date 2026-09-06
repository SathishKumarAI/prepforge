---
qid: ing_e03431bf6e__fp__local
question: 'Explain: Register as custom evaluator — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 476
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:38-05:00'
sources: []
---

### Why a **custom evaluator** is indispensable

When you run an evaluation loop over thousands of prompts, the *metric* you care about (BLEU, ROUGE, user‑centric score, etc.) is a function \(f\) that maps a model’s raw output \(y\) and the ground truth \(t\) to a scalar.  
The **evaluation pipeline** must therefore expose an interface that

1. receives any pair \((t,y)\),
2. applies \(f\) without side‑effects,
3. returns a JSON‑serialisable result.

If you only had the built‑in metrics, you’d be forced to either (a) hack around them or (b) write ad‑hoc code that leaks state between runs—both break reproducibility and scalability.

### How Langwatch + Langfuse solve this

| Component | Role |
|-----------|------|
| **Langwatch** | Monitors the *flow* of prompts, responses, and metadata. It triggers a callback whenever an evaluation step completes. |
| **Langfuse** | Stores every request/response pair in a time‑ordered trace, exposing a REST endpoint for arbitrary post‑processing. |

To register a custom evaluator:

1. **Define the metric function** (e.g., a semantic similarity score).  
2. **Expose it as an HTTP service** or a Langfuse “Custom Function” that receives the JSON payload from Langwatch.  
3. In Langwatch’s *pipeline definition*, add a `custom_evaluator` step that points to your service URL.  
4. Langfuse will automatically log the output, preserving provenance.

### Non‑obvious insight

Because Langwatch streams data in real time and Langfuse stores the entire trace, you can **retroactively apply new evaluators** to historic runs without re‑generating responses. This decoupling turns evaluation from a *one‑shot* operation into an *iterative research loop*: refine your metric, re‑run the evaluator on past data, and immediately see how model rankings shift—something impossible with monolithic evaluation frameworks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
