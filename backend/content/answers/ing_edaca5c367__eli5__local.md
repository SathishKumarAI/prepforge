---
qid: ing_edaca5c367__eli5__local
question: 'Explain: Sliding Window — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 221
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:35-05:00'
sources: []
---

**Sliding Window in a System‑Design interview**

Think of a long road with many traffic lights that can only let cars pass one at a time. A *sliding window* is like a moving “traffic gate” that lets a fixed number of cars (requests) through while the rest wait behind it. As each car passes, the gate moves forward to allow the next car in line.  

In system design, you use this idea when handling streams or large data sets: keep only a recent slice (“window”) of the data in memory, process that slice, then slide the window to bring in new data and drop old data. It lets you limit resource usage (memory, bandwidth) while still working on continuous input.  

Key terms:  
- **Window** – a contiguous chunk of items you’re actively processing.  
- **Slide** – moving the window forward by one or more positions, discarding the oldest items and bringing in new ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
