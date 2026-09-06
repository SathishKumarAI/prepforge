---
qid: ing_1e66a45523__think__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 464
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:42:48-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   *What is “fetch traces” and why do we want to filter by span name?* Assume a distributed tracing system (e.g., OpenTelemetry, Jaeger) where each trace contains multiple spans identified by names such as `"db.query"` or `"http.request"`. We’re looking for all traces that contain a particular span name.

**2. Adopt the “trace → spans → filter” mental model**  
   1. **Retrieve**: Pull raw trace data from the tracing backend (API call, query language).  
   2. **Structure**: Each trace is a tree of spans; each span has metadata (`name`, `start_time`, etc.).  
   3. **Filter**: Scan each trace’s span list for the target name.

**3. Step‑by‑step reasoning**  
   - *Query design*: Use backend query language (e.g., Jaeger UI’s search, OpenTelemetry Collector) to request traces where `span.name = "X"`.  
   - *Pagination/limits*: Traces can be large; use pagination or time windows.  
   - *Post‑processing*: If the backend doesn’t support name filtering directly, fetch a broader set and apply client‑side filtering.  
   - *Performance*: Indexing span names improves speed; otherwise cost grows with trace count.

**4. Common traps to avoid**  
   - **Assuming flat traces**: Spans are nested; ensure you search all levels.  
   - **Ignoring case sensitivity**: Span names may be case‑sensitive.  
   - **Overfetching**: Pulling entire trace payloads can be expensive; use minimal fields if possible.  
   - **Misreading time ranges**: A span might appear outside your query window, leading to missed traces.

**5. Sanity‑check & verbalize**  
   - Verify that the returned traces actually contain the target span by inspecting a few examples.  
   - Explain the process as: “We query the tracing backend for traces where any span’s name matches our keyword, ensuring we paginate and index appropriately to keep latency low.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
