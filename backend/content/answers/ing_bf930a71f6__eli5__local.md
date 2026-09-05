---
qid: ing_bf930a71f6__eli5__local
question: 'Explain: Video: frames are expensive — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 249
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:41-05:00'
sources: []
---

Think of a movie as a long train ride where each car is one frame.  
A single frame looks like a still picture, but the whole movie needs thousands of them—one every 1/24th of a second for smooth motion.  

Now imagine you’re a librarian who must check every book on the train to see if it contains a specific word (the “information” you want). Checking one book takes time; checking 2 000 books takes a lot more. That’s what a computer does with video: each frame is read, decoded, and analyzed, so processing a whole clip is much costlier than analyzing just one image.

When we talk about *multimodal* AI, the train isn’t only cars of pictures; it also carries cars of sound, text, or sensor data. The system has to look at all those cars together, which adds another layer of complexity—like having to read books in multiple languages simultaneously. Thus, video is “expensive” because you’re dealing with a huge number of frames plus extra modes of information that the AI must process together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
