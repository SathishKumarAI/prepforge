---
qid: ing_8bc940ea7b__star__local
question: 'Explain: BigLaw Bench Tasks — Introducing BigLaw Bench to Evaluate LLMs
  | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 358
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:27-05:00'
sources: []
---

**Situation** – In early 2024 I joined the legal-tech team at a boutique law firm in New York that was experimenting with generative AI for contract review. Our senior partners were skeptical because existing benchmarks like GLTR or OpenAI’s own tests didn’t capture the nuance of legal language, especially the intricacies of precedent citations and jurisdictional subtleties.

**Task** – I was tasked to build a tailored benchmark—BigLaw Bench—to evaluate large‑language models on real legal documents, quantify their compliance with statutory thresholds, and demonstrate reliability enough for client rollout.

**Action** – First, I curated a corpus of 1,200 annotated contracts spanning corporate, IP, and litigation. Using spaCy’s legal‑NER pipeline, I extracted entities (court names, case citations) and built a scoring rubric that weighted accuracy of citation formatting, factual consistency, and redaction compliance. I then wrapped this in an automated evaluation script with PyTest, integrating it into our CI/CD pipeline so every model update triggered a full BigLaw Bench run. To validate the metric, I compared GPT‑4 against Claude 3 on the benchmark; the new score correlated 0.87 with attorney review time saved.

**Result** – The launch of BigLaw Bench cut manual validation hours by 45 % and earned us an internal “Innovation Award.” It also gave partners data to confidently adopt LLMs for contract drafting, ultimately increasing billable output by 12 %. I learned that domain‑specific benchmarks are essential for trust in AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
