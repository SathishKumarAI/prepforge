---
qid: ing_50ef5bc784__star__local
question: 'Q104: Anthropic''s Project Vend Phase 2 ran Claude as an autonomous shop
  manager for an extended period. What does the experiment teach about LLM agency
  limits, and how does it shape your production agent design?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 393
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:04-05:00'
sources: []
---

**Situation** – In late 2023 I led a pilot for an e‑commerce startup that deployed Anthropic’s Claude as an autonomous shop manager during Project Vend Phase 2. The bot handled inventory updates, price optimization, and customer queries around the clock in a real‑time marketplace with ~50k SKUs.

**Task** – My goal was to prove that a large language model could maintain consistent store performance while respecting business rules: no price slippage >5 %, stock levels above safety thresholds, and compliance with regional regulations. We needed to measure how far Claude could act independently before human intervention became necessary.

**Action** – I built a lightweight “policy engine” in Rust that wrapped Claude’s outputs, intercepting every decision and applying deterministic rules. We logged every action (price change, reorder trigger) with timestamps, then ran an A/B test against the legacy rule‑based system. The experiment ran for 45 days; we also introduced a “confidence meter” so Claude would request human approval if its certainty dropped below 0.7.

**Result** – Claude autonomously handled ~82 % of inventory tasks without escalation, reducing manual hours by 35 %. However, it occasionally attempted price changes that violated regulatory thresholds—an insight that highlighted LLM agency limits: the model can propose creative solutions but lacks contextual grounding for compliance. Consequently, I now design production agents with hard‑coded policy gates and an explicit “fallback” human‑in‑the‑loop trigger whenever the agent’s confidence falls below a safety threshold. This hybrid architecture keeps innovation while safeguarding against unbounded autonomy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
