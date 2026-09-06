---
qid: ing_a7b6380b59__fp__local
question: 'Explain: Index of system design topics — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 418
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:01:51-05:00'
sources: []
---

**Why a System‑Design Index Exists**

When you interview for a large‑scale product, the interviewer asks: *“How would you build X?”*  
You cannot just list features; you must demonstrate that every architectural choice follows from **trade‑off optimization** (latency vs. consistency vs. cost). The index is therefore a map of the **design problem space**—each entry is a dimension in which a solution can vary.

| Topic | Fundamental Problem | Core Principle |
|-------|---------------------|----------------|
| *Scalability* | “How many requests per second?” | Load‑balancing & horizontal scaling (divide and conquer). |
| *Reliability* | “What if a node dies?” | Redundancy + graceful degradation (fault isolation). |
| *Consistency* | “Do all users see the same data?” | CAP theorem: pick your trade‑off. |
| *Latency* | “How fast must a response be?” | Edge caching & request pipelining. |
| *Security* | “Who can read/write?” | Least privilege + defense‑in‑depth. |

**Deeper Insight**

Most people treat each topic in isolation, but they are **mutually constrained by information theory**: the amount of data you must propagate (bandwidth) limits how fast you can keep replicas consistent, which in turn dictates your latency budget. The index forces you to think of these constraints as a *systemic optimization problem* rather than independent boxes.

**Non‑obvious takeaway**

The *“index”* is not just a checklist; it’s a **constraint‑solver**. By arranging topics in a hierarchy (core → sub‑topics), interviewers gauge whether you can map a real requirement to the right trade‑off space, and whether you’ll iterate between design choices rather than locking into one solution prematurely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
