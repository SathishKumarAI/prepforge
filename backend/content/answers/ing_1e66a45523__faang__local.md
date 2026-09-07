---
qid: ing_1e66a45523__faang__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 499
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:47-05:00'
sources: []
---

**Clarify**  
You’re asked how an AI evaluation system would *fetch* execution traces (e.g., from a distributed tracing backend) and then *filter* those traces by a specific **span name** (the unit of work). I’ll assume:  

- Traces are stored in a time‑series or log store that supports queries (OpenTelemetry, Jaeger, Datadog).  
- The filter is a simple equality on the span’s “name” attribute.  
- We want to retrieve only the relevant spans for analysis or debugging.

**Approach**  
1. **Query the trace store** for all traces in the desired time window.  
2. **Stream each trace** and inspect its list of spans.  
3. For each span, check if `span.name == target`.  
4. Emit or collect those matching spans (or the parent trace ID) for downstream evaluation.

**Depth**  
- In a system like Jaeger, you’d use the Query API: `GET /api/traces?start=<ts>&end=<ts>&limit=1000` and then iterate the returned trace objects.  
- Each trace contains an array of spans; filter with a simple loop or stream operation.  
- Complexity is O(T + S) where T = number of traces fetched, S = total spans examined.  
- To avoid pulling huge payloads, you can add a **span name index** in the backend (e.g., a materialized view) so the query itself returns only matching spans, reducing network and memory overhead.

**Edge Cases**  
- Spans with identical names but different contexts (same service vs. different services).  
- Traces where the target span is nested deep inside many other spans—ensure recursion doesn’t miss it.  
- Missing or malformed `name` fields; default to a safe comparison.  
- Rate limits on the query API—batch requests if necessary.

**Optimize & Communicate**  
Explain that indexing by span name turns the filter into an *early‑exit* operation, saving CPU and I/O. If the backend lacks such an index, consider a side‑car ingestion pipeline that tags spans with a hashed name field for faster lookup. Finally, describe how you’d log metrics (e.g., number of traces scanned vs. matches found) to surface performance regressions during evaluation runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
