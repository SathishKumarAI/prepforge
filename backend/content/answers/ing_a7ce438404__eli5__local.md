---
qid: ing_a7ce438404__eli5__local
question: 'Explain: Shell commands and scripting — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 314
total_tokens: 489
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:03:50-05:00'
sources: []
---

Imagine your computer is a kitchen where you can tell it what to do by writing simple recipes (scripts). **Shell commands** are the single‑step instructions like “mix” or “boil,” while a **script** strings those steps together, so the kitchen runs them automatically.

When Meta’s AI‑assisted coding interview asks you to write a script, the AI acts like a sous‑chef that suggests ingredients and steps. For example:

- Prompt: *“Create a Bash script that lists all .txt files in a folder.”*  
  AI answer: `#!/bin/bash\nls *.txt`

- Prompt: *“Write a Python shell command that counts lines in each file.”*  
  AI reply: `python - <<'PY'\nimport sys\nfor f in sys.argv[1:]:\n    with open(f) as h:\n        print(f, sum(1 for _ in h))\nPY\n file1.txt file2.txt`

You give the AI a clear question (the prompt), and it returns a ready‑to‑run recipe. The key is to describe what you want in plain words—“list files,” “count lines”—and let the AI translate that into the correct shell or script code. This keeps the interview focused on problem understanding rather than syntax tricks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
