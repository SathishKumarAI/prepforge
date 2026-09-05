---
qid: ing_a260a881b4__eli5__local
question: 'Explain: Measuring Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 215
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:55:05-05:00'
sources: []
---

Imagine a courtroom where a judge (the machine) must decide whether a piece of evidence is real or fake. In law, “hallucination” means the judge invents facts that aren’t actually in the record—like saying a witness was at the wrong place when they weren’t.  

To check how often this happens, we give the judge a set of legal cases (the “BigLaw Bench”) and ask it to generate answers or summaries. We then compare each generated sentence to the true facts written in the case files. If a sentence talks about something that never appears in the record, we flag it as a hallucination. By counting how many flagged sentences there are out of all generated text, we get a simple score: the higher the number, the more often the judge is making up things. This lets developers see whether their legal‑AI system can reliably stick to the facts or keeps inventing them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
