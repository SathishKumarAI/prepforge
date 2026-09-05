---
qid: ing_f44919eddf__star__local
question: 'Explain: Step 1: Generate Diverse Test Queries — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 321
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:36-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a fintech startup, we were launching a new fraud‑detection model that relied on an LLM to flag suspicious transaction descriptions. The client’s SLA demanded 99% recall with a maximum false‑positive rate of 5%.  
**Task** – I had to design a rigorous test suite that would expose the model to every type of edge case in real‑world text, from slang and typos to legal jargon, without manually writing thousands of examples.  
**Action** – First, I built a data‑pipeline that crawled anonymized transaction logs, extracted unique patterns, and applied token‑level perturbations (synonym swaps, misspellings, grammatical shifts) using the `nlpaug` library. Then I seeded a set of 200 “anchor” queries from business analysts and let the pipeline generate 5,000 variations per anchor. Finally, I ran these through the LLM, logged confidence scores, and used a custom script to cluster misclassifications by linguistic feature, feeding that back into iterative fine‑tuning.  
**Result** – The model’s recall improved from 92% to 98%, while false positives dropped below 4%. The test suite also cut manual annotation time by 70%, and I learned how to balance coverage with computational cost when scaling AI evaluations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
