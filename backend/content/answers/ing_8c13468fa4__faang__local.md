---
qid: ing_8c13468fa4__faang__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 449
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:53-05:00'
sources: []
---

**Clarify**  
We need to explain how to retrieve execution traces from a distributed tracing system (e.g., OpenTelemetry) and filter those traces by a specific span name, then use that data in the context of AI evaluations with Langwatch or Langfuse. Assume we have access to a trace store API and that spans are identified by unique names.

**Approach**  
1. Query the trace backend for all traces within a time window.  
2. For each trace, iterate over its span list and retain only those whose `span_name` matches the target.  
3. Assemble a filtered trace object containing the matched spans (and optionally their parents).  
4. Pass this trimmed trace to Langwatch/Langfuse for evaluation metrics or debugging.

**Depth**  
- **API call:** `GET /traces?start=...&end=...` returns trace IDs.  
- **Span retrieval:** `GET /trace/{id}` gives full span tree in JSON.  
- **Filtering logic (pseudo‑Python):**
  ```python
  def filter_trace(trace, target_name):
      return [s for s in trace.spans if s.name == target_name]
  ```
- Complexity: O(N) per trace where N is number of spans; memory scales with number of matched spans.  
- For large datasets, use server‑side filtering via query parameters if supported (`?span_name=foo`).  

**Edge Cases**  
- No matching span → return empty list or flag error.  
- Multiple matches in a single trace → include all to preserve context.  
- Span names with dynamic suffixes (e.g., `db.query.users`) → consider regex or prefix match.

**Optimize & Communicate**  
To reduce traffic, first fetch only trace IDs, then batch span retrievals using pagination. If the tracing backend supports aggregation queries, push filtering to the server side to cut down data transfer. In discussion, emphasize how filtered traces improve evaluation latency and storage costs for Langwatch/Langfuse dashboards, while still retaining enough context for accurate AI performance analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
