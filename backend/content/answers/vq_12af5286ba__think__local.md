---
qid: vq_12af5286ba__think__local
question: what types of biases can happen through sampling?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 430
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:10:59-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *Scope*: Focus on sampling‑related biases that arise before any modeling or analysis is done (e.g., data collection, cohort selection).  
   - *Assumptions*: We’re dealing with typical observational datasets (survey, sensor logs, clickstreams) rather than controlled experiments.  

**2. Adopt a mental framework**  
   - Think of the sampling process as a pipeline: **Population → Sampling Frame → Sample → Analysis**.  
   - Biases can creep in at any link; categorize them into *selection* vs *measurement* biases and further sub‑types (e.g., coverage, non‑response).  

**3. Step‑by‑step reasoning**  
   1. Identify the intended target population.  
   2. Examine how the sampling frame is constructed (list, web crawl, sensor deployment).  
   3. Spot mismatches: e.g., certain groups missing → *coverage bias*.  
   4. Consider who actually participates or provides data → *non‑response bias*.  
   5. Look at the selection mechanism itself (e.g., snowball sampling) → *selection bias*.  
   6. Check for systematic errors in measurement tied to sample characteristics → *measurement bias*.

**4. Common traps to avoid**  
   - Assuming a “random” sample is automatically unbiased; randomness only guarantees representativeness if the frame matches the population.  
   - Overlooking that biases can compound (coverage + non‑response).  
   - Ignoring temporal changes—sampling at one time may miss seasonal patterns.

**5. Sanity‑check & verbalize**  
   - Ask: “If I removed this sampling step, would my sample still reflect the population?”  
   - Summarize each bias with a concrete example (e.g., mobile survey missing rural users).  
   - Keep explanations concise but illustrate how each bias could distort downstream analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
