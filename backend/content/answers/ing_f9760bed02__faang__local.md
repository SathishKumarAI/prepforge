---
qid: ing_f9760bed02__faang__local
question: 'Explain: Run experiment — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 533
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:41-05:00'
sources: []
---

**Clarify**  
You want a step‑by‑step playbook for running an evaluation experiment that uses the *AI Evals* framework together with *LangWatch* (for real‑time monitoring) and *LangFuse* (for logging and replay). I’ll assume:  
- You have a trained LLM or chain you wish to benchmark.  
- Your code runs in a Python environment with access to the OpenAI API or an open‑source model.  
- You want deterministic results, repeatable metrics, and actionable logs.

**Approach**  
1. **Define objectives & prompts** – choose the evaluation suite (e.g., `ai-evals`) and craft a prompt set.  
2. **Set up LangFuse** – initialise a project, configure a storage backend (S3/DB), and instrument your inference pipeline to emit events (`input`, `output`, `metadata`).  
3. **Wrap calls with LangWatch** – attach a watcher that streams token usage, latency, and internal state to a live dashboard.  
4. **Run the eval loop** – for each prompt, call the model through LangFuse‑wrapped function; capture metrics and pass them to AI Evals’ `EvalRunner`.  
5. **Aggregate & analyze** – let AI Evals compute scores (accuracy, BLEU, etc.) and export a JSON report.  
6. **Replay & debug** – use LangFuse’s replay feature to step through failed cases, inspect token logs from LangWatch, and iterate.

**Depth**  
- Complexity: O(N * T) where N = #prompts, T = tokens per inference; LangWatch adds ~1–2 ms overhead.  
- Trade‑offs: Real‑time monitoring increases latency but gives visibility; storing every event can inflate storage costs—use selective logging or compression.

**Edge Cases**  
- API throttling → backoff logic in LangFuse wrapper.  
- Non‑deterministic models → seed the random generator and log seeds via LangWatch.  
- Large token counts → chunk prompts, ensure LangWatch handles streaming tokens.

**Optimize & Communicate**  
1. Cache embeddings or intermediate layers to cut T.  
2. Parallelise evals across workers; aggregate results asynchronously.  
3. Document the pipeline in a README so other engineers can reproduce the experiment.  
4. Present findings with clear visual dashboards (LangWatch) and a concise metrics table, highlighting bottlenecks and next‑step experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
