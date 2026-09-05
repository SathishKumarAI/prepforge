---
qid: ing_d6671fa6d3__star__local
question: 'Explain: You have two days in our codebase and no assigned task. What do
  you build, and how do you spend the time? (The work-trial meta-question.)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 291
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:29-05:00'
sources: []
---

**Situation**  
I landed on a team with a monolithic Python codebase that had been growing for years. Documentation was sparse, and unit tests were almost non‑existent. I only had two days before the sprint review.

**Task**  
My goal was to surface technical debt that could derail future features while giving the team something tangible to demo by day’s end—ideally a reusable component or clear refactor roadmap.

**Action**  
I started with a quick static analysis using `pylint` and `radon` to identify high‑cyclomatic‑complexity modules. I then cherry‑picked the most critical service, wrote a minimal integration test suite with `pytest`, and extracted its core logic into a pure function library. While refactoring, I introduced type hints (`mypy`) and created a CI step that enforces linting and tests on every push. To demonstrate value, I built a small CLI wrapper around the new library so the demo team could run it locally.

**Result**  
By day’s end we had 30% of the legacy code covered by automated tests, 15% reduction in cyclomatic complexity for that service, and a clear PR with guidelines for future contributors. The team adopted the CI pipeline immediately, and I learned how to prioritize debt that offers the highest ROI in short bursts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
