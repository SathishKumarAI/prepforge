---
qid: ing_1a76a684eb__faang__local
question: 'Explain: Correcting Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 471
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:46:46-05:00'
sources: []
---

**Clarify**  
We’re asked how a legal‑tech platform like **BigLaw Bench** can correct the *hallucination* problem in large language models (LLMs) that generate courtroom‑style documents.  
Key assumptions:  
- The LLM is already integrated for drafting but sometimes produces fabricated citations or facts.  
- The system has access to an internal legal knowledge base and a user workflow for review.  
- Stakeholders value *accuracy* over speed, and the solution must be maintainable at scale.

**Approach**  
1. **Detection Layer** – flag uncertain claims with low confidence scores.  
2. **Verification Engine** – cross‑check flagged content against trusted databases (PACER, Westlaw).  
3. **Human‑in‑the‑Loop (HITL)** – route unresolved items to attorneys for final approval.  
4. **Feedback Loop** – record corrections and retrain the model incrementally.

**Depth**  
- Use *probability thresholds* on token logits; if > 0.8 confidence, auto‑accept, else mark as “needs verification.”  
- Build an API that queries legal databases in real time; cache results to keep latency < 200 ms.  
- Apply a lightweight transformer fine‑tuned on annotated hallucination cases (e.g., 10k examples) to improve precision by ~15 %.  
- Complexity: O(n log m) for database lookup per sentence, where *n* is sentence count and *m* the index size; acceptable given caching.  

**Edge Cases**  
- Newly enacted statutes not yet indexed → fallback to manual review.  
- Ambiguous citations (e.g., “42 U.S.C.” without section) → prompt user for clarification.  
- Model drift over time → schedule quarterly re‑evaluation.

**Optimize & Communicate**  
Explain that the hybrid pipeline balances *speed* (most content auto‑passes) with *trustworthiness* (critical claims verified). Highlight how each component scales: caching, incremental learning, and modular APIs allow future upgrades without redeploying the core LLM. This demonstrates structured problem solving, clear communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
