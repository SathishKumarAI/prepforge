---
qid: ing_0fc355affc__star__local
question: 'Explain: Walk me through the taxonomy of evaluation methods for LLM systems
  and when you''d use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 382
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:01-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a new conversational AI that had to score above 85 % on our internal “user satisfaction” benchmark before going live in production.

**Task:**  
I was tasked with designing an evaluation pipeline that would give us confidence the model met quality targets while also providing actionable insights for continuous improvement.

**Action:**  
First, I mapped out the main taxonomy of LLM evaluation: (1) *Intrinsic* metrics—perplexity and BLEU/ROUGE against curated test sets; (2) *Extrinsic* task‑specific scores—accuracy on intent classification, slot filling, or dialogue policy decision tasks; (3) *Human‑in‑the‑loop* assessments—crowd‑source rating of relevance, coherence, safety; and (4) *Robustness* checks—adversarial prompt tests, distribution shift analysis.  
I built a modular framework in Python that ran each method automatically after every fine‑tuning epoch, logged results to Grafana dashboards, and triggered alerts if any metric dropped below thresholds. For the human layer I integrated an internal survey tool so reviewers could flag hallucinations or toxic outputs.

**Result:**  
The pipeline cut evaluation time from 3 days to 4 hours per iteration. We caught a drift in intent accuracy early—down to 78 %—and retrained on a targeted data subset, restoring it to 88 %. The final model achieved 87 % user‑satisfaction and was deployed with no post‑launch incidents. I learned that combining intrinsic, extrinsic, human, and robustness checks gives the most reliable picture of an LLM’s real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
