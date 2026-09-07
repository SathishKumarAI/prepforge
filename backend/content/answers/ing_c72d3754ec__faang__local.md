---
qid: ing_c72d3754ec__faang__local
question: 'Explain: Why Binary Scores Work Best — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 440
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:23:39-05:00'
sources: []
---

**Clarify**  
The interviewer asks why *binary* (0/1) scores are preferred in AI evaluation pipelines such as LangWatch or LangFuse. I’d confirm: we’re evaluating correctness of a single‑shot response, no partial credit, and the metric must be aggregatable across many turns.

**Approach**  
1. Define what constitutes “correctness.”  
2. Map that to a binary indicator per turn.  
3. Aggregate (mean) to produce an overall accuracy score.  
4. Use this as the primary objective in reinforcement loops or model selection.

**Depth**  
Binary scoring yields a *closed‑form* metric:  
- **Statistical stability** – variance is bounded, making confidence intervals tight.  
- **Differentiability for RLHF** – a binary reward can be smoothed (e.g., via sigmoid) to provide gradients while keeping the target discrete.  
- **Interpretability** – stakeholders instantly see the proportion of correct responses; no need to explain weighting schemes.  
In LangWatch/LangFuse, each turn is tagged 0/1 and stored in a database; downstream dashboards compute mean accuracy, drift over time, or cohort comparisons.

**Edge Cases**  
- Ambiguous answers (both correct and partially wrong) may be mis‑scored; we’d add a *“neutral”* flag.  
- Multi‑turn dependencies: a single binary score per turn ignores context; we’d bundle turns into a sub‑task before scoring.  
- Skewed data (almost all 1s or 0s) reduces signal; consider adding entropy regularization.

**Optimize & Communicate**  
To improve granularity, introduce *confidence buckets* (e.g., high/low confidence) while still mapping to binary during aggregation. I’d explain that the core metric remains binary for simplicity, but richer signals can be layered without breaking downstream pipelines. This balances **precision**, **scalability**, and **stakeholder clarity**—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
