---
qid: ing_148cee04e0__aws__local
question: When does multi-agent beat single-agent, and when does it make things worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 469
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:24-05:00'
sources: []
---

**Situation (S)**  
In 2023 I led a cross‑functional team building an AI‑driven recommendation engine for a global e‑commerce platform. The baseline was a single‑agent model that processed user context and item features in one pass.

**Task (T)**  
We needed to decide whether adding a multi‑agent architecture—separate agents for browsing, purchase intent, and post‑purchase sentiment—would improve conversion rates or inflate latency and cost.

**Action (A)**  
1. **Dive Deep into data:** I ran A/B tests on 200k users with the single agent vs. a prototype multi‑agent system on AWS SageMaker Pipelines.  
2. **Design trade‑offs:**  
   * Single agent: 1 ms inference, 0.5 $ per month on an m6i.large instance.  
   * Multi‑agent: 4 parallel agents (each a lightweight PyTorch model) orchestrated via Step Functions; 8 ms total latency, 2 $ per month on t3.medium instances.  
3. **Metrics & Cost Analysis:** Conversion uplift was +1.3% vs. baseline (+0.7% with single agent). However, the cost‑per‑conversion increased by 45%, and the system’s availability dropped from 99.98% to 99.90% due to inter‑agent dependencies.

**Result (R)**  
I presented a *“Cost‑Benefit Threshold”* framework: multi‑agent only when expected lift >2% or when user sessions exceed 10 k/s. For the majority of traffic, we reverted to the single agent, saving $12K/month while maintaining 99.98% uptime. The learning loop—continuous monitoring and automated rollback via CloudWatch alarms—ensured ownership and rapid iteration.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Prioritized conversion impact for shoppers.  
- **Ownership & Dive Deep:** Took full responsibility, dissected performance metrics, and built a decision framework that balances benefit vs. operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
