---
qid: ing_596dd30942__fp__local
question: 'Explain: Step 2: Define Evaluation Criteria — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 530
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:14:41-05:00'
sources: []
---

**Step 2: Define Evaluation Criteria – The “Answer Frameworks”**

When an AI system is asked to *answer* a question, the core problem is translating an open‑ended query into a concrete response that satisfies the user’s intent. This requires **formalizing what “success” looks like**; otherwise training signals are ambiguous and optimization collapses.

1. **Start from the decision‑theoretic view**: each answer \(a\) has an expected utility
   \[
   U(a)=\sum_{s} P(s|q)\, u(a,s),
   \]
   where \(s\) is the true state of the world and \(u\) measures how useful \(a\) is in that state. The evaluation criterion must approximate this expectation because we cannot observe \(s\).

2. **Translate utility into measurable proxies**:
   - *Accuracy* (ground‑truth matching)
   - *Relevance* (semantic overlap, user satisfaction scores)
   - *Safety* (absence of harmful content)
   - *Efficiency* (latency, computational cost)

   These become the **axes of a multi‑objective optimization problem**. The criterion is not a single scalar but a vector \(\mathbf{c}=(c_{\text{acc}}, c_{\text{rel}}, c_{\text{saf}}, …)\).

3. **Weighting and trade‑offs**: The system designer chooses weights \(w_i\) to form a composite loss
   \[
   L = -\sum_i w_i\, c_i,
   \]
   which the learning algorithm minimizes. Crucially, *weights must be calibrated from user studies*, not arbitrarily set.

4. **Non‑obvious insight**: The *interdependence* of criteria often creates a **Pareto frontier** that is non‑convex. Naïvely optimizing each criterion separately (e.g., first maximize accuracy then filter for safety) can lead to suboptimal points on the frontier. Instead, joint optimization with a properly constructed multi‑objective loss preserves feasibility and ensures that improvements in one axis do not unduly harm another.

Thus, defining evaluation criteria is an exercise in **mapping user intent to measurable utilities**, structuring them as a multi‑objective problem, and recognizing that the true optimum lies on a non‑convex Pareto frontier rather than at the intersection of isolated metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
