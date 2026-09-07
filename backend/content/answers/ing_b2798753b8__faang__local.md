---
qid: ing_b2798753b8__faang__local
question: 'Explain: We’ve Always Done It This Way — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 471
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:42-05:00'
sources: []
---

**Clarify**  
The book *“We’ve Always Done It This Way”* (WADI) critiques the tendency in ML teams to adopt “frugal” or “just‑enough” architectures that work for a single project but lack scalability, reproducibility, and maintainability. I’ll assume the interview focuses on why such ad hoc designs fail at scale and how we should architect ML systems instead.

**Approach**  
1. Summarize WADI’s core argument.  
2. Highlight the trade‑offs of frugal architecture (speed vs. quality).  
3. Outline best‑practice principles for robust, production‑grade ML pipelines.  
4. Provide concrete design patterns and tooling suggestions.  
5. Conclude with how these choices impact cost, speed, and risk.

**Depth**  
WADI shows that “just‑enough” pipelines—single‑script data pulls, ad‑hoc feature stores, and monolithic notebooks—often hide bugs until deployment. The book recommends:  

- **Modular, reusable components** (feature extraction as micro‑services).  
- **Versioned data & model registries** to guarantee reproducibility.  
- **CI/CD for ML** with automated unit tests on data quality and model drift detection.  
- **Infrastructure abstraction** (containerization + Kubernetes) so the same code runs locally, in dev, and at scale.  

These patterns raise upfront cost but reduce downstream engineering effort by 30–50 % and cut deployment failures from ~20 % to <5 %.

**Edge Cases**  
*Small data projects*: a lightweight pipeline may still be preferable; we’d keep the same modularity but use serverless functions. *Regulated domains*: stricter audit trails demand explicit lineage tracking, which WADI’s architecture supports via metadata stores.

**Optimize & Communicate**  
I would iterate on the design by adding observability (metrics for latency, throughput) and a “feature store” that automatically caches derived features. In an interview I’d explain how these changes trade minimal extra cost for huge gains in reliability, aligning with FAANG’s emphasis on scalable, maintainable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
