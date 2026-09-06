---
qid: ing_cab5d44ac8__think__local
question: You're building evals for a new LLM feature from scratch. How many examples
  do you need, and where do they come from?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 420
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:18:49-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
   *Ask:* What is the feature’s scope (e.g., summarization, code generation)?  
   *Assume:* You have a target accuracy/precision threshold and a budget for data curation.

**2️⃣ Adopt a statistical‑sampling framework**  
   Use confidence‑interval or power‑analysis logic:  
   - Desired margin of error ε  
   - Confidence level 1–α (often 95 %)  
   - Expected prevalence of edge cases.  
   This gives a baseline “minimum N” before practical constraints.

**3️⃣ Reason step‑by‑step toward the answer**  
   1. Estimate the feature’s output space size.  
   2. Break it into sub‑domains (e.g., language style, domain knowledge).  
   3. For each sub‑domain, compute sample size using the formula above.  
   4. Sum across sub‑domains, then inflate by ~20 % to buffer noise and future drift.

**4️⃣ Avoid common traps**  
   - *Over‑reliance on a single data source:* Mix curated corpora, real user logs, and synthetic prompts.  
   - *Neglecting rare but critical cases:* Explicitly sample low‑frequency scenarios (e.g., ambiguous queries).  
   - *Ignoring distribution shift:* Periodically refresh the pool with new content.

**5️⃣ Sanity‑check & verbalize**  
   • Compare N against industry benchmarks for similar features.  
   • Run a quick pilot: train on 10 % of the set, evaluate error; if too high, increase N or diversify sources.  
   • Communicate the plan as: “We’ll start with ~5k diverse prompts (3k curated, 1k user‑generated, 1k synthetic) and iterate based on validation feedback.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
