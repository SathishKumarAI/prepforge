---
qid: vq_09fbb6e2c1__fp__local
question: Is it possible to Disable the Parameter form while running the report ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 516
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:58-05:00'
sources: []
---

### Why the parameter form matters

When a report is executed, the runtime engine must know **which data to pull**.  
Parameters act as *filters* on the underlying query or stored procedure.  
If the user does not supply them, the engine falls back to defaults (or fails).  
Hence every interactive report exposes a “parameter form” that collects those values.

### Why you can hide it

The runtime merely needs *values*, not the UI that gathers them.  
If you pre‑define the required values in the report definition, the engine has everything it needs:

1. **Set each parameter’s `Prompt` property to `False`.**  
   The form never appears; the parameter is still part of the query.
2. **Provide a default value or expression.**  
   For example:  
   ```sql
   SELECT * FROM Sales WHERE OrderDate BETWEEN @StartDate AND @EndDate
   ```
   In the report designer, set `@StartDate` to `=Today()-30` and `@EndDate` to `=Today()`.  
3. **Hide the parameter in the UI** (e.g., use a hidden textbox that assigns the value).  

When the report runs, the engine injects those defaults automatically—no prompt is shown.

### A non‑obvious insight

Hiding parameters can *break* downstream logic if you later add a new filter.  
Because the parameter remains part of the dataset, any change to its default expression or data type will silently alter the query results.  
Always version‑control your report definitions and document hidden defaults so that future maintainers understand the implicit filtering.

> **Bottom line:** Yes—by setting each parameter’s prompt off and supplying a default value (or computing it in the report), you can run a report without ever showing the parameter form, while still keeping the underlying query fully functional.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
