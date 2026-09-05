---
qid: ing_3a1cd3746e__eli5__local
question: 'Explain: 113: System Design Interview — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 301
total_tokens: 467
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:18-05:00'
sources: []
---

Imagine you’re building a giant hotel‑booking app like Airbnb, but instead of rooms you’re renting spaces worldwide. The “system design interview” is the teacher’s exam where you must explain how all the parts talk to each other so guests can search, book, and pay smoothly.

**Concrete analogy:** Think of the system as a busy airport.  
* **Users (guests)** are passengers arriving at the terminal.  
* **The website/app** is the check‑in desk that tells them where their flight (listing) goes.  
* **Search service** is like the flight‑information board: it quickly shows all available flights (rooms) that match a passenger’s request.  
* **Booking service** is the ticket counter that reserves a seat and confirms payment, just as a hotel room gets locked for you.  
* **Database** stores every flight schedule, passenger record, and payment details—just like an airline’s master timetable.  
* **Cache** holds the most popular flights so the board updates instantly, avoiding slow database lookups.

During the interview you explain how each “airport station” (service) talks to the others over a network, how data is stored reliably, and how the system scales when millions of passengers arrive at once. This clear picture shows you understand both the parts and their choreography—exactly what the interviewer wants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
