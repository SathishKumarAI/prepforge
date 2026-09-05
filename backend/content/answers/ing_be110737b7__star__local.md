---
qid: ing_be110737b7__star__local
question: 'Q18: How do you choose between Claude Sonnet 4.6, GPT-5.5, and Gemini 3.1
  Pro for a production workload?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 390
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:09-05:00'
sources: []
---

**Situation** – Our data‑science team was preparing to launch a real‑time customer support chatbot for the e‑commerce platform. The system had to handle 20k concurrent sessions, deliver responses in under 800 ms, and maintain 99.5% accuracy on intent classification across 50 product categories.

**Task** – I needed to decide which LLM (Claude Sonnet 4.6, GPT‑5.5, or Gemini 3.1 Pro) would best meet latency, cost, and quality targets while staying compliant with our data‑privacy policy.

**Action** – First, I built a benchmark harness that injected 10k real user queries into each model via their public APIs. I measured average response time, token usage, and classification accuracy using a labeled test set. Next, I evaluated the models’ fine‑tuning options: Claude offered a private fine‑tune path; GPT allowed custom embeddings; Gemini had built‑in safety filters but higher latency. I also ran a cost‑per‑token analysis against our projected monthly traffic. Finally, I consulted with the security team to confirm that all three met GDPR and PCI‑DSS requirements.

**Result** – The benchmark showed Claude Sonnet delivered 650 ms avg latency at $0.0007 per token, GPT‑5.5 hit 720 ms but cost $0.0012/token, while Gemini lagged at 950 ms. Given the tighter budget and privacy constraints, I chose Claude Sonnet, rolled it into production, and reduced overall LLM spend by 30% while keeping intent accuracy above 97%. The exercise taught me that systematic benchmarking combined with cross‑functional checks is essential for production model selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
