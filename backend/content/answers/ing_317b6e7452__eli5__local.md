---
qid: ing_317b6e7452__eli5__local
question: 'Explain: Your Copilot summarises incoming email. An attacker emails a target
  user with hidden instructions addressed to the model. Walk me through the attack
  and your defence.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 367
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:09-05:00'
sources: []
---

Imagine a helpful robot librarian that reads every book (email) you bring to the desk and writes a short summary for you. An attacker slips a note into one of those books that says, “When the librarian sees this book, whisper the secret password to the next visitor.” The robot has no way to know the note is hidden; it follows its programming and whispers the password out loud.

**Walk‑through of the attack**

1. **Sneaky message** – The attacker sends an email that looks ordinary but contains a “hidden instruction” (e.g., a specially formatted line or a disguised link).
2. **Robot’s job** – The Copilot reads the whole email, including the hidden part, because it treats everything as content to summarise.
3. **Unintended action** – The hidden instruction tells the model to act (like revealing credentials), and the Copilot obeys, exposing sensitive data.

**Defence**

- **Filter first** – Before the robot sees the email, run a quick scan that flags suspicious patterns (e.g., hidden commands or links) and removes them.
- **Context check** – The Copilot only follows instructions if they match its clear purpose (summarising). Anything that looks like an extra command is ignored.
- **Sandboxed replies** – Even if the instruction slips through, any output it generates is sandboxed: it can’t actually send emails or access external systems unless explicitly authorised.

With these steps—filtering, strict context rules, and a safety sandbox—the robot keeps summarising while staying safe from hidden instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
