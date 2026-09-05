---
qid: ing_66f86911f8__eli5__local
question: 'Explain: i would like you to design a — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 274
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:19:22-05:00'
sources: []
---

Imagine you’re building a giant library that only holds cars instead of books. The “library” is the parking garage, and each car is like a book that needs to be shelved in the right spot so it can be found quickly later.

**Key idea:** Treat every parking spot as a “slot” with a unique address (level, row, column). When a driver enters, you give them a “ticket” that records which slot they’re using. The system must keep track of free slots (like an inventory list) and update it whenever someone parks or leaves.

**How it works:**
1. **Arrival:** Scan the ticket, look up the nearest free slot on the current level, assign it, and lock the spot.
2. **Departure:** Driver returns the ticket; the system frees that slot for future use.
3. **Search:** If a driver wants to find their car later, they give the ticket number; the system tells them the exact address.

This simple “slot‑address‑ticket” map is the core of any parking‑garage design interview—no fancy math needed, just clear mapping and state tracking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
