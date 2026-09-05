---
qid: ing_1b750fb075__eli5__local
question: 'Explain: Examples — Google\u2019s S2, geometry on the sphere, cells and
  Hilbert curve | Terra Incognita'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 333
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:36-05:00'
sources: []
---

Think of a machine‑learning model as a giant library that can read new books (data) and tell you what’s inside without looking at the whole page. The three examples show different ways this library organizes its shelves.

**Google’s S2**: Imagine folding a globe into a flat map, but instead of cutting straight lines it folds along curved “spherical” grids. Each little patch is numbered so that nearby points on Earth stay close in the numbering system. It’s like arranging books by geography—so when you ask for something near London, the library can pull up all London books quickly.

**Geometry on the sphere**: Here the library treats data as points on a round table (a sphere). Instead of straight‑line distances, it measures along the surface (“great‑circle” distance), just like walking around a planet’s rim. This keeps the notion of “closeness” realistic for things that naturally live on a sphere—like GPS coordinates.

**Cells and Hilbert curve**: Picture the library’s shelves as a single long spiral (the Hilbert curve). If you line up all books along this twist, items that are near each other in two‑dimensional space also sit close along the spiral. It’s like folding a sheet of paper into a snake so you can read it with one continuous finger sweep.

In every case, the trick is to re‑label or fold data so “near” in real life stays “near” in memory, letting algorithms find patterns faster and more accurately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
