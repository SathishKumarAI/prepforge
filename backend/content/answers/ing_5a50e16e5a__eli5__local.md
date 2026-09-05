---
qid: ing_5a50e16e5a__eli5__local
question: 'Explain: these types of problems end up actually — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 270
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:34-05:00'
sources: []
---

Think of a parking‑garage designer as a machine‑learning engineer who has to decide how the “system” will behave for every driver that arrives.  
The *problem types* are like different kinds of customers: some need quick entry, others need special spots, and many want to know when a space will free up.  
Designing the garage is therefore an **“end‑to‑end”** exercise – you must model the whole flow from arrival to departure, just as ML engineers build pipelines that take raw data, process it, train a model, and produce predictions.  

In the Amazon interview, they ask you to sketch the entire garage: sensors (data sources), controllers (preprocessing), a “parking‑space allocator” (the model), and a user app (output).  
You’re expected to show how all parts talk together, much like showing how an ML system integrates data ingestion, feature engineering, training, inference, and monitoring.  

So the question is really about designing a complete, working solution that covers every step—just as you would design a full machine‑learning workflow from start to finish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
