---
qid: vq_afedf566ea__aws__local
question: WHAT ARE UNION AND UNION ALL, AND HOW DO THEY DIFFER?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 346
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:09:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I was designing a data pipeline for the new **Real‑Time Analytics** product, we had to merge two nightly fact tables – *sales* and *returns*. The business asked: “Do we need duplicate rows?” That’s when I explained the difference between **UNION** and **UNION ALL**.

| Feature | UNION | UNION ALL |
|---------|-------|-----------|
| Deduces duplicates | ✔️ (uses `DISTINCT`) | ❌ |
| Execution cost | Higher – requires sorting & hashing | Lower – simple append |
| Result size | ≤ sum of inputs | = sum of inputs |

**Situation:** 10 M rows in *sales*, 2 M in *returns*.  
**Task:** Merge into a single fact table for downstream reporting.  
**Action:** I benchmarked both operators on our Redshift cluster: UNION took ~18 min, UNION ALL ~6 min. Because the two tables had no overlapping primary keys, duplicates were impossible; we opted for **UNION ALL** to save 12 minutes of runtime and reduce compute cost by ~30%.  
**Result:** The pipeline went from 48 h to 42 h weekly, freeing 0.2 TB of S3 storage per month and cutting AWS bill by $1.5k/month.

I owned the decision, dove deep into data characteristics, and delivered measurable results—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
