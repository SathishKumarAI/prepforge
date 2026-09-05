---
qid: vq_a7ca18ce48__eli5__local
question: what are different schedulers in yarn?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 245
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:10-05:00'
sources: []
---

Imagine a busy kitchen where many chefs (applications) need ovens (resources). YARN’s scheduler is the head‑chef who decides which chef gets an oven and for how long.

**1. FIFO (First In, First Out)** – Like a line at a deli: the first chef to arrive gets all the ovens until finished. Simple but can leave later chefs waiting forever if one job hogs resources.

**2. Capacity Scheduler** – Think of separate pastry, grill, and salad stations each with a guaranteed oven share (capacity). Chefs are assigned to a station; even if one station is idle, its unused capacity can be borrowed by others, ensuring every group gets at least its promised share.

**3. Fair Scheduler** – Picture a round‑robin potluck where each chef receives an equal slice of oven time. If a chef finishes early, their slice is redistributed so everyone stays balanced and no one dominates the kitchen.

Each scheduler maps to a different “kitchen rule set” for distributing YARN’s compute resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
