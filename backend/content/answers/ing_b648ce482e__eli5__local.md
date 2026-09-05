---
qid: ing_b648ce482e__eli5__local
question: 'Explain: Replication — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 202
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:28-05:00'
sources: []
---

**Replication is like a library that keeps several copies of the same book.**  
When a reader wants to read “Machine Learning Basics,” they can pick any copy from any shelf—no matter if one shelf has been knocked over or its lights went out, another copy still exists. In computing, we store *replicas* (exact copies) of data or services on different machines. If one machine crashes, others instantly take over, so users never see a break in service.

**Key terms:**  
- **Replica** – an exact copy of data or a program running on another computer.  
- **Fault‑tolerant** – a system that continues working even when some parts fail.  

By keeping multiple replicas and switching to a healthy one automatically, systems stay up, just like readers can always find the book they need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
