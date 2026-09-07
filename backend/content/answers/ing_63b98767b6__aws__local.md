---
qid: ing_63b98767b6__aws__local
question: 'Explain: Inheritance — The Fundamental Pillars of Object-Oriented Programming'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 468
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:43-05:00'
sources: []
---

**Situation (S)**  
While leading the ML model‑deployment pipeline for our recommendation engine, I noticed the codebase was bloated with duplicated preprocessing logic across several feature‑extractor classes.

**Task (T)**  
My goal was to refactor this into a clean, reusable structure that would cut maintenance effort by 30 % and reduce deployment latency by 15 ms per inference.

**Action (A)**  
I applied **Inheritance**, the core pillar of Object‑Oriented Programming. I created an abstract `BasePreprocessor` with common methods (`normalize`, `handle_missing`). Concrete subclasses (`TextPreprocessor`, `ImagePreprocessor`) overrode only the domain‑specific steps. This leveraged *Open/Closed* and *Liskov Substitution*, allowing new preprocessors to be added without touching existing code.

I used **AWS Lambda** + **Amazon SageMaker Pipelines** for inference, packaging the base class in a shared Docker image. The design yields:

- **Scalability:** Stateless Lambda functions scale automatically with traffic spikes.
- **Availability:** 99.999 % SLA via AWS regions and auto‑retries.
- **Cost:** Reduced code duplication lowers deployment size by ~20 %, cutting Lambda invocations cost by $1,200/month.

**Result (R)**  
Post‑refactor, the team’s onboarding time dropped from 4 days to 1 day. Production latency improved by 18 ms per request, boosting click‑through rate by 2.5 %.  

---

### Leadership Principles Highlighted
- **Ownership:** Took end‑to‑end responsibility for code quality and performance.
- **Dive Deep:** Analyzed class hierarchies to identify duplication hotspots.

### Bar‑raiser Signals
- Demonstrated *ownership* through measurable impact (latency, cost).
- Showed *depth* by explaining OOP concepts and AWS trade‑offs.
- Learned from earlier failures: initial refactor caused runtime errors; I introduced unit tests and CI checks before merging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
