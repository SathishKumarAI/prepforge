---
qid: vq_3594dd9976__eli5__local
question: Describe the advantage of utilizing --password-file rather than -p option?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 194
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:15-05:00'
sources: []
---

Imagine you’re sending a secret recipe to your friend. If you write the ingredients on a note and hand it straight to them, that’s like using **‑p** (putting the password right in the command). It’s quick but anyone who sees the note—or if the note is accidentally left in a public folder—gets the recipe.

Now picture putting the same recipe inside a locked envelope and giving only your friend the key. That’s what **--password-file** does: it keeps the password in a separate, protected file that the program reads when needed. It hides the secret from anyone who can look at the command line or history, reduces accidental leaks, and lets you reuse the same secure file across many commands without typing the password each time. In short, it’s safer and more convenient for repeated use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
