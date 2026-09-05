---
qid: ing_ac4deddfdc__eli5__local
question: 'Explain: Input Isolation (XML & Markers) — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 204
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:10:51-05:00'
sources: []
---

Think of a recipe book that you want to share with friends.  
The book is written in a special format (XML) so every ingredient and step is wrapped in clear tags, like `<ingredient>flour</ingredient>` or `<step>mix dough</step>`. Before the book reaches your friends, you put a safety seal—markers—that says “this text is only for cooking.”  

When someone tries to sneak in their own instructions (prompt injection), they can’t break through because the format and markers keep the original recipe separate. The system reads only what’s inside the tags and ignores anything outside them, just like your friends see only the trusted recipe and not any hidden notes you might have slipped in.

So XML + markers act as a lockbox: they isolate legitimate input from malicious additions, keeping the AI’s responses safe and on track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
