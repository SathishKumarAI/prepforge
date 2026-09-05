---
qid: ing_86af2bdbc9__eli5__local
question: 'Explain: The decoder-only transformer, top to bottom'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 223
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:09:31-05:00'
sources: []
---

Imagine you’re writing a story in a notebook that only has one column of pages. Each page is a sentence, and every time you write a new sentence you look back at all the previous ones to decide what comes next. That’s exactly how a **decoder‑only transformer** works.

*Decoder‑only*: it only “decodes” or generates text; it never looks ahead to future words like some models do.  
*Transformer*: the notebook is organized so that every sentence can see every earlier one through a web of attention links, letting each new word weigh all past context.  
*Top to bottom*: we read the story from the first page (the beginning) down to the last; the model processes tokens in order, always using only what came before.

So picture a single‑column notebook where you keep adding sentences, each one crafted by looking back at every earlier sentence—no future pages are consulted. That’s the decoder‑only transformer in plain terms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
