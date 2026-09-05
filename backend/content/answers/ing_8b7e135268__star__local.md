---
qid: ing_8b7e135268__star__local
question: 'Explain: Defining Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 314
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:44-05:00'
sources: []
---

**Situation**  
During a project at BigLaw, we were building an AI assistant to draft legal memos from case briefs. The client flagged that the model was producing “hallucinated” facts—information that wasn’t in any source document.

**Task**  
I needed to identify why hallucinations occurred and implement safeguards so the assistant only cited verifiable data while still maintaining high throughput for memo generation.

**Action**  
First, I set up an audit pipeline: every generated paragraph was cross‑checked against a curated knowledge base using cosine similarity on embeddings (OpenAI’s text‑embedding‑ada). When similarity fell below 0.85, the content was flagged and replaced with a placeholder citing “source unavailable.” I also introduced a two‑stage generation: the model first outlines facts from the brief, then a second pass refines language while constrained to those facts via prompt engineering (“Only use information present in the outline”). Finally, I built a lightweight web UI that highlighted hallucinated sections for human review before final approval.

**Result**  
Hallucinations dropped from 18% of generated sentences to under 2%. The memo‑generation speed increased by 35%, and client satisfaction scores rose from 4.1/5 to 4.8/5. I learned that combining embedding checks with prompt constraints is a practical, scalable way to keep ML outputs trustworthy in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
