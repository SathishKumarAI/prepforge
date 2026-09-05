---
qid: ing_1bce9be39f__star__local
question: What is LLM-as-a-Judge? — Ai Evals Comprehensive Study Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:55-05:00'
sources: []
---

**Situation** – In early 2025 our company was launching a new compliance‑automation platform for financial institutions. The regulatory team flagged that manual review of contract clauses still consumed 3 hours per document and caused delays in onboarding new clients.  

**Task** – I was tasked to prototype an AI component that could read any clause, judge its compliance against a set of internal policies, and produce a verdict with confidence scores—all within one minute per contract.  

**Action** – I built a “LLM‑as‑a‑Judge” pipeline: first, I fine‑tuned GPT‑4o on 12 k labeled clauses (compliant vs. non‑compliant), using prompt engineering to embed the policy text as a context block. Next, I wrapped the model in a microservice that streamed the raw clause, tokenized it, and passed it through the LLM with a custom “Judge” instruction set. The output was parsed into JSON containing verdict, risk level, and an evidence snippet. I added a fallback rule‑engine for any uncertainty above 0.65 confidence to route to a human reviewer.  

**Result** – In production, the system reduced review time from 3 hours to under 90 seconds per contract, with a 92% accuracy on our holdout set and only 1.8% of cases requiring escalation. I learned that careful policy embedding and confidence‑threshold routing can turn an LLM into a reliable decision engine for regulated environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
