---
qid: ing_6a6a94e16a__eli5__local
question: Walk me through streaming TTS. How do you chunk input text, and how do you
  size the jitter buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 245
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:40-05:00'
sources: []
---

Imagine a chef (the TTS engine) making a long soup from a recipe book (your text).  
Instead of reading the whole book at once, the chef reads it in **chunks**—small paragraphs or sentences that fit comfortably into the stove’s pot. Each chunk is cooked (converted to audio) and poured out immediately, so you hear the first spoonful before the rest is ready.

The **jitter buffer** is like a little tray that catches any uneven pours. Because the stove may heat slightly faster or slower on different days, the tray holds a tiny amount of soup (audio samples) to smooth out these speed bumps.  
A good rule: keep the tray about 200 ms worth of soup—enough to hide small hiccups but not so much that you taste a delay.  

So, chunk the text into bite‑sized sentences, feed them one by one to the TTS “stove,” and let a modest jitter buffer (≈200 ms) keep the audio flowing smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
