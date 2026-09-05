---
qid: ing_74613ce2b6__eli5__local
question: You are asked to ship an LLM-assisted CV screening feature. How do you approach
  fairness, and what do you tell the product team?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 282
total_tokens: 457
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:10-05:00'
sources: []
---

Think of your LLM like a very busy librarian who reads every résumé to decide which books (candidates) go into the library’s “featured shelf.”  
**Fairness check‑points:**  
1. **Ask what matters** – tell the product team that we’ll pick one or two clear, job‑related skills (e.g., programming language or years of experience) and only use those to rank candidates.  
2. **Guard against bias data** – we’ll scrub the training set for hidden patterns that favor a particular gender, race, or age group, just as a librarian would avoid always shelving books by a single author.  
3. **Test with dummy piles** – run the model on a small, diverse sample of résumés and compare its picks to human reviewers; if it keeps “picking” the same type of résumé, we’ll tweak or re‑train.  
4. **Keep a transparency log** – explain every step (why we chose those skills, how we cleaned data) so stakeholders see the process isn’t opaque.  

Tell the product team: “We’ll keep the model’s decision criteria simple, constantly audit it for hidden bias, and document each change. That way our CV screening is fair, understandable, and defensible.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
