---
qid: ing_c991f13a9e__eli5__local
question: 'Explain: Protect Against Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 218
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:54:38-05:00'
sources: []
---

Think of a webhook as a messenger that runs into your office every time someone in town sends a note (an event). A *replay attack* is like that messenger bringing the same note again and again, hoping you’ll act on it twice.

To guard against this, we give each note a unique “stamp” – a cryptographic hash that only the sender can create. When your office receives a note, it checks two things:

1. **Is the stamp valid?** (Did the sender really sign it?)  
2. **Have we seen this stamp before?** (Has this exact event already been processed?)

If either check fails, you ignore the note.  

This is exactly what *replay protection* does: it verifies authenticity and remembers past events so duplicates are caught. It’s like a librarian who checks a book’s barcode and keeps a list of books already checked out; if someone tries to hand the same copy again, the librarian says “already done.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
