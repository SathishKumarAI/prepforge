---
qid: ing_49e72fb976__fp__local
question: 'Explain: Concept Explanation Framework (ETA) — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 441
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:42:21-05:00'
sources: []
---

**Concept‑Explanation Framework (ETA)**  
*Why an “answer framework” is needed*:  
When a user asks a question, the system faces **three coupled sub‑problems**:  
1. *Identify intent* – which formal knowledge base does the query map to?  
2. *Select evidence* – which facts best support a claim?  
3. *Compose language* – how to phrase the response so it is both accurate and human‑readable.

These are a classic **structured decision problem**: we must choose a path (intent→evidence→text) that maximises overall utility—information completeness, correctness, and communicative clarity.  

ETA formalises this as a **three‑stage pipeline**:

| Stage | Objective | Underlying principle |
|-------|-----------|----------------------|
| **E** (Evidence extraction) | Gather the minimal set of high‑confidence facts that cover the query’s semantic core. | *Information bottleneck*: keep only bits that maximise relevance while discarding noise. |
| **T** (Transformation) | Map evidence to a formal argument structure (premises → inference rule → conclusion). | *Logical optimisation*: find the shortest proof tree under resource constraints. |
| **A** (Answer construction) | Render the structured argument into natural language with appropriate style and confidence markers. | *Cognitive load minimisation*: balance detail against user‑tailored readability. |

The framework is thus an instance of **structured inference as constrained optimisation**, ensuring that each answer component serves a distinct, mathematically grounded purpose.

**Non‑obvious insight**  
Most systems treat evidence selection and linguistic rendering independently, but ETA shows they are *jointly* optimised: the choice of phrasing can influence which facts appear most salient. For example, presenting a counterexample first may force the system to surface additional supporting data that would otherwise be omitted. This coupling yields richer, more transparent explanations that align with human reasoning patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
