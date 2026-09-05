---
qid: ing_ddc6233bca__eli5__local
question: 'Explain: Serving Pipeline — How Google/Apple Maps Blur License Plates and
  Faces'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 217
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:35-05:00'
sources: []
---

Imagine your phone is a busy restaurant that serves two dishes at once: **(1) the map you see, and (2) privacy protection**.  
When a camera takes a picture of a street, the image first goes into a *pre‑processing kitchen* where it’s split into small tiles. One set of chefs looks for license plates and faces—these are “sensitive objects.” If a chef spots one, he draws a black oval over it (the **blur**). The other chefs just clean up lighting and sharpen the background so you still see streets clearly.  
Once every tile is finished, all the pieces rush back to the main kitchen, reassembled into a single image that’s safe to serve on Google or Apple Maps.  
In tech terms: this whole workflow—capture → detect sensitive content → blur → merge → display—is called the **serving pipeline** for privacy‑aware mapping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
