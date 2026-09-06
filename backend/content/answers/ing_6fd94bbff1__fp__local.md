---
qid: ing_6fd94bbff1__fp__local
question: 'Explain: From a high-volume query stream, maintain the top-k most frequent
  queries right now, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 502
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:56-05:00'
sources: []
---

### The “heavy‑hitter” problem

We receive a continuous stream \(q_1,q_2,\dots\) of search queries and want, at any instant, the **k most frequent** ones using only *O(k)* memory.  
The challenge is that we cannot store all distinct queries (their number may be unbounded).  

---

### Why a simple counter table fails

If we keep one counter per distinct query, the space grows with the stream length.  
Instead, we need to **compress** the state while guaranteeing that any item whose true frequency exceeds \(\frac{1}{k}\) of the stream will appear in our answer.

---

### Space‑Saving algorithm (derived from error bounds)

Maintain a table \(T\) of at most \(k+1\) entries.  
For each incoming query \(q\):

1. **If \(q\in T\)**, increment its counter.
2. **Else if \(|T|<k\)**, insert \(q\) with counter = 1.
3. **Otherwise** (table full and \(q\notin T\)):
   * Replace the entry with the smallest counter by \((q,\text{min}+1)\).

*Why this works:*  
Let \(c_{\min}\) be the smallest counter in \(T\). Every time a non‑recorded query replaces it, we increase that counter by 1. Thus each replacement adds at most 1 to the *error* of every item currently missing from \(T\). After processing \(N\) queries, any omitted query’s true count can exceed its stored counter by at most \(\frac{N}{k}\). Therefore, if a query’s frequency > \(N/k\), it must have survived in \(T\).  

---

### Non‑obvious insight

The algorithm **does not need to know the stream length**; the error bound is *relative* to the number of updates seen so far.  
This “dynamic” guarantee means we can maintain top‑k on a live feed without any pre‑scanning or epoching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
