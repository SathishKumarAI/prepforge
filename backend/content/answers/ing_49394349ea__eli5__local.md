---
qid: ing_49394349ea__eli5__local
question: Explain momentum and Adam. What problem does each solve over vanilla SGD?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 267
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:33:15-05:00'
sources: []
---

Imagine training a model is like walking down a winding mountain trail (the loss surface).  
With **vanilla SGD** you take one step at a time, always pointing straight toward the lowest spot ahead. If the trail has rough patches or steep dips, those single steps can bounce back and forth, making progress slow.

**Momentum** is like carrying a small backpack that remembers how fast you’ve been moving before. Each new step adds a bit of your previous speed to the direction you choose now. This smooths out the zig‑zagging: if you’re going downhill, momentum keeps you sliding forward; if you hit a bump, it helps carry you over instead of stopping abruptly.

**Adam** is like having two backpacks at once: one that remembers how fast you’ve been moving (momentum) and another that records how steep the trail feels in each direction (adaptive learning rates). The second backpack adjusts the size of your steps for every direction separately, so you take larger strides on gentle slopes and smaller ones where the ground is rocky.  

Both tricks let the walker reach the valley faster and more reliably than just taking plain SGD steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
