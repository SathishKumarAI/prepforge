---
qid: ing_1eb12e97ba__eli5__local
question: 'Explain: NVL: links within groups, PCIe between them'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 214
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:51-05:00'
sources: []
---

Think of each GPU as a **room** that needs to talk to other rooms.  
- **PCIe (Peripheral Component Interconnect Express)** is like a long hallway that runs between all the rooms. It’s reliable and works with any room, but it can get crowded: only one pair of rooms can use a particular stretch at a time, so traffic slows when many rooms chat simultaneously.  
- **NVLink** is a set of *high‑speed walkways* built inside the building that connect specific pairs of rooms directly. These walkways are wider and faster than the hallway, letting two rooms share data quickly without waiting for the hallway to clear. They’re also designed so several rooms can talk at once by using different walkways.

So, PCIe is a general‑purpose path everyone shares; NVLink is a specialized, high‑bandwidth shortcut that lets GPUs exchange large amounts of information faster when they’re grouped together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
