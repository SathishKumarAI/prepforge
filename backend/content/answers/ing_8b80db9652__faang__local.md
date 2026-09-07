---
qid: ing_8b80db9652__faang__local
question: 'Explain: Run experiment with automatic metrics — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 498
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:47-05:00'
sources: []
---

**Clarify**  
You want a reproducible pipeline that runs an LLM evaluation, captures automated metrics (e.g., BLEU, ROUGE, accuracy), and stores the results for analysis. We’ll assume: *a pre‑trained model*, *a labeled test set*, *cloud compute* (AWS/GCP), and *Python 3.10+*.  

**Approach**  
1. **Data prep** – load prompt/target pairs into a Pandas DataFrame.  
2. **Inference loop** – batch the prompts, send to the LLM via Langfuse’s API (or OpenAI).  
3. **Metric computation** – after each batch, compute metrics with `nltk`, `rouge-score`, or custom logic.  
4. **Logging & storage** – push raw responses + metrics to Langwatch for traceability; persist a CSV/Parquet for downstream analysis.  
5. **Automation** – wrap in an Airflow DAG (or Prefect) that triggers nightly, captures failures, and sends Slack alerts.

**Depth**  
```python
def run_eval(df):
    results = []
    for batch in tqdm(batches(df['prompt'])):
        responses = langfuse.generate(batch)
        metrics = compute_metrics(responses, df.loc[batch.index,'target'])
        results.append({'prompts':batch,'responses':responses,'metrics':metrics})
        langwatch.log_batch(results[-1])  # store trace
    pd.concat([pd.json_normalize(r['metrics']) for r in results]).to_parquet('eval.parquet')
```
*Complexity*: O(n) inference + O(n) metric calculation; memory scales with batch size. Trade‑off: larger batches reduce API calls but increase latency.

**Edge Cases**  
- **Rate limits** → exponential backoff.  
- **Null responses** → fallback to empty string and flag.  
- **Metric outliers** → apply z‑score filtering before aggregation.

**Optimize & Communicate**  
*Speed*: Parallelize inference with `asyncio` or Ray; *Cost*: cache repeated prompts. Explain to interviewers: “We built a self‑contained, repeatable pipeline that logs every trace in Langwatch and surfaces metrics in Langfuse, enabling quick regression detection and A/B testing.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
