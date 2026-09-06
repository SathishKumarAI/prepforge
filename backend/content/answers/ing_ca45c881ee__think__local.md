---
qid: ing_ca45c881ee__think__local
question: 'Explain: Back-of-the-envelope calculations — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 466
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:17:04-05:00'
sources: []
---

**Back‑of‑the‑Envelope Calculations (BOTE) – A Quick‑Start Guide**

1. **Clarify the goal and assumptions**  
   *Ask:* “What do I need to estimate?” (e.g., storage, compute, latency).  
   Assume rough values for data size, query frequency, or model size—just enough to keep the math simple.

2. **Build a mental model of the system**  
   Treat each component as a box: ingestion → processing → storage → serving.  
   Assign a single cost metric (bytes, FLOPs, ops/sec) per box; ignore fine‑grained details.

3. **Step‑by‑step reasoning**  
   * Estimate data volume: `#records × avg_size`.  
   * Compute storage: multiply by retention factor and add overhead.  
   * Rough compute: `#inference_calls × FLOPs_per_call`.  
   * Translate to dollars using cloud pricing tiers (e.g., $0.10/GB‑month, $1/MFlop).

4. **Avoid common traps**  
   – Don’t double‑count (e.g., storage for both raw and processed data).  
   – Skip “nice‑to‑have” features unless they dominate cost.  
   – Ignore network costs until the final refinement.

5. **Sanity‑check & communicate**  
   *Compare to known benchmarks* (e.g., “AWS S3 is ~ $0.023/GB‑month”).  
   Explain each assumption aloud: “If we have 10 M records at 1 KB each, that’s ~10 GB…”.  
   This makes the estimate transparent and easy for interviewers to follow.

*Tip:* Use tools like Anki flashcards (from the mentioned repo) to rehearse typical BOTE scenarios—data size, model ops, latency—so you can pull them out of your head during a design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
