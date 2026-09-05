---
qid: ing_12f0d277b9__eli5__local
question: 'Explain: a parking garage type system so i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 286
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:05:44-05:00'
sources: []
---

Imagine you’re designing a giant “smart elevator” that can store cars, just like a parking garage keeps bikes in a bike rack.  
**Goal:** Let any driver drop their car in at the entrance and later pick it up from the exit, while keeping track of where each car is.

1. **Entrance & Exit lanes** – Think of them as roads that guide cars into and out of the building.  
2. **Storage slots (parking spots)** – Like numbered shelves; each spot can hold one car.  
3. **Ticket system** – When a driver enters, they receive a ticket with a unique number (the “slot ID”). That’s the key to find their car later.  
4. **Database of slot status** – A simple list that marks slots as “free” or “occupied.”  
5. **Elevator controller** – The brain that receives the ticket, tells the elevator which floor and spot to go to, moves the car, and updates the database.

When a driver returns, they hand in their ticket; the system reads the slot ID, sends the elevator to that spot, and the car is handed back.  
This architecture keeps things organized, fast, and safe—just like a well‑built parking garage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
