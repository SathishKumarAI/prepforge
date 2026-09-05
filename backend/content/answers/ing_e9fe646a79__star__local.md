---
qid: ing_e9fe646a79__star__local
question: 'Q44: When would you use Multi-Agent Debate vs Mixture of Agents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 336
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:19-05:00'
sources: []
---

**Situation**  
In the summer of 2023 I was leading a research sprint for a conversational AI product that needed to handle ambiguous user requests, like “Plan a weekend trip.” The internal evaluation framework required not just a single best response but a ranked set of options with clear trade‑offs.

**Task**  
I had to decide whether to employ Multi‑Agent Debate (MAD) or Mixture of Agents (MoA) to generate the candidate responses and then rank them efficiently under tight compute limits.

**Action**  
First, I benchmarked both techniques on a 1,000‑sample subset. MAD—where two agents argue back and forth with a judge—produced richer, more nuanced arguments but at 4× the inference time of MoA, which simply samples from several fine‑tuned policy heads in parallel. I added a lightweight “debate cost” metric to our pipeline: if the debate’s expected benefit (measured by BLEU gain over MoA) was below 0.05, we skipped it. We also tuned MoA’s temperature to broaden diversity without sacrificing quality. Finally, we integrated both into an A/B test harness that could switch modes per query type.

**Result**  
The hybrid pipeline cut inference latency from 1.2 s (pure MAD) to 0.6 s while maintaining a 12% higher user satisfaction score on the trip‑planning feature. I learned that combining cost‑aware decision rules with lightweight sampling often yields the best trade‑off between quality and speed in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
