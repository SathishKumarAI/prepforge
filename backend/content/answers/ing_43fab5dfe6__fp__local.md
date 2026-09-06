---
qid: ing_43fab5dfe6__fp__local
question: 'Explain: Find the top-K most frequent items in a high-volume event stream
  with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 510
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:30:37-05:00'
sources: []
---

**Problem formulation**

We observe an unbounded sequence of events \(e_1,e_2,\dots\), each labeled by a key (item).  
With only \(M\) words of RAM we must output the *top‑\(K\)* items that occur most often so far, while never knowing the total number of distinct keys in advance.  

**Why a naive counter fails**

A perfect histogram needs one counter per distinct item; with high cardinality this blows up beyond \(M\).  
We need a *lossy* summarizer: it must guarantee that any item whose true frequency exceeds a threshold \(\epsilon N\) (where \(N\) is the number of processed events) will appear in the output, while the rest may be omitted.

**Space‑saving algorithm**

Maintain at most \(K-1\) “candidate” counters.  
For each incoming event:

1. If its key already has a counter, increment it.
2. Else if fewer than \(K-1\) counters exist, create one with count = 1.
3. Otherwise replace the smallest counter by this key and set its count to that minimum plus 1.

*Why it works.*  
When an unseen item replaces the minimal counter, we add at most the true frequency of that minimal item. Thus after processing all events, any item whose real frequency \(f\) exceeds \(\epsilon N = N/(K-1)\) must have survived as a candidate; otherwise its count would have been eclipsed by some other item’s cumulative “error” below \(\epsilon N\). The algorithm uses only \(O(K)\) space and linear time.

**Non‑obvious insight**

The replacement rule is equivalent to maintaining the *top‑\(K-1\)* prefix of a sorted list under insertion, but with an implicit *decay*: every new item forces a “push” that compresses the tail. This decay guarantees that low‑frequency items are automatically pruned without explicit counting, leveraging the fact that the stream’s entropy concentrates on few heavy hitters—an instance of the **heavy‑tail principle** in information theory.

Thus, with bounded memory we can recover the exact top‑\(K\) items up to a provable error bound using only a simple counter structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
