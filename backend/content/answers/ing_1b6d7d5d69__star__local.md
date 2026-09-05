---
qid: ing_1b6d7d5d69__star__local
question: 'Explain: Arize Phoenix has a built-in MCP server that lets your agents
  query traces with SQL'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 355
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:10-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with debugging performance regressions in our real‑time recommendation engine. The service produced millions of distributed traces per day, but the monitoring stack only exposed raw logs; we had no way to filter or aggregate by request context.

**Task**  
I needed a quick, developer‑friendly method to query those traces on demand, so that I could isolate problematic queries and measure latency across user segments without rebuilding instrumentation.

**Action**  
I introduced Arize Phoenix’s built‑in MCP (Metric Context Processor) server. By configuring the MCP endpoint in our OpenTelemetry exporter, each trace span automatically got tagged with contextual metadata—user ID, campaign ID, and feature flag state. With the MCP server running locally on port 8080, I could write SQL queries against a virtual table of spans:  
```sql
SELECT user_id, avg(duration) FROM traces WHERE service='rec_engine' AND error=false GROUP BY user_id;
```  
The server translated these SQL statements into efficient in‑memory scans over the incoming JSON trace payloads. I scripted this as part of our CI pipeline to run nightly regressions and expose results on Grafana dashboards.

**Result**  
Using MCP, we cut our query turnaround from 15 minutes (manual log parsing) to under 30 seconds per session. The SQL interface also let non‑engineers drill down into latency by user cohort, leading to a 12 % reduction in cold‑start times after we adjusted the caching strategy. I learned that embedding a lightweight query engine inside the trace pipeline can turn raw telemetry into actionable insights without adding external tooling or complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
