---
qid: ing_171eb221eb__star__local
question: 'Explain: Prompt injection: direct vs indirect — Safety Security And Responsible
  Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 332
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:06-05:00'
sources: []
---

**Situation** – In late‑2023 I was leading a chatbot feature for a fintech app that answered user queries via an LLM. The internal audit flagged potential security gaps: if a malicious user could inject commands, the bot might reveal sensitive data or execute unwanted actions.

**Task** – My goal was to harden the prompt handling pipeline so that direct and indirect injection attacks were mitigated without degrading user experience or adding latency beyond 200 ms per response.

**Action** – I first mapped the injection vectors: *direct* (users typing “/drop all tables”) and *indirect* (embedding malicious payloads in seemingly innocuous prompts like “Tell me a joke about your security team”). I then built a two‑tier filter. The first tier used a lightweight regex whitelist to strip disallowed tokens from user text, while the second tier employed a fine‑tuned classifier that scored prompt intent on a 0–1 scale; any score above 0.7 triggered a safe completion. We also sandboxed the LLM calls in isolated containers and logged all injected attempts for audit.

**Result** – After deployment, zero successful injection incidents were recorded over six months, and user‑reported latency increased by only 12 ms on average. The audit team praised the solution as “compliant with our Responsible AI framework.” I learned that layered filtering—combining regex, ML classification, and sandboxing—is essential for balancing safety, performance, and user trust in production LLM systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
