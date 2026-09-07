---
qid: ing_304ca4fac7__faang__local
question: Engagement metrics and wellbeing metrics disagree. How do you build a system
  that resolves that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 509
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:36:44-05:00'
sources: []
---

**Clarify**  
We’re asked to reconcile two conflicting data streams—*engagement* (time spent, clicks) vs *well‑being* (stress scores, self‑reports). I’ll assume:  
1. Both metrics are numeric, timestamped, and come from the same user base.  
2. Engagement is a proxy for value delivered; well‑being signals potential harm.  
3. The system must flag when high engagement correlates with low well‑being and recommend mitigation actions.

**Approach**  
1. **Feature engineering**: Build per‑user time windows (e.g., 30 min, 1 h). Compute aggregated engagement (avg session length, frequency) and well‑being scores (mean stress).  
2. **Modeling**: Train a supervised classifier (e.g., gradient‑boosted trees) to predict *risk* labels (“safe”, “caution”, “danger”) using labeled historical data where interventions occurred.  
3. **Real‑time scoring**: Deploy the model as an event‑driven function that updates risk scores whenever new engagement or well‑being data arrives.  
4. **Action layer**: Map risk levels to policies (e.g., gentle reminders, content throttling, human review).  

**Depth**  
- Complexity: O(n log n) per batch for tree inference; real‑time latency < 100 ms.  
- Trade‑offs: A simple thresholding rule is fast but brittle; a learned model captures non‑linear interactions (e.g., high engagement *and* high stress).  
- Explainability: Use SHAP values to surface which signals drive risk, essential for trust.

**Edge Cases**  
- Missing well‑being data → fall back to engagement‑only risk with higher uncertainty.  
- Sudden spikes in engagement due to viral content – model must differentiate between healthy excitement and compulsive use.  
- Users self‑report low stress but exhibit high physiological arousal (sensor mismatch).

**Optimize & Communicate**  
Iterate on window size, feature set, and threshold calibration using A/B testing of intervention outcomes. Present results with clear KPI dashboards (e.g., reduction in “danger” flags, improved user satisfaction). This structured pipeline balances data‑driven insight with actionable policy, satisfying both engagement growth and user well‑being goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
