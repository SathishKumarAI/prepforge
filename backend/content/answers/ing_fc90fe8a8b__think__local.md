---
qid: ing_fc90fe8a8b__think__local
question: 'Explain: Daily Storage Calculation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 626
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:40:17-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “daily storage” exactly?* Assume it’s the total amount of user‑generated content (photos, videos, stories) that needs to be persisted each day.  
- *Which data types and sizes matter?* Photos (~3 MB avg), videos (~10 MB avg for 15‑sec clips), stories (~2 MB).  
- *What metrics do we need?* Raw daily ingestion, retention (how many days we keep old data), redundancy (replication factor), compression ratio.  
- *Any business constraints?* Cost per GB, latency, regional availability.

**2️⃣ Adopt a layered mental model**  
1. **User‑level layer** – average uploads per user per day.  
2. **Content type layer** – distribution of photos vs videos vs stories.  
3. **Storage layer** – raw size → compressed/encoded size → replicated storage.  
4. **Retention & archival layer** – hot tier, warm tier, cold tier.

Use the *“average × number of users”* formula and then scale by redundancy.

**3️⃣ Step‑by‑step reasoning**  
a. Estimate average uploads: e.g., 50 % photos (3 MB), 30 % videos (10 MB), 20 % stories (2 MB).  
b. Compute per‑user daily size: `0.5*3 + 0.3*10 + 0.2*2 ≈ 4.8 MB`.  
c. Multiply by active user count (say 1 B users) → ~4.8 TB raw/day.  
d. Apply compression/encoding savings (~30%) → ~3.36 TB.  
e. Add replication factor (×3 for HA) → ~10 TB of physical storage needed per day.  
f. Incorporate retention: if we keep 365 days in hot tier, total ≈ 10 TB × 365 ≈ 3.65 PB.  

**4️⃣ Avoid common pitfalls**  
- Don’t forget *metadata* (likes, comments) – they can be small but still add up.  
- Ignore *video length variation*; longer videos skew the average.  
- Overlook *regional replication* which multiplies cost.  
- Assume linear scaling—real systems have bursty traffic and peak periods.

**5️⃣ Sanity‑check & articulate**  
- Cross‑validate with known benchmarks (e.g., YouTube’s storage numbers).  
- Present a table summarizing each assumption and intermediate result.  
- Explain how changing one variable (e.g., doubling video upload rate) would ripple through the calculation.  

This structured approach ensures you cover all facets of the problem, avoid hidden assumptions, and can confidently communicate the logic to interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
