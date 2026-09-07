---
qid: ing_40d15d62a3__faang__local
question: 'Explain: Uploading test data — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:49-05:00'
sources: []
---

**Clarify**  
The question asks how to **upload test data for evaluation (evals) using the OpenAI API**, assuming we already have a dataset of prompts and expected responses, want to run them through a model, and collect metrics. We’ll assume:  
- The data is in JSONL or CSV with `prompt`/`completion`.  
- We have an OpenAI account with API keys and sufficient quota.  

**Approach**  
1. **Prepare the dataset** – convert to the format required by the evals framework (`JSONL` where each line contains `prompt`, `expected`).  
2. **Create an eval** – use the CLI or SDK: `openai eval create --name my-eval --model gpt‑4`.  
3. **Upload data** – via `openai eval upload` (or `--data-path`) to attach the file.  
4. **Run evaluation** – `openai eval run --eval-id <id>`; the API streams results and aggregates metrics.  
5. **Inspect output** – download logs or view in the console, analyze accuracy, F1, BLEU, etc.

**Depth**  
- The upload endpoint accepts a file ID; behind the scenes it stores data in S3‑like storage and returns an `eval_id`.  
- Running an eval triggers asynchronous jobs; you poll until status is “succeeded”.  
- Metrics are computed server‑side: exact match, token‑level precision/recall, user‑defined functions. Complexity is O(n) over dataset size; network I/O dominates.

**Edge Cases**  
- Large files (>10 MB): chunked upload or multipart.  
- Malformed JSONL lines → job fails; validate locally.  
- Rate limits: back‑off if 429 responses.  

**Optimize & Communicate**  
Explain that for production, one can script the entire flow with retries, log results to a DB, and integrate CI/CD pipelines. Emphasize that this declarative approach keeps evaluation reproducible and eliminates manual copy‑paste errors—critical for ML ops at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
