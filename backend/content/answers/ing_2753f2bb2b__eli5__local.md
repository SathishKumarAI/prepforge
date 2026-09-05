---
qid: ing_2753f2bb2b__eli5__local
question: What does "grounding" mean for a VLM, and how does a model actually output
  a bounding box?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 222
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:38:04-05:00'
sources: []
---

Imagine you’re playing a game of “I spy” with a friend who can see the room but only talks in text.  
**Grounding** is that friend’s way of saying, “I’m looking at this exact thing I mentioned.” In a Visual‑Language Model (VLM), grounding means linking a word or phrase (“the red cup”) to its precise location inside an image.

When the model says it has found the cup, it doesn’t just output a sentence. Internally it runs a tiny “finder” that scans the picture for regions matching what the language described. It then spits out four numbers—top‑left corner (x₁,y₁) and bottom‑right corner (x₂,y₂)—which form a rectangle or **bounding box** around the cup.  
So grounding is the bridge from words to exact spots in pixels, and the bounding box is the map that shows where each word actually sits in the visual scene.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
