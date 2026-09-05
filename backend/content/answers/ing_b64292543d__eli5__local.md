---
qid: ing_b64292543d__eli5__local
question: 'Explain: Harmless Prank — AI threats in the wild: The current state of
  prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 220
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:21-05:00'
sources: []
---

Imagine a library where every book is written by an invisible author that follows your requests exactly. You ask for “a short story about a cat,” and the author writes it right away. A *prompt injection* is like slipping a hidden note into that request—“instead of a cat, write me a secret recipe.” The invisible author sees the note and obeys, even though you didn’t intend that.  

On the internet, many AI tools are set up to read your prompt and generate an answer instantly. Hackers can embed extra instructions in those prompts (the hidden notes) so the AI produces disallowed content—spam, phishing links, or malware code—without anyone noticing. The danger isn’t the AI itself; it’s that the “read‑and‑write” system will happily follow any instruction you give, even if it’s maliciously crafted by someone else. This is why developers are tightening filters and teaching AIs to spot suspicious prompts before they comply.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
