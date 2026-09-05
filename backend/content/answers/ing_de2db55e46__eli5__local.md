---
qid: ing_de2db55e46__eli5__local
question: 'Explain: Users complain that characters drift out of persona after a long
  session. Diagnose it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 235
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:23-05:00'
sources: []
---

Imagine the AI as a storyteller who keeps a notebook in its pocket. Every time you ask something, the story grows and the notebook fills with new pages—facts, jokes, plot twists. After a long session, the notebook is so full that the storyteller starts scribbling over earlier pages or forgetting what was written at the beginning. The “persona” of a character (their voice, habits, background) lives on those early pages. When the notebook gets crowded, the character’s original notes blur and the story shifts: they might start acting like someone else or use different words.

This happens because the model can only remember a limited amount of text at once (the “context window”). Once that limit is reached, it has to drop older parts of the conversation. If those dropped parts contained the character’s defining traits, the AI no longer has them in its active memory and will drift away from the persona you set. The fix is to keep the session short or reset the context so the original notes are still fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
