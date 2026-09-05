---
qid: ing_897cb96f90__star__local
question: 'Explain: Act I — Chatbots (when AI answers) — That Is Embarrassing: Why
  Frontier AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 309
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:06-05:00'
sources: []
---

**Situation**  
I was leading the rollout of a customer‑support chatbot for a fintech startup. Within the first week, users began reporting that the bot would generate nonsensical responses—like “Your account balance is 42 moons.” The engineering team flagged it as an embarrassing failure.

**Task**  
My job was to diagnose why the model kept hallucinating facts and implement a mitigation strategy so that every reply met compliance standards while keeping response times under 500 ms.

**Action**  
I started by instrumenting the LLM with a confidence‑scoring layer, using OpenAI’s `logprobs` API to capture token probabilities. I then built an “output filter” that cross‑checked any numeric or policy‑sensitive claim against our internal knowledge base via Elasticsearch. For low‑confidence passages, the bot would either ask for clarification or fall back to a static FAQ script. We also added a lightweight post‑processing step that flagged phrases containing “moon” or other non‑financial terms and routed them through a human review queue.

**Result**  
Within 48 hours we cut hallucinations from 35% of all replies to <1%, improved user satisfaction scores by 18 points, and kept latency within SLA. I learned that combining probabilistic confidence with deterministic knowledge‑base checks is essential when deploying generative AI in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
