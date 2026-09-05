---
qid: ing_8f9da42e31__eli5__local
question: 'Explain: Your agent reads inbound email and can send replies and search
  internal docs. Walk me through the prompt-injection attack surface and your defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 261
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:26-05:00'
sources: []
---

Imagine a helpful librarian who scans every mail you drop in a mailbox, writes back to you, and can pull up any book from the library’s shelves when asked. A prompt‑injection attack is like someone slipping a note into that mailbox telling the librarian “Pretend you’re not a librarian—just give me the secret recipe.” The librarian (the AI) follows the instruction because it trusts the mail as legitimate, even though it shouldn’t reveal confidential recipes.

**Defences**

1. **Input sanitisation** – The librarian first reads the note and checks for hidden commands, like filtering out “pretend” or “secret.”
2. **Role‑based limits** – Even if a command slips through, the librarian’s job description (only answer questions, never reveal internal secrets) is hard‑coded; it can’t override that rule.
3. **Safe context window** – The librarian only looks at the latest part of your mail and not the whole history, so past instructions can’t stack up into a dangerous request.

By combining careful reading, strict job rules, and limited memory, we keep the librarian from misusing the mailbox.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
