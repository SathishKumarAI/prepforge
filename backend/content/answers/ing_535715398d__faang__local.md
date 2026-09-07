---
qid: ing_535715398d__faang__local
question: 'Q: How do you decide how many candidates to rerank?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 601
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:58:09-05:00'
sources: []
---

**Clarify**

We’re asked: *“How do you decide how many candidates to re‑rank?”*  
Assumptions I’d confirm:

1. **Candidate pool size** (e.g., 10 k resumes per job).  
2. **Initial ranking mechanism** (scoring function, threshold).  
3. **Business objective** – maximize quality of hires or minimize cost?  
4. **Computational budget** – re‑ranking is expensive (feature extraction, model inference).  
5. **Evaluation metric** – precision@k, recall, or a custom ROI.

---

**Approach**

1. **Define a target KPI** (e.g., hit 95 % of top‑ranked resumes in a human review sample).  
2. **Sample‑based calibration**: pick a validation set and vary *k* (the number to re‑rank) until the KPI threshold is met.  
3. **Cost–benefit analysis**: estimate time per candidate vs. expected improvement in hiring quality; choose *k* where marginal benefit ≈ marginal cost.  
4. **Dynamic adjustment**: adjust *k* per job posting based on pool size and variance of initial scores.

---

**Depth**

- **Algorithm**:  
  - Compute initial score `s_i`.  
  - Sort descending → list L.  
  - Re‑rank top *k*: run deeper model (e.g., transformer, multi‑modal).  
- **Complexity**: O(N log N) for sort + O(k·C) inference cost (`C` = per‑candidate cost).  
- **Trade‑offs**: Larger *k* → better quality but higher latency and compute; smaller *k* saves resources but may miss good candidates.

---

**Edge Cases**

| Case | Problem | Test |
|------|---------|------|
| Very large N (1M) | Sorting dominates | Benchmark O(N log N) vs. partial selection |
| Low‑variance scores | Re‑ranking useless | Check std dev of s_i; if < ε, skip re‑rank |
| Highly skewed job types | Different *k* needed | Validate per industry/role |

---

**Optimize & Communicate**

- **Adaptive *k***: use a lightweight classifier to predict whether a candidate needs deeper analysis; only re‑rank those flagged.  
- **Explainability**: provide feature importance so recruiters understand why candidates moved up/down.  
- **Narrative**: “We set a precision target, calibrated with validation data, then chose the smallest *k* that meets it while respecting compute limits. If the initial score distribution is flat, we skip re‑ranking entirely.”  

This structured plan balances quality, cost, and scalability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
