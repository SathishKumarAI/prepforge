---
qid: ing_11c0baa154__star__local
question: 'Explain: Common Mistakes and Anti-Patterns — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 310
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:16-05:00'
sources: []
---

**Situation** – In my last role I led a sprint to build an AI‑powered code‑review bot that pulled from GitHub, ran static analysis, and suggested fixes. The product owner wanted “auto‑fix” features so the bot could push changes automatically.

**Task** – My goal was to deliver a safe, maintainable tool agent that integrated with CI/CD without breaking developers’ workflow or introducing security holes.

**Action** – I first mapped out the state machine: fetch PR → analyze → generate diff → present to reviewer. Instead of letting the bot auto‑commit, I added a “review queue” step and built an audit log for every change suggestion. We used OpenAI’s Codex API wrapped in a sandboxed Docker container, and we added rate limiting and prompt‑engineering to avoid hallucinations. I also introduced unit tests that run against the generated patches before they hit staging.

**Result** – The bot reduced manual review time by 35 % (from 45 min to 29 min per PR) while keeping a 0 % merge error rate. I learned that the biggest anti‑pattern is giving agents too much autonomy; instead, keep them in the loop with clear checkpoints and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
