---
qid: ing_1a76a684eb__star__local
question: 'Explain: Correcting Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 330
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:24-05:00'
sources: []
---

**Situation:**  
At a large law firm, we were deploying an NLP model to auto‑summarize discovery documents for BigLaw Bench. Early user testing revealed the system frequently invented facts—hallucinations—that made attorneys question its reliability.

**Task:**  
My goal was to reduce hallucination rates below 3% while keeping turnaround time under 30 minutes per case file, so the tool could be trusted in live litigation workflows.

**Action:**  
I started by auditing a sample of flagged summaries with a “hallucination heatmap” that highlighted phrases not present in source text. I then fine‑tuned the base transformer on a curated corpus of annotated legal excerpts and added a confidence layer: an auxiliary classifier scored each sentence for factual alignment. Sentences scoring below 0.75 were re‑generated using beam search with stricter length constraints. Finally, I integrated a rule‑based post‑processor that cross‑checked entity mentions against the document’s metadata to catch any residual fabrications.

**Result:**  
After two iterations, hallucination incidents dropped from 12% to 2.4%, and average processing time stayed at 28 minutes per file. The team adopted the model for a high‑profile merger case, and client feedback highlighted improved trust in AI‑generated briefs. I learned that combining statistical fine‑tuning with lightweight rule checks is often more effective than pure end‑to‑end deep learning for high‑stakes legal applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
