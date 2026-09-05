---
qid: vq_461b069e32__eli5__local
question: How to implement incremental load in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 230
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:09:45-05:00'
sources: []
---

Think of Azure Data Factory (ADF) as a smart mail‑carrier that brings new postcards from a post office (your source database) into your mailbox (a data lake).  
**Incremental load** means the carrier only picks up postcards that have been added or changed since the last delivery, instead of bringing every postcard again.  

In ADF you do this with a **“Change Tracking” technique**:  

1. **Record the last‑loaded time** – store the timestamp of the most recent batch in a small table (or a file).  
2. **Filter on that timestamp** – when you run a copy activity, add a query like `WHERE UpdatedAt > @lastLoadedTime`.  
3. **Update the marker** – after the copy finishes, write back the newest `UpdatedAt` value so the next run knows where to start.

The carrier (ADF pipeline) now only fetches new or modified postcards each time, saving bandwidth and processing time while keeping your mailbox fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
