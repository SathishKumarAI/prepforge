---
qid: ing_312fcfa6e1__eli5__local
question: 'Explain: 14.1.1.1. Flipping and Cropping ¶ — 14.1. Image Augmentation \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 231
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:46-05:00'
sources: []
---

Imagine a photographer who wants to teach a robot how to recognize faces no matter the angle or size.  
The photographer takes one photo and then creates new “clones” by **flipping** it horizontally—like turning a picture over a mirror—to show the face from the opposite side.  
Next, she **crops** the image: she cuts out a smaller square around the eyes, nose, or mouth, just as you might zoom in on a favorite part of a photo.  

In deep‑learning terms:

* **Image augmentation** is making extra training pictures so the robot sees many variations of the same scene.  
* **Flipping** reverses the image left‑to‑right (mirror) or up‑down, giving the model both orientations.  
* **Cropping** selects a sub‑region, often keeping the subject centered but changing its size.

These simple tricks help the neural network learn that a face is still a face even if it’s mirrored or partially visible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
