---
qid: ing_16eddcc8d3__eli5__local
question: 'Explain: Push and pull queries — Database Streaming with ksqlDB | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 233
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:54-05:00'
sources: []
---

Think of a **streaming database** like a bustling kitchen where recipes (queries) are constantly being cooked and served.

*Pull query* = “Ask the chef for a dish now.”  
You send a request to the kitchen (“Give me the current list of all burgers”), and the chef looks up the latest inventory, prepares the answer, and hands it back. You get one snapshot at that moment; if new ingredients arrive later, you must ask again.

*Push query* = “Keep me fed with updates.”  
You tell the chef to keep your plate topped with fresh items: every time a new burger is added or an ingredient runs low, the chef automatically slides a bite onto your plate. You never have to request; the kitchen streams changes in real time.

In ksqlDB, pull queries read the current state from a topic (like a snapshot), while push queries subscribe to a stream and receive every update as it happens—just like a chef who keeps you fed without asking each time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
