---
qid: vq_abe54da2d5__eli5__local
question: What are the key components of Azure Data Factory pipeline ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 231
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:52-05:00'
sources: []
---

Think of an **Azure Data Factory (ADF) pipeline** like a well‑planned road trip for data.  
* **Source** – the starting town where your raw data lives (a database, file share, or cloud blob).  
* **Activities** – the vehicles that move and transform the data: *Copy Activity* drives data from source to destination; *Data Flow* reshapes it like a car’s suspension system.  
* **Sink** – the final stop where processed data is parked (Azure SQL, Data Lake, or another store).  
* **Triggers** – the calendar that tells the trip when to start: a schedule, an event in storage, or manual launch.  
* **Parameters & Variables** – luggage tags that let you customize each trip without rewriting the route.  
Together they form a repeatable itinerary: pick up data, run it through transformations, and drop it off where needed—exactly like planning every leg of a road trip so you always arrive on time and in good shape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
