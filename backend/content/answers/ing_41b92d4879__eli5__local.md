---
qid: ing_41b92d4879__eli5__local
question: 'Explain: Linked List (6 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 300
total_tokens: 460
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:20:30-05:00'
sources: []
---

Imagine a chain of dominoes, each one holding a tiny card that points to the next domino in line. That’s a **linked list**: a sequence of nodes where every node knows only its own data and the address (or “link”) of the following node.

In the Blind 75 set of linked‑list challenges, you practice moving through or rearranging this chain without looking ahead—just like arranging dominoes by touching them one at a time. The six common problems are:

1. **Reverse** – turn the chain so the last domino becomes first.  
2. **Detect Cycle** – find if the dominoes loop back on themselves, forming an endless circle.  
3. **Merge Two Sorted Lists** – weave two already‑ordered chains into one tidy line.  
4. **Remove Nth Node From End** – pick a domino that is *n* spots from the end and take it out without counting all the way from the start.  
5. **Add Two Numbers** – treat each chain as a reversed number, add them digit by digit, and produce a new chain of the sum.  
6. **Intersection** – locate the exact domino where two separate chains first join.

Each task trains you to think in terms of “next” pointers, just like sliding one domino at a time while keeping the whole sequence intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
