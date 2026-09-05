---
qid: ing_4e716ab85d__eli5__local
question: 'Explain: The Jupyter+git problem is now solved — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 208
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:41:23-05:00'
sources: []
---

Imagine you’re writing a story on a laptop (Jupyter notebooks) but your friend wants to read the whole draft in one tidy book (a Git repository). The problem is that every time you add a new chapter, the notebook’s invisible “story‑file” gets tangled—Git can’t see it clearly, and you keep losing track of changes.

fast.ai solved this by giving Jupyter a *magic bookmark* called **nbdev**. Think of nbdev as a librarian who watches each notebook page, pulls out the text you actually wrote (the code), turns it into neat book‑chapters (Python modules), and then lets Git read them like any other file. So now your notebooks stay interactive for you, while Git can happily version every line of code without confusion. The result? You get the best of both worlds: live experimentation plus clean source control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
