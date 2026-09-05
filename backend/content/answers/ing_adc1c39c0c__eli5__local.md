---
qid: ing_adc1c39c0c__eli5__local
question: 'Explain: schema side of things how we''re going — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 199
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:49-05:00'
sources: []
---

Imagine a library that needs to keep track of books, shelves, and borrowers. The **schema** is the library’s “catalogue” – it tells you what information exists (author, title, shelf number) and how those pieces fit together.  

In the Amazon parking‑garage interview, the schema does the same job for cars: it defines the tables (or data stores) for *vehicles*, *parking spots*, *tickets*, and *payments*. It also specifies the relationships—each ticket belongs to one vehicle, each spot can hold only one vehicle at a time, and each payment references a ticket.  

Think of it like a floor plan: rooms (tables), doors (keys), and hallways (relationships). This blueprint lets the system quickly locate where a car is parked, check availability, and bill the driver—all without confusion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
