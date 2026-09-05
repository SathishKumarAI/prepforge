---
qid: ing_40d15d62a3__fp__local
question: 'Explain: Uploading test data — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 504
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:25-05:00'
sources: []
---

### Why upload test data at all?

A language model’s *score* is only as good as the distribution of examples it sees during evaluation.  
If we hand‑craft a prompt and ask the model to answer, that single instance tells us nothing about its behaviour on unseen prompts from the same domain.  
We therefore need **a representative sample** of inputs—our test set—to estimate expected performance.  

### From the fundamental problem to the API call

1. **Define the task distribution \(P_{\text{task}}\).**  
   The model must generalise over all inputs drawn from this distribution.
2. **Sample a finite dataset \(\{x_i\}\) from \(P_{\text{task}}\).**  
   These are our *test points*; each comes with a ground‑truth label or expected output.
3. **Upload the data so the evaluation engine can pair each \(x_i\) with a prompt template and score the model’s response against the known answer.**

The OpenAI API formalises this as an **evaluation run**:  
`POST /v1/evals/<eval_id>/runs` with a `dataset` field pointing to your uploaded JSONL file.  
Under the hood, each record is treated as an *independent* observation; the aggregate metric (accuracy, BLEU, etc.) is simply the mean over all records.  

### Deeper principle: unbiased estimation

By sampling independently from \(P_{\text{task}}\) and treating each example equally, we obtain an **unbiased estimator** of expected performance.  
Any systematic bias in the test set would corrupt this estimate—hence the need for careful data curation.

### Non‑obvious insight

Most people treat the upload step as a formality, but it also implicitly *locks* the evaluation context: once uploaded, you cannot change prompts or scoring rules without re‑uploading.  
Thus, **design your test set and prompt schema together** from the start; otherwise you’ll incur extra round‑trips to the API and waste compute.

In short: upload a clean, representative dataset → let the eval engine pair it with prompts → obtain an unbiased performance estimate that generalises beyond single examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
