---
qid: ing_6bd3d7bc3a__faang__local
question: 'Explain: Out of scope — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 430
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:54:17-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *why* the file `system-design-primer/solutions/system_design/twitter/README.md` (on the master branch) is considered “out‑of‑scope.”  
Assumptions:  
1. The candidate knows what “out‑of‑scope” means in a design context.  
2. We are evaluating a system‑design primer, not an implementation guide.

**Approach**  
1. Identify the content of the file (solution guidelines).  
2. Map that to typical interview expectations for system‑design questions.  
3. Highlight the mismatch and justify the exclusion.

**Depth**  
The README contains step‑by‑step design decisions, code snippets, and a full architectural diagram—essentially a *complete solution*. In a FAANG system‑design interview you’re expected to **brainstorm**, **trade‑off**, and **justify** an architecture, not to copy a ready‑made answer.  
Providing the exact solution removes the opportunity to gauge your problem‑solving process: how you handle constraints (latency, consistency, scaling), choose components (databases, caches, queues), and reason about trade‑offs. Moreover, the primer’s README is tailored for learning; it assumes prior knowledge of the Twitter problem set and offers a definitive answer, which contradicts the interview’s purpose of testing *your* design thinking.

**Edge Cases**  
- If the candidate only skimmed the file, they might miss nuanced trade‑offs.  
- A partial copy could lead to plagiarism concerns or violate interview policies.

**Optimize & Communicate**  
Explain that the out‑of‑scope status preserves the integrity of the interview: it forces candidates to *invent* rather than *retrieve*. Clarify that you would instead ask them to outline their own approach, then compare against the primer afterward for learning. This keeps evaluation fair and focused on critical thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
