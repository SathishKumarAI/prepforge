---
qid: ing_68973ee569__eli5__local
question: 'Explain: which this should be reserved as well — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 290
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:33-05:00'
sources: []
---

Imagine you’re the manager of a giant, multi‑level shopping mall where cars are your customers. Your job is to let them park quickly, keep track of every spot, and charge the right fee when they leave.

**Think of the parking garage as a database with three main “tables” (or services):**

1. **Parking Spot Service** – knows which levels have free spots and can reserve one for a car.  
2. **Vehicle Service** – records the car’s license plate, entry time, and assigned spot.  
3. **Billing Service** – calculates the fee based on how long the car stayed.

When a driver enters, you ask the Parking Spot Service for an available slot (like asking a database for free rows). You then tell Vehicle Service to store that reservation. When the driver leaves, Billing Service looks up the entry time from Vehicle Service and charges accordingly, freeing the spot in Parking Spot Service.

This simple “reserve‑track‑charge” flow mirrors many real‑world systems: the garage is a *stateful* service that must stay consistent, just like an e‑commerce inventory or order system. It’s easy to understand yet covers key interview concepts—scalability (many levels), fault tolerance (lost spot data), and clean separation of concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
