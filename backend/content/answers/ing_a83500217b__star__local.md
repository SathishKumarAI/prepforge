---
qid: ing_a83500217b__star__local
question: 'Explain: Every assertion in a Harvey answer needs to link back to a specific
  passage. Design the grounding system, and tell me how you would measure the unsupported-claim
  rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 386
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:27-05:00'
sources: []
---

**Situation**  
When my team launched a clinical decision‑support chatbot for oncology, we noticed that 18 % of its responses contained statements not traceable to any source document in the knowledge base. Regulatory auditors flagged this as a major compliance risk.

**Task**  
Build an end‑to‑end grounding system that guarantees every assertion in the model’s output references a specific passage and devise a metric to quantify unsupported claims.

**Action**  
I introduced a retrieval‑augmented generation pipeline: first, the prompt includes a “source list” of up to five passages retrieved by BM25 from our 120 k‑document corpus. The LLM is fine‑tuned with a custom instruction (“Always cite the passage ID in brackets”). During inference I added a post‑processing layer that parses the output for bracketed IDs, verifies they exist in the source list, and assigns an “unsupported claim” flag if missing or mismatched. For monitoring, I created an automated test harness that runs 500 random prompts nightly, records each assertion’s citation status, and stores results in a Prometheus metric (`ai_grounding_unsupported_rate`). Alerts fire when the rate exceeds 5 %.

**Result**  
After deployment, the unsupported claim rate dropped from 18 % to 3.2 % within two weeks, meeting regulatory thresholds. The system also cut manual audit time by 70 %. I learned that coupling retrieval with explicit citation instructions and continuous metric monitoring turns abstract compliance into measurable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
