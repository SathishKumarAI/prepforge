---
qid: ing_e33310d4d8__faang__local
question: 'Explain: Your assistant''s answer quality regressed and nobody noticed
  for three weeks. You''re writing the postmortem. Walk me through the document.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 518
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:34-05:00'
sources: []
---

## Post‑Mortem: Assistant Answer Quality Regression (3 Weeks)

### 1️⃣ Clarify  
**Problem:** The model’s response quality degraded after a recent fine‑tuning update. Users reported vague, factually incorrect answers; the issue persisted for ~21 days before detection.  
**Assumptions to verify:**  
- Version bump triggered only the new policy filter module?  
- No concurrent data drift or external API changes.  
- Monitoring dashboards were active and thresholds set.

### 2️⃣ Approach  
1. **Reproduce** the degradation locally (same prompt‑set, same inference pipeline).  
2. **Instrument** logs to capture token probabilities, policy decisions, and latency.  
3. **Compare** pre‑ and post‑update distributions for key metrics: BLEU, ROUGE, factuality scores.  
4. **Identify root cause** via ablation (remove new component, rollback).  

### 3️⃣ Depth  
- The fine‑tuning data contained *biased* prompts that over‑constrained the policy filter, causing it to flag benign content as disallowed and trigger fallback “I’m sorry” responses.  
- Complexity: O(N) for each inference; ablation cost negligible (~0.1 s).  
- Trade‑off: disabling the filter restored quality but re‑exposed safety risk.

### 4️⃣ Edge Cases  
- **High‑confidence factual errors** slipped through because policy only blocked style, not content accuracy.  
- **Long‑form queries** suffered most due to cumulative policy hits.  
- Tested on multilingual prompts; regression was language‑agnostic.

### 5️⃣ Optimize & Communicate  
- **Fix:** Retrain the policy module with balanced data and stricter validation on factuality.  
- **Add** a lightweight “factuality gate” that cross‑checks knowledge base before final response.  
- **Improve monitoring:** set alerts on sudden drops in BLEU/ROUGE > 5 % over 3 days.  
- **Documentation:** update release notes to flag policy changes; schedule quarterly safety reviews.

---

**Takeaway:** A single component can silently degrade user experience if not rigorously validated against multiple axes (style, factuality, latency). Continuous monitoring and multi‑metric validation are essential for safe AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
