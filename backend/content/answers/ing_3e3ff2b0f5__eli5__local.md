---
qid: ing_3e3ff2b0f5__eli5__local
question: 'Explain: Design with DynamoDB — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 224
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:43-05:00'
sources: []
---

Imagine every ride Uber logs as a postcard that has two stamps: one for the rider’s ID and one for the driver’s ID.  
In a normal library you could only look up postcards by flipping through each shelf, which would be slow if there were billions of postcards.  

**LedgerStore** is like an enormous digital filing cabinet built on DynamoDB. It stores every postcard (ride) once but automatically creates *trillions of tiny “index‑shelves”* that point to the same postcard—one shelf for each rider, one for each driver, and many more for things like time or location.  
When you ask for all rides a particular rider took, the system instantly pulls that rider’s shelf, which is just a list of pointers, not copies of the postcards. Thus the cabinet can answer queries in milliseconds even though it holds an astronomical number of indexes, all while keeping storage efficient and consistent across Uber’s global fleet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
