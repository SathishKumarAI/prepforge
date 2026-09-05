---
qid: ing_ecacd10228__eli5__local
question: 'Explain: Distribution options to implement sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 242
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:12-05:00'
sources: []
---

Imagine you’re running a huge library (your machine‑learning model) that many readers (training jobs) want to use at once. Sharding is like splitting the library into separate, smaller branches so each reader can go to a branch that has just the books they need, instead of all fighting for one shelf.

**1. Horizontal sharding (data‑parallel)** – Each branch keeps the same set of books but only a few copies. Readers share the workload by working on different parts of the same story simultaneously.  
**2. Vertical sharding (model‑parallel)** – The library is divided by subject: one branch handles all the physics chapters, another all the biology ones. Readers pick the branch that matches their interest.  
**3. Hybrid sharding** – Combine both: split the library into several smaller branches, and within each branch further divide the subjects.

Each option trades off speed, memory use, and how much coordination you need between branches—just like choosing whether to open many small libraries or a few big ones with specialized sections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
