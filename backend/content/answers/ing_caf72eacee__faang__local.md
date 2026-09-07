---
qid: ing_caf72eacee__faang__local
question: 'Explain: Creating an eval run — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 467
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:20-05:00'
sources: []
---

**Clarify**  
You want to know how to create and execute a *custom evaluation* (`eval`) using the OpenAI API – essentially running a prompt‑response test set, scoring the outputs, and aggregating results. Confirm whether you need only the API call, or also data ingestion, metric definition, and storage.

**Approach**  
1. **Define the eval**: JSON schema with `model`, `task_name`, `samples` (prompt–expected answer), and a `metric` function name.  
2. **Upload**: POST to `/v1/evals` to register the eval.  
3. **Run**: Call `/v1/evals/runs` with the eval ID, selecting model(s) and optional parameters (`max_output_tokens`, `temperature`).  
4. **Collect**: Poll or listen for completion; fetch run results via `/v1/evals/runs/{run_id}`.  
5. **Aggregate**: Compute metrics (accuracy, BLEU, etc.) from the returned scores.

**Depth**  
- Use `openai.Eval.create()` to submit JSONL data.  
- For scoring, supply a Python function or built‑in metric; OpenAI executes it in isolation.  
- Complexity: O(N) over samples for a single run; cost proportional to token usage + compute for the scoring function.  
- Trade‑offs: Built‑in metrics are fast but limited; custom code gives flexibility at higher latency.

**Edge Cases**  
- Empty or malformed sample set → API error 400.  
- Model returns truncated output → handle `stop` tokens or request more `max_output_tokens`.  
- Metric function errors → run fails; catch exceptions and log diagnostics.

**Optimize & Communicate**  
Batch uploads to reduce round‑trips, cache common metrics, and parallelize runs across models for efficiency. Explain that the eval framework abstracts data prep, execution, and scoring, letting engineers focus on model behavior rather than boilerplate. This structured flow demonstrates clear problem framing, systematic solution design, and an awareness of performance trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
