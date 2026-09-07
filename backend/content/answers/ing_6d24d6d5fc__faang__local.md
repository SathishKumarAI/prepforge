---
qid: ing_6d24d6d5fc__faang__local
question: How would you A/B test an LLM-powered feature, and how does it differ from
  testing a ranking-model change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 483
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:26-05:00'
sources: []
---

**Clarify**  
We’re asked to design an A/B test for a new LLM‑powered feature (e.g., conversational UI) and compare it to testing a ranking‑model tweak. Key assumptions:  
1. The feature is user‑visible and can be toggled at the session level.  
2. We have access to fine‑grained telemetry (latency, token usage, success signals).  
3. Business metrics are known (CTR, NPS, churn).

**Approach**  
1. **Define success criteria** – e.g., higher user satisfaction, lower abandonment.  
2. **Randomize users** into control (existing UI) vs treatment (LLM feature).  
3. **Collect both intrinsic metrics** (response time, token count) and extrinsic outcomes (click‑through, conversion).  
4. **Statistical analysis** – use Bayesian A/B to capture uncertainty, especially for rare events.

For a ranking‑model change:  
- The unit of test is usually the query or item rather than the entire session.  
- We focus on relevance metrics (NDCG, MAP) and latency, not conversational satisfaction.

**Depth**  
- *LLM feature*: measure “success” per turn (e.g., intent match, user follow‑up). Use a hierarchical model to account for session‑level correlation. Complexity: O(n log n) for sorting sessions; token usage is linear in input size.  
- *Ranking change*: evaluate using offline logs or online A/B with click data; complexity dominated by retrieval cost (O(k log N)).  

**Edge Cases**  
- Cold start users may not experience the feature evenly → stratify by user cohort.  
- Token limits could cause failures; monitor for truncation errors.  
- Ranking drift: if the new model changes the set of candidates, downstream metrics may confound.

**Optimize & Communicate**  
Explain that LLM A/B requires richer telemetry and a hierarchical hypothesis because each session contains multiple turns, whereas ranking tests are per‑query and rely on standard IR metrics. Highlight trade‑offs: higher variance for conversational success vs lower latency cost for ranking tweaks. Conclude by emphasizing continuous monitoring and rollback capability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
