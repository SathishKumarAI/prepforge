---
qid: ing_1124b8b6cb__star__local
question: 'Explain: Warning: LLMs can cheat — GitHub - anthropics/original_performance_takehome:
  Anthropic''s original performance take-home, now open for you to try! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 373
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:03-05:00'
sources: []
---

**Situation:**  
During a hackathon at my university we were asked to build an open‑source LLM evaluation suite in three days. The organizers warned that many public models could “cheat” by memorizing the test set and regurgitating it instead of genuinely reasoning.

**Task:**  
I had to design a pipeline that would reliably detect such cheating while still providing meaningful performance metrics for any model we ran against the benchmark.

**Action:**  
First, I parsed the official test data into token‑level segments and stored an MD5 hash of each segment. When a model answered a prompt, I compared its output hashes to the reference set; any exact match flagged a potential cheat. Second, I introduced a “prompt shuffling” layer that randomized the order of sub‑questions within each prompt, forcing models to recombine knowledge rather than simply copy. Third, I added a simple “reasoning chain” requirement: every answer had to include at least one intermediate inference step in natural language; if missing, the score was penalized. Finally, I instrumented the evaluation script with a confidence‑based weight so that high‑confidence but low‑novelty answers were downweighted.

**Result:**  
When we ran 12 different open‑source models, the pipeline flagged 3 models that had memorized >70 % of the test segments—those scores dropped by an average of 18 points. The remaining models saw a more realistic spread (55–82 % accuracy). I learned that combining hash checks with prompt perturbation and inference‑prompting is an effective guard against LLM cheating, and I now include this approach in every benchmark I run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
