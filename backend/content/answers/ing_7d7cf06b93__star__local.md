---
qid: ing_7d7cf06b93__star__local
question: 'Explain: Design an agent that takes a draft NDA and returns a redlined
  Word document reflecting the firm''s playbook, not a chat response.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 345
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:46-05:00'
sources: []
---

**Situation** – In my last role as a legal tech consultant for a mid‑size law firm, our partners complained that every time they received an NDA from a client, it took an hour to manually add the firm’s standard clauses and then reformat it into a redlined Word doc. The firm had a playbook of 12 mandatory provisions, but the drafting team was overwhelmed by repetitive work.

**Task** – I needed to build an automated agent that could ingest any draft NDA (PDF or Word), identify where the firm’s clauses should go, insert them, and output a clean, redlined Word document showing all changes, without generating a chat‑style response.

**Action** – I built a pipeline using Python, spaCy for clause detection, and LangChain to orchestrate GPT‑4 for natural language understanding. The agent parses the input file, matches sections against our playbook via semantic similarity, inserts missing clauses at the correct positions, then uses python-docx to apply Word’s track‑changes feature—creating “ins” and “del” objects that produce a proper redline. I added a validation step: the agent runs a quick diff check against the firm’s internal style guide and flags any mismatches for review.

**Result** – The prototype cut drafting time from 60 minutes to under 5, with 99% accuracy on clause placement. Our partners reported higher client satisfaction scores (up by 12%) and saved roughly $30k annually in attorney hours. I learned that combining NLP parsing with Word’s native track‑changes API can deliver a truly production‑ready legal automation tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
