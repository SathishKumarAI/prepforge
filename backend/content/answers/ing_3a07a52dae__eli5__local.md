---
qid: ing_3a07a52dae__eli5__local
question: When would you ask for JSON, XML tags, or markdown as your output format?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 264
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:06-05:00'
sources: []
---

Imagine you’re sending a recipe over the phone.  
If the chef wants just a quick note, you hand them plain text – no special formatting needed.  

**JSON (JavaScript Object Notation)** is like writing that recipe in a tidy list of ingredients and steps that a computer can read instantly. Ask for JSON when you need data that will be parsed or stored by another program—think of it as the “machine‑friendly” version.

**XML (eXtensible Markup Language)** is similar, but with extra tags that act like labels on each ingredient (“<ingredient>”) and step (“<step>”). Use XML when the receiving system expects a more verbose, self‑describing format—often in enterprise or legacy environments where strict structure matters.

**Markdown** is the recipe written for humans: bold titles, bullet lists, links. Request Markdown when you want something that’s easy to read in plain text editors or on web pages—great for documentation or quick sharing.

So: plain text for simple notes, JSON for programmatic data, XML for structured, labeled data, and markdown for human‑friendly formatting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
