---
qid: ing_1d2ec4da93__eli5__local
question: The model outputs markdown. How do you render it safely, and what specifically
  can go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 264
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:22:21-05:00'
sources: []
---

Think of Markdown like a recipe that turns plain text into pretty dishes—bold, links, code blocks. When you hand the finished dish to someone else, you want to make sure no hidden poison was mixed in.  
In web terms, “rendering” means turning the Markdown string into HTML that browsers can display. If we let any user‑supplied Markdown go straight through, a malicious author could slip in a link that looks harmless but contains JavaScript (e.g., `<a href="javascript:alert(1)">click</a>`). When someone clicks it, their browser runs the script—this is called *cross‑site scripting* (XSS).  
To keep safe, we first “sanitize” the Markdown output: strip or escape dangerous tags and attributes, allow only a whitelist of safe elements (like `<b>`, `<i>`, `<a href>` with http/https schemes), and never let user code run. Then we can render the cleaned HTML confidently.  

So rendering is like serving a cooked meal after checking every ingredient—clean it first, then serve safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
