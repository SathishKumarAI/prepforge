---
qid: ing_a72bb3004c__think__local
question: The VP saw a flawless demo and now expects 100% accuracy in production.
  How do you manage that expectation without killing the deal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 433
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:05:32-05:00'
sources: []
---

**1. Clarify & State Assumptions**  
- *What is “flawless” for the VP?*  Is it 100 % precision, recall, or just a smooth demo run?  
- *Which metrics matter in production?*  Real‑world data, drift, latency, and cost.  
- Assume the demo used curated data and controlled conditions; real deployments will differ.

**2. Mental Model: Expectation‑Alignment Framework**  
1. **Reality Check** – contrast demo vs. production environment.  
2. **Value Focus** – highlight business impact (ROI, risk reduction) over raw accuracy.  
3. **Iterative Delivery** – propose phased roll‑outs with measurable milestones.

**3. Step‑by‑Step Reasoning**  
- Explain that 100 % accuracy is statistically impossible for complex AI; even the best models plateau below 100 %.  
- Show evidence: industry benchmarks, your own validation curves, and how marginal gains beyond a certain point are outweighed by cost/complexity.  
- Present a realistic target (e.g., “95 % precision with 99 % recall”), tying it to the VP’s KPIs.  
- Outline a continuous improvement loop: monitoring, retraining, A/B testing, and user feedback.

**4. Common Traps to Avoid**  
- *Over‑promising*: Don’t promise perfection just to win the deal.  
- *Under‑communicating risk*: Failing to explain why errors happen can erode trust later.  
- *Neglecting stakeholder language*: Use business terms, not just technical jargon.

**5. Sanity‑Check & Communicate Out Loud**  
- Re‑read your plan as if you’re the VP: Does it address their core concern?  
- Summarize in one sentence: “We’ll deliver a model that reliably meets your performance goals with ongoing refinement, ensuring business value without overpromising perfection.”  
- Ask for feedback to confirm alignment and adjust accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
