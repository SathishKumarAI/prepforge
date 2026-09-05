---
qid: ing_2d0956ed10__eli5__local
question: 'Explain: a garage you''re going to be end — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 232
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:42-05:00'
sources: []
---

Think of your parking‑garage system like a big, smart library that keeps track of books (cars) and shelves (parking spots).  
When someone arrives, the “front desk” (entry gate) asks for their license plate or RFID tag. It checks a tiny database to see if that car already has an assigned spot. If it’s new, the system looks at a “shelf map” that lists all free spots, chooses one (maybe the closest to the exit), records the assignment, and sends a ticket back to the driver.  
While the car is inside, each entry or exit triggers a tiny counter on the spot: “occupied” → “free.” The system updates the map in real time, so future arrivals always see an accurate list of available spots.  
When the driver returns, the same desk reads the tag again and instantly knows which spot to guide them to—just like a librarian pointing you straight to your book’s location. This simple mapping between cars and spots is the core of a scalable parking‑garage design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
