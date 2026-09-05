---
qid: ing_452605f02f__eli5__local
question: 'Explain: Your agent needs to remember things across sessions. Would you
  use a vector store or rolling summarisation? Defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 208
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:08-05:00'
sources: []
---

Imagine your agent is like a smart diary that travels between trips (sessions).  
A **vector store** is a huge filing cabinet where every page of the diary stays exactly as written: you can pull up any specific page later, no matter how long ago it was added.  
Rolling summarisation is more like a notebook where each day you rewrite the previous notes in fewer words; after many days the original details fade into a concise story.

If your agent must *recall precise facts*—names, dates, user preferences—across many sessions, keep a vector store. It preserves every detail unchanged, so later queries can retrieve exact information.  
Rolling summarisation is useful when you only need the gist or want to save space, but it risks losing specifics.  

So choose a vector store when accuracy and full recall are essential; use rolling summarisation when brevity and long‑term trends matter more than exact wording.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
