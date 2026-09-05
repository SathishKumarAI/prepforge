---
qid: ing_b710a3a4fb__star__local
question: 'Explain: Proactiveness — AI Agents Explained - by Sairam Sundaresan and
  Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 365
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:18-05:00'
sources: []
---

**Situation** – At my previous startup we were building a virtual customer support agent for an e‑commerce platform that handled thousands of queries per hour. The existing reactive bot answered only when users typed a question, and our SLA was slipping from 95 % to 80 % because it couldn't anticipate user needs during peak traffic.

**Task** – I was tasked with designing a proactive AI component that could predict likely customer actions (e.g., cart abandonment) and initiate helpful prompts before the user had to ask for them, all while keeping latency under 200 ms and not overloading our GPU cluster.

**Action** – First, I integrated a lightweight TensorFlow Lite model on the edge to score each session in real time. Using event‑driven architecture (Kafka + Faust), the agent watched cart events and applied a Bayesian update to estimate abandonment probability. When that probability exceeded 0.75, the bot proactively offered a discount or a live chat link via WebSocket. I tuned the model with online A/B testing, balancing precision/recall so we avoided spammy prompts. To keep compute costs low, I used model quantization and scheduled inference during off‑peak hours.

**Result** – Within two weeks of rollout, cart‑to‑purchase conversion rose 12 % (from 18 % to 20 %) and the average support ticket volume dropped by 22 %. The proactive feature also reduced server load because fewer users had to trigger separate request cycles. I learned that combining lightweight on‑device inference with event‑driven orchestration can deliver real‑time proactiveness without compromising scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
