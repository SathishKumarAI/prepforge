---
qid: ing_e53440ccd3__eli5__local
question: 'Explain: How NETFLIX onboards new content: Video Processing at scale 🎥'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 212
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:37:49-05:00'
sources: []
---

Imagine Netflix as a giant library that never closes. When a new movie or show arrives, the first job is to *scan* it—just like a librarian checks every page of a book for damage and notes where chapters begin. In tech terms this is **video processing at scale**: computers look at each frame, pull out color, sound, subtitles, and compress everything so it can be streamed smoothly.

Think of the process as a relay race. One computer grabs the raw video (the runner 1), passes it to another that cleans and resizes it (runner 2), then hands it off to a final system that stores it in many locations worldwide (runner 3). Each “runner” is a cluster of servers working together, so even if thousands of new titles arrive at once, the library keeps moving without missing a beat.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
