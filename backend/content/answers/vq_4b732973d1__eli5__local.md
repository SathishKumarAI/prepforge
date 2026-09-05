---
qid: vq_4b732973d1__eli5__local
question: How do you handle schema evolution in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 270
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:43-05:00'
sources: []
---

Think of an Azure Data Factory (ADF) pipeline like a train that moves data from one station to another.  
A “schema” is the set of seats on each car—columns, types, and order.  
When you add or remove seats, the train’s layout changes; this is **schema evolution**.

In ADF you handle it by letting the pipeline read the current seat map (the source schema) every time it runs.  
You then tell ADF how to “re‑seat” the passengers for the destination:  

1. **Dynamic mapping** – let ADF match columns by name or position, so new seats automatically appear and old ones disappear without manual edits.  
2. **Schema drift option** – enable this flag; ADF will log any unexpected changes and can skip, drop, or insert them as nulls.  
3. **Copy activity settings** – choose “Preserve Hierarchy” or “Flatten” to control how nested fields are handled when the layout shifts.

So, like a train that can re‑arrange its cars on each trip, ADF reads the latest schema, adapts the copy rules, and keeps data moving smoothly even as tables grow or shrink.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
