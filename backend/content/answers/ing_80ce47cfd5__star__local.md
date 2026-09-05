---
qid: ing_80ce47cfd5__star__local
question: 'Explain: 🤝 Collaborating — GitHub - langwatch/langwatch: The platform for
  LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 329
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:58-05:00'
sources: []
---

**Situation**  
At my previous company we were building an internal chatbot that needed to be evaluated against multiple LLMs before deployment. Our metrics dashboard was lagging because we had no automated way to run the same tests across all models.

**Task**  
I was tasked with setting up a reproducible evaluation pipeline that could pull the latest model weights, run the same prompt set, and store results for analysis—all while keeping the process transparent for other data scientists on the team.

**Action**  
I forked the *langwatch/langwatch* repo and customized its YAML configuration to match our prompt library. Using GitHub Actions I created a workflow that triggered on every PR merge: it pulled the latest model from Hugging Face, executed the evaluation script in Docker, and pushed results back to a Google BigQuery table. I added a Slack notification step so teammates could see the pass/fail status instantly. To ensure reproducibility, I pinned all dependencies in a `requirements.txt` and used `poetry lock`.

**Result**  
The new pipeline cut our evaluation time from 12 hours down to 30 minutes per model set, enabling us to iterate on prompt design three times faster. The dashboard now displays real‑time accuracy, latency, and confidence scores for each LLM, and the team reports a 25 % reduction in post‑deployment bugs related to model mismatch. I learned that combining open‑source tools with CI/CD can dramatically accelerate AI product delivery while maintaining rigorous testing standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
