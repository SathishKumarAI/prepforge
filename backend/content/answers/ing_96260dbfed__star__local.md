---
qid: ing_96260dbfed__star__local
question: 'Explain: How do you evaluate a code-editing model before shipping it? Design
  the offline and online eval story for tab or agent edits.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 340
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:10-05:00'
sources: []
---

**Situation:**  
At my last company we were about to ship an AI‑powered code‑editing assistant that suggested refactorings in real time. The product had a tight launch window, and any regression could break our users’ workflow.

**Task:**  
I needed to design a comprehensive evaluation pipeline—both offline and online—to validate accuracy, safety, and performance before release.

**Action:**  
First, I built an offline test harness using a curated dataset of 15k real‑world commits. Each commit was split into “before” and “after” states; the model’s suggestions were scored against the ground truth using BLEU, edit distance, and a custom safety metric that flagged dangerous changes (e.g., dropping null checks). I also ran a stress test on GPU clusters to measure latency under concurrent users. For online evaluation, I set up an A/B split where 5% of live traffic saw the new model while the rest used the legacy editor. We collected click‑through rates, time‑to‑completion for refactor tasks, and user satisfaction via in‑app surveys. Feedback loops fed back into a nightly retraining pipeline.

**Result:**  
Offline metrics showed a 12% improvement in edit precision with no safety violations. Online A/B testing revealed a 23% reduction in task completion time and a 4-point increase on the satisfaction scale, while latency stayed under 200 ms. The launch went smoothly; post‑release monitoring confirmed sustained performance. I learned that coupling rigorous offline scoring with real‑user telemetry is essential for building trust in AI code assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
