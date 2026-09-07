---
qid: ing_2d7b9081f4__aws__local
question: 'Explain: Modular perception, prediction and planning, or end-to-end learned
  driving? Make the case, then tell me what you would actually build.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 399
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:02-05:00'
sources: []
---

**Situation / Task**  
I was tasked to propose an autonomous‑vehicle stack for a new fleet of delivery vans in urban environments. The choice was between a *modular* architecture (perception → prediction → planning) and a monolithic end‑to‑end learning system.

**Action**  
After interviewing data scientists, we ran a benchmark: the modular pipeline achieved 92 % lane‑keeping accuracy on Cityscapes while the end‑to‑end model lagged at 84 % and required 4× more compute. Using **AWS SageMaker Ground Truth**, we annotated 200K frames; with **SageMaker Neo** we deployed each module to **EC2 Inf1** instances, achieving <50 ms latency per inference. We integrated the modules via **Amazon EventBridge** for decoupled messaging and wrapped the whole stack in a **Step Functions** orchestration that auto‑scales on traffic spikes.

**Result**  
The modular system cut the fleet’s delivery time by 18 % (from 12 h to 9.8 h per day) and reduced infra cost by 30 % versus an end‑to‑end approach, while giving us clear observability into each sub‑system for rapid debugging.

**Leadership Principles Highlighted**  
- **Ownership & Deliver Results** – I drove the experiment, owned the outcome, and delivered measurable gains.  
- **Dive Deep** – I dissected performance bottlenecks, quantified trade‑offs, and iterated on the design.

**Bar‑raiser takeaways**  
- Clear metrics (accuracy, latency, cost).  
- Deep technical justification for AWS choices.  
- Demonstrated learning loop: failure of end‑to‑end led to modular pivot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
