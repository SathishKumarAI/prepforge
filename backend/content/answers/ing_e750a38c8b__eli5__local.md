---
qid: ing_e750a38c8b__eli5__local
question: 'Explain: Q28: Explain the RAGAS evaluation framework'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 230
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:52-05:00'
sources: []
---

**RAGAS is a way to check how good an AI that looks up facts before answering really is.**

Think of it like a detective who can ask a librarian for evidence.  
1. **Relevance (R)** – Does the detective pick books that actually answer the question?  
2. **Accuracy (A)** – Are those books correct and trustworthy?  
3. **Grounding (G)** – Can we trace each answer back to a specific book page, so readers know where it came from?  
4. **Adequacy (A)** – Does the detective use enough evidence to cover all parts of the question?  
5. **Supportiveness (S)** – Are the answers clearly linked to the evidence, not just guesswork?

RAGAS scores each step, giving a clear picture: “This model finds good sources, cites them properly, and covers everything needed.” It’s like grading a research paper on how well it uses and explains its references.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
