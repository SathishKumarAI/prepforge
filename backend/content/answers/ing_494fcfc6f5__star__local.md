---
qid: ing_494fcfc6f5__star__local
question: What is LLM-as-judge, and when is it the right tool?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 320
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:11-05:00'
sources: []
---

**Situation:** In my last role as a senior ML engineer at a fintech startup, we were launching an automated loan‑approval system that had to comply with regulatory audit requirements. The audit team needed a rapid, consistent way to flag policy violations in our decision‑making models.

**Task:** I was tasked with building a lightweight solution that could evaluate thousands of model outputs per day and produce a “pass/fail” verdict against the compliance rules, without manual intervention.

**Action:** I chose an LLM-as-judge approach: we wrapped OpenAI’s GPT‑4 in a microservice that ingested each prediction, the associated feature vector, and a concise policy brief. The model was fine‑tuned on annotated audit logs to interpret “safe” vs. “unsafe” decisions. We added a confidence threshold and an oracle fallback that routed borderline cases to human reviewers. The service logged every verdict with a reproducible prompt so we could later audit the judge’s reasoning.

**Result:** Within two weeks, the LLM‑judge handled 95% of the audit checks in real time, cutting compliance review time from 4 hours per batch to under 30 minutes. Accuracy was 92%, matching our manual baseline. I learned that LLM-as-judge excels when rules are well‑structured and the volume overwhelms human capacity, but still needs a safety net for edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
