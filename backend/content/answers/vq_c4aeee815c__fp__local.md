---
qid: vq_c4aeee815c__fp__local
question: How do you find gaps in a sequence in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 570
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:22-05:00'
sources: []
---

**Finding gaps in a sequence stored in a table**

The core problem is to detect intervals where the natural number line has no record.  
Let the table `seq(id)` contain an increasing, unique integer column (possibly with holes).  
We want all ranges \([a,b]\) such that every integer \(k\in[a,b-1]\) is missing but both endpoints \(a\) and \(b\) are present in the data.

---

### 1.  Reduce to a *difference* problem  

If we sort the table, consecutive rows differ by at least one:

```
Δ_i = id_{i+1} – id_i
```

A gap exists exactly when Δ_i > 1.  
The size of the missing interval is `Δ_i-1`.  
This is a discrete derivative: we are looking for jumps in the cumulative count.

---

### 2.  Compute Δ_i with a window function

```sql
SELECT id,
       LAG(id) OVER (ORDER BY id) AS prev_id
FROM seq;
```

The gap start is `prev_id + 1`; the end is `id - 1`.  
We keep only rows where `id > prev_id + 1`.

---

### 3.  Return the gaps

```sql
SELECT prev_id + 1      AS gap_start,
       id - 1            AS gap_end
FROM (
    SELECT id, LAG(id) OVER (ORDER BY id) AS prev_id
    FROM seq
) s
WHERE id > COALESCE(prev_id, 0) + 1;
```

If the sequence should start at a known minimum `m`, add a dummy row (`id = m-1`) to catch an initial gap.

---

### Non‑obvious insight  

The *lag* trick works because a sorted list of integers is a discrete analogue of a cumulative distribution function.  
Gaps correspond to places where the CDF jumps more than one unit—exactly what `LAG` captures in O(n) time without any set operations or auxiliary tables.

---

**Complexity:** \(O(n)\) time, \(O(1)\) extra space (aside from the result).  
This approach generalises directly to other monotonic sequences and to detecting gaps in composite keys by applying the same logic per key group.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
