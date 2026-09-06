---
qid: ing_f9760bed02__fp__local
question: 'Explain: Run experiment — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 543
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:49:51-05:00'
sources: []
---

### Running an AI‑Eval Experiment: LangWatch + LangFUSE

**Problem** – We want a *closed‑loop* pipeline that (1) generates prompts, (2) sends them to a language model, (3) evaluates the outputs against human‑crafted criteria, and (4) visualises results in real time.  
The pipeline must preserve **experiment integrity**: reproducibility, traceability of each prompt‑response pair, and unbiased evaluation.

#### Why LangWatch & LangFUSE?

| Principle | How it manifests |
|-----------|------------------|
| **Deterministic provenance** | Every request is logged with a unique UUID; the same seed guarantees identical token streams. |
| **Metric‑centric design** | Eval functions are first‑class citizens; they consume raw LLM output and return scalar scores (e.g., BLEU, F1). |
| **Composable pipelines** | `LangWatch` wraps a chain of prompts → model → eval; `LangFUSE` aggregates metrics across runs. |
| **Statistical rigor** | Built‑in bootstrap confidence intervals guard against overfitting to a single run. |

#### Step‑by‑step

1. **Define the task & metric**  
   ```python
   from langwatch import LangWatch
   from langfuse.metrics import ExactMatch
   
   eval_metric = ExactMatch(name="exact_match")
   ```
2. **Create a prompt generator** (e.g., template + random seed).  
3. **Instantiate LangWatch** with the model and metric.  
   ```python
   watch = LangWatch(model=llm, metrics=[eval_metric])
   ```
4. **Run the experiment** – each call returns a `Result` object containing prompt, response, and metric score.  
5. **Persist results** – LangWatch writes to a local DB; LangFUSE reads it to compute aggregate statistics and visualise dashboards.

#### Non‑obvious insight

> *The evaluation function should be **agnostic of the model’s internal state**.*  
If the eval depends on token probabilities or hidden layers, you risk leaking information that biases future prompts. By treating the LLM as a black box and evaluating solely on observable outputs, you maintain a clean separation between generation and assessment, enabling fair comparison across models.

With this architecture, every experiment is reproducible, statistically sound, and instantly visualisable—exactly what rigorous AI research demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
