---
qid: ing_3c6541fdbc__eli5__local
question: Walk me through writing a finished note back into Epic. What goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 331
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:11:43-05:00'
sources: []
---

Imagine your computer is a giant library called **Epic** where every patient’s story lives on paper‑less shelves. When an AI writes a new “note” (a paragraph of text about the visit), you must give it a proper address so Epic knows where to put it.

1. **Pick the right folder** – choose the patient, the encounter, and the note type (progress, discharge summary, etc.).  
2. **Format the text** – Epic expects plain text or structured sections; fancy markdown or hidden characters can confuse it.  
3. **Send it through the API** – you send a JSON package that says “add this note to patient X, encounter Y.”  
4. **Confirm receipt** – Epic replies with a success code and the new note’s ID.

What can go wrong?  
- **Wrong patient or encounter IDs** – the note ends up in someone else’s file or nowhere at all.  
- **Missing required fields** (like author name or date) – Epic rejects it outright.  
- **Bad formatting** – hidden HTML tags or line breaks break the layout, making the note unreadable.  
- **API limits exceeded** – too many notes sent in a short time and the system throttles you.

Think of it like sending a postcard: if you forget the recipient’s address or write in an indecipherable language, the postal service (Epic) can’t deliver your message correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
