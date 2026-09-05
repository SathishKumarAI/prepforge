---
qid: ing_fe1f69c36d__eli5__local
question: 'Q88: Agent-as-judge vs LLM-as-judge - when does the upgrade pay off, and
  what new failure modes does it introduce?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 289
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:17:26-05:00'
sources: []
---

Think of a courtroom where a judge decides if someone should be punished or helped.  
*Agent‑as‑judge* is like a human judge who looks at the evidence, asks questions, and uses common sense to weigh the case.  
*LLM‑as‑judge* is like a super‑fast, highly literate assistant that reads every word of testimony instantly but can only follow patterns it has seen in its training data.

The “upgrade” (switching to an LLM judge) pays off when you need speed and consistency across many similar cases—think routine traffic violations or simple contract disputes. The machine can hand out the same sentence to everyone, saving time for the human judges who then focus on more complex matters.

But new failure modes appear:  
1. **Blind spots** – the LLM may miss rare facts it never saw before.  
2. **Bias amplification** – if its training data were biased, the judge will repeat that bias.  
3. **Lack of empathy** – it can’t feel a defendant’s hardship or ask for context in real time.

So the upgrade is worth it for repetitive, low‑stakes decisions, but you still need human oversight to catch the unusual and morally subtle cases where an LLM alone would falter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
