---
qid: ing_10dfd4e72f__eli5__local
question: 'Explain: 14.1.1.2. Changing Colors ¶ — 14.1. Image Augmentation \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 191
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:24-05:00'
sources: []
---

Think of an artist who paints a landscape but wants to show how it looks under different lighting: sunrise, noon sun, or twilight.  
In deep learning, “changing colors” is the same idea for computer‑vision data. The image is a picture made up of tiny colored squares called **pixels**. By randomly shifting each pixel’s red, green and blue values (or swapping them), we create many new versions that look like the same scene under different lights or camera settings.  

This trick is called **color jittering** or “changing colors.” It teaches a neural network to recognize objects no matter how their colors appear, just as the artist’s landscape looks familiar whether it’s bright or dim. The result: a model that works well on real‑world photos taken in many lighting conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
