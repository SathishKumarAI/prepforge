---
qid: ing_b28e07e9ee__eli5__local
question: How do models understand video, and what are the current limits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 232
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:51-05:00'
sources: []
---

Think of a video as a long storybook made of tiny pictures that flash in quick succession—like a flip‑book animation. An AI “reads” it by first looking at each picture (the *frames*) with a visual detector, turning the colors and shapes into numbers. Then a second part, called a *sequence model*, stitches those numbers together over time, just as you remember the plot of a story by connecting its scenes.

The limits come from two places:  
1) **Speed and memory** – seeing every frame at full detail is heavy; many models skip frames or shrink them.  
2) **Understanding depth** – they can spot objects and motion, but still struggle with subtle intent, sarcasm, or long‑term context that a human would catch naturally.

So AI watches videos like a quick flip‑book reader—great for spotting obvious patterns, but not yet the same as fully grasping the narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
