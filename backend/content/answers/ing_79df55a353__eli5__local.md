---
qid: ing_79df55a353__eli5__local
question: 'Explain: Capacity Estimation — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 247
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:49:39-05:00'
sources: []
---

**Capacity Estimation – the “Seat‑Filling” Game**

Think of building a machine‑learning service like running a movie theater that shows a new blockbuster every minute.  
The *capacity* is how many people (requests) you can seat per showtime (inference batch). To ace an interview, you estimate:

1. **Demand** – How many viewers will come each hour? In ML terms, the expected requests per second or day.  
2. **Resources** – What’s the size of your “auditorium”? That is CPU/GPU hours, memory, and storage.  
3. **Speed** – How long does one show take? The latency of a single inference.  

You calculate how many shows (batches) fit in an hour with the available resources, then adjust the theater’s size or add more seats until every viewer can see the film on time. Showing the interviewer that you can map traffic, compute power, and latency into a simple “seats per show” formula proves you understand system design for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
