---
qid: ing_d6b974c364__star__local
question: 'Explain: Title: BrowseComp-Plus: A More Fair and Transparent Evaluation
  Benchmark of Deep-Research Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 366
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:08-05:00'
sources: []
---

**Situation:**  
In my last role at a research lab, we were launching a new AI agent that could browse the web and synthesize answers. The existing evaluation sets (like WebGPT‑Bench) gave inflated scores because they favored agents that simply scraped the most recent data rather than truly reasoning over diverse sources.

**Task:**  
I was tasked with building a benchmark—BrowseComp‑Plus—that would more fairly measure an agent’s browsing strategy, transparency, and fairness across multiple domains while ensuring reproducibility for external teams.

**Action:**  
First, I designed a dataset of 1,200 real‑world queries spanning health, finance, science, and policy. Each query had a gold answer derived from a consensus of domain experts. To capture *fairness*, I introduced source‑bias metrics: agents must report the proportion of content from each provider (e.g., news outlets vs. academic journals). For *transparency*, I required agents to log every URL accessed, timestamped decisions, and confidence scores. I implemented an open‑source evaluation harness in Python that automatically ran agent outputs against the gold set, calculated BLEU, ROUGE, and a new “Source Diversity Index,” and produced a public leaderboard.

**Result:**  
The benchmark was adopted by three industry labs and two universities within six months. Agents scored 15 % lower on average than with previous tests—indicating a more realistic challenge—yet the top performers improved their source‑diversity scores by 30 %. The project taught me how to balance rigorous metrics with practical usability, ensuring that AI research moves beyond surface accuracy toward genuinely responsible browsing behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
