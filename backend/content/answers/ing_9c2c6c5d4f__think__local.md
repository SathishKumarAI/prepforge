---
qid: ing_9c2c6c5d4f__think__local
question: 'Explain: We need to make one more assumption — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 451
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:24:03-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *Clarify*: “What does ‘make one more assumption’ mean?”  
  – Are we adding a simplifying premise about data, users, or scalability?  
  – Likely it’s a design‑specific simplification (e.g., assume a single city).  
- *Assumptions to state*:  
  – Users only search within a fixed radius.  
  – All venues have static coordinates.  
  – No real‑time traffic updates.

**2️⃣ Choose a mental model**  
Use the **“Scalable System Design” framework**:  
1. Problem definition → 2. Functional requirements → 3. Non‑functional constraints → 4. High‑level architecture → 5. Data modeling → 6. Scaling & caching strategies.

**3️⃣ Reason step by step**  
- Start with functional flows (search → ranking → display).  
- Identify bottlenecks: query latency, data freshness, geospatial lookups.  
- For each bottleneck, think of a single simplifying assumption that removes complexity (e.g., “data is read‑only after nightly batch ingestion”).  
- Build the architecture around that assumption (e.g., use a static geo‑index).  

**4️⃣ Avoid common traps**  
- Don’t assume “everything fits in memory” unless you justify it.  
- Beware of over‑simplifying: one assumption can hide hidden edge cases (like dynamic pricing).  
- Resist adding too many assumptions; each should be justified and clearly documented.

**5️⃣ Sanity‑check & verbalize**  
- Walk through a sample request, noting where the assumption applies.  
- Explain why it’s reasonable for the problem scope (e.g., “nightly batch is fine because reviews update once per day”).  
- Conclude by summarizing how the assumption reduces design complexity while keeping core functionality intact.

This structured thinking can be reused for any system‑design interview question: always start with clarifying assumptions, apply a proven framework, reason methodically, watch out for hidden pitfalls, and validate your reasoning aloud.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
