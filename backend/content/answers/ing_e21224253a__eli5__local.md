---
qid: ing_e21224253a__eli5__local
question: 'Explain: The First Architectural Decision: Docker Before Kestra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 215
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:45-05:00'
sources: []
---

**Docker before Kestra**

Imagine you’re building a big Lego city (your data pipelines).  
First, you need a **stable base** for each block so that it never falls apart or sticks to the wrong spot. That’s what **Docker** does: it puts every Lego piece into its own little box with exactly the right bricks and instructions inside. The box guarantees that the piece will work no matter where you drop it—on your laptop, a friend’s computer, or the cloud.

Once every block is safely boxed, you can start arranging them into streets and buildings. **Kestra** is like the city planner: it tells each Docker‑boxed block when to move, what data to fetch, and how to hand off its output to the next block. By putting Docker first, you ensure that Kestra’s “traffic lights” always see reliable, identical blocks, so your whole city runs smoothly without surprises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
