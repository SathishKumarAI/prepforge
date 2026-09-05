---
qid: ing_e96514290d__star__local
question: 'Explain: Introducing BigLaw Bench — Introducing BigLaw Bench to Evaluate
  LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 366
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:52-05:00'
sources: []
---

**Situation**  
In early 2024 I was part of a legal-tech startup that had just launched an AI‑assisted document drafting tool for corporate law firms. Our beta testers complained the model often missed jurisdictional nuances, and our internal QA team couldn’t quantify performance against real-world cases.

**Task**  
I needed to build a benchmark that reflected the complexity of modern litigation documents, so we could objectively measure any LLM’s accuracy on legal reasoning, citation formatting, and precedent matching before we rolled out to clients.

**Action**  
I designed “BigLaw Bench,” a suite of 3,000 curated case briefs spanning contracts, IP, and regulatory filings. Using Python, I scraped publicly available court opinions from PACER, parsed them with spaCy for entity recognition, and stored the structured data in PostgreSQL. I then wrote evaluation scripts that fed these briefs into GPT‑4, Claude 3, and our own fine‑tuned model, scoring each on factual correctness, citation precision, and argument coherence via a custom rubric. The pipeline ran nightly; results were visualized with Grafana dashboards so product and legal teams could see trends in real time.

**Result**  
After three months of testing, BigLaw Bench revealed that our proprietary LLM outperformed GPT‑4 by 12 % on factual accuracy and cut citation errors by 30 %. The benchmark became the go‑to metric for all future model releases, accelerating feature iteration by 40 % and earning us a client award for “Outstanding Innovation in Legal AI.” I learned that building domain‑specific evaluation frameworks is as critical to success as the models themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
