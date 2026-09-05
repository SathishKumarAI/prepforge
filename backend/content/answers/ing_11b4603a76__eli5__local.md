---
qid: ing_11b4603a76__eli5__local
question: 'Explain: Reservation APIs — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 234
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:45-05:00'
sources: []
---

Think of a big library that keeps track of every book you can borrow.  
When someone wants to reserve a book, they call the **Reservation API**—the library’s phone line. The API does three things:

1. **Check availability** – it looks at the catalog to see if the book is on the shelf or already checked out.
2. **Reserve the spot** – if it’s free, the API writes a note in the book’s record saying “reserved by you” and starts a timer (the reservation window).
3. **Confirm or cancel** – when the person actually takes the book, the API updates the record to “checked out.” If they never pick it up before the timer runs out, the reservation is released.

In Airbnb’s system, each listing works like that book: the Reservation API checks if a room is free on the chosen dates, locks it for the guest, and releases it if the guest doesn’t confirm. This keeps hosts’ calendars accurate and prevents double‑booking chaos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
