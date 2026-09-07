---
qid: ing_7b363dfea0__faang__local
question: 'Deadline pressure: do you spend the next two weeks on eval infrastructure
  or the feature itself? How have you actually made this call?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 416
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:47-05:00'
sources: []
---

**Clarify**  
We’re under a tight deadline and must decide: invest 2 weeks building a robust evaluation pipeline or jump straight into the feature that will deliver business value. Key assumptions:  
1. The feature is *new* and has no historical performance data.  
2. Evaluation will influence future iterations (e.g., model selection, bias checks).  
3. Stakeholders need a working demo within the deadline.

**Approach**  
1. **Impact‑value matrix** – estimate business value of a ready feature vs. long‑term ROI of a solid eval system.  
2. **Risk assessment** – quantify how much uncertainty (model drift, compliance) could cost if we skip evaluation.  
3. **Resource audit** – check if the same team can do both or needs parallel work.

**Depth**  
- If the feature directly drives revenue or user engagement (e.g., a recommendation engine), deliver it first and set up *quick sanity checks* (unit tests, A/B baseline).  
- Build an incremental eval stack: start with automated metrics (precision@k, latency) and a lightweight dashboard.  
- Use existing tooling (MLflow, TensorBoard) to avoid reinventing the wheel; allocate ~30% of time for this.

**Edge cases**  
- Regulatory or bias concerns could surface later—plan a “post‑launch audit” sprint.  
- If the feature is low‑stakes but evaluation uncovers critical insights, we risk missing that insight by delaying.

**Optimize & communicate**  
Explain to stakeholders: “We’ll ship a minimum viable feature in 2 weeks while concurrently laying the foundation for rigorous evaluation. This hybrid path delivers immediate business value and protects us from costly post‑release fixes.”  

This structured trade‑off balances short‑term delivery with long‑term quality, aligning with FAANG’s focus on impact, risk management, and scalable engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
