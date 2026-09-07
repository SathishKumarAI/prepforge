---
qid: ing_3a60556fdc__faang__local
question: How many nines of happiness are your customers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 476
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:13-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for a metric that quantifies how satisfied or “happy” our users feel—essentially an NPS‑style score but expressed in “nines of happiness.” I’d confirm:  
- Are we measuring *overall* satisfaction or per feature?  
- Which data sources (surveys, usage telemetry, support tickets) are available?  
- What timeframe and cohort granularity do we need?

**Approach**  
1. **Define the metric** – convert raw survey responses into a probability of “extremely satisfied” users.  
2. **Data pipeline** – pull survey + behavioral data nightly, normalize scores to 0–1.  
3. **Aggregation** – compute mean per cohort (daily/weekly) and express as a percentage of “nines” (e.g., 95 % → 9.5 nines).  
4. **Visualization & alerts** – dashboard + threshold alarms for drops > 0.5 nine.

**Depth**  
- **Formula**: `Nines = (Σ satisfaction_score / N) * 10`. Satisfaction scores are mapped from a Likert scale to [0,1].  
- **Complexity**: O(N) per batch; storage is O(1) extra since we keep rolling aggregates.  
- **Trade‑offs**: Using only surveys may miss silent churn; adding telemetry (feature usage, error rates) improves robustness but increases noise.

**Edge Cases**  
- Sparse survey responses → impute with cohort averages.  
- Outliers (extremely low/high scores) – cap at 0 or 1 to avoid skew.  
- Seasonal spikes – test against historical baselines.

**Optimize & Communicate**  
Explain that “nines of happiness” is a business‑friendly KPI: each nine equals a 10 % improvement in satisfaction, making it intuitive for executives. Mention plans to A/B‑test interventions (e.g., onboarding flows) and measure lift on the metric. Highlight that the pipeline can be extended to real‑time streaming if needed, keeping latency < 5 min. This demonstrates structured thinking, clear communication, and depth—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
