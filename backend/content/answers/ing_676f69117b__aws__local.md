---
qid: ing_676f69117b__aws__local
question: 'Q: How do temperature and top-p affect generation?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 440
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:39-05:00'
sources: []
---

**Situation & Task**  
In my last role as ML Engineer at a fintech startup, we needed to expose an AI‑powered recommendation engine via an API that could be toggled between “creative” and “conservative” modes for compliance testing. The core challenge was understanding how *temperature* (controls randomness) and *top‑p* (nucleus sampling) affect the trade‑off between novelty and safety in generated text.

**Action**  
I built a lightweight SageMaker endpoint that accepts `temp` and `top_p` as query parameters. Using CloudWatch, I logged perplexity, token variance, and user‑reported correctness for each request. A/B tests showed:

| Mode | Avg. Tokens | Perplexity | Correctness % |
|------|-------------|------------|---------------|
| Creative (T=1.0, P=0.9) | 35 | 12.4 | 68 |
| Conservative (T=0.3, P=0.6) | 28 | 8.1 | 91 |

*Temperature*: Raising it from 0.3 to 1.0 increased token variance by ~2× but dropped correctness by ~23%.  
*Top‑p*: Lowering `p` from 0.9 to 0.6 reduced the tail probability, tightening outputs and boosting correctness by ~15%.

**Result**  
The API now lets product managers switch modes on demand with clear SLAs: 99.5 % latency under 200 ms (using Lambda for orchestration) and cost < $0.0003 per inference.  

**Reflection**  
This project exemplified *Customer Obsession*—we built a feature that directly improved compliance confidence—and *Dive Deep*, as we quantified the impact of hyper‑parameters on real user metrics, learning to balance creativity with safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
