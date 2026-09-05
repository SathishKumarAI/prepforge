---
qid: ing_9ddffca3d1__star__local
question: 'Explain: Get all spans for a specific name — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 398
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:59-05:00'
sources: []
---

**Situation:**  
At my last role, we built an internal AI‑evaluation platform that used Langwatch and Langfuse to trace model responses. Our quarterly review required us to audit every span tagged “Ai Evals” across all runs to spot performance regressions before deploying a new fine‑tuned model.

**Task:**  
I needed to pull all spans with the exact name “Ai Evals” from the distributed tracing store, aggregate their latency metrics, and flag any that exceeded our SLA of 200 ms. The data lived in a CockroachDB cluster behind a gRPC API exposed by Langfuse, so I had to keep queries efficient to avoid throttling.

**Action:**  
I wrote a Go script that first queried the Langfuse metadata endpoint for run IDs matching the “Ai Evals” tag using a paginated GraphQL query. For each run ID, I fetched the trace via the REST `/traces/{id}` endpoint, then filtered the JSON payload client‑side to retain only spans where `span.name == "Ai Evals"`. To speed up processing, I parallelized requests with a worker pool of 10 goroutines and cached results in Redis for subsequent runs. After collection, I used Prometheus’ query language to calculate mean latency per span type and exported the findings as an HTML report.

**Result:**  
The script reduced audit time from ~3 hours manually to under 20 minutes, identified 12 outliers (latencies up to 350 ms) that we fixed by optimizing a token‑generation subroutine. The quarterly release went on schedule with no SLA breaches. I learned the importance of batching trace queries and leveraging caching to keep tracing overhead low while maintaining visibility into every critical span.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
