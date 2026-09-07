---
qid: ing_ad2e241d90__faang__local
question: 'Explain: Tell me about a time you disagreed with a researcher (or tech
  lead) about priorities, and what happened.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 428
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concrete example of a disagreement over *priorities* with a senior technical person, the resolution process, and the outcome. I’ll assume the conflict involved feature scope vs. research depth in an AI product.

**Approach**  
1. Pick a real incident where I advocated for a data‑driven MVP while the lead pushed for a cutting‑edge model.  
2. Structure the story with context → disagreement → evidence → compromise → result.  
3. Keep it concise (≈180 words) and use bullet points or markdown.

**Depth**  
- **Context:** 6‑month sprint on an image‑classification product; our team had a prototype but accuracy lagged by ~4%.  
- **Disagreement:** I argued to finish the MVP with a simpler CNN + transfer learning (quick delivery, lower compute). The lead insisted on experimenting with a transformer‑based backbone (higher potential accuracy but longer dev cycle).  
- **Evidence:** Showed benchmark charts from internal tests: simple model 85% vs. transformer 88%, but transformer required 3× GPU hours and a 2‑week code freeze.  
- **Compromise:** Proposed an incremental rollout: ship the CNN now, parallel research on transformers in a side branch with dedicated compute budget.  
- **Outcome:** MVP shipped 1 week early, hit adoption targets; later transformer integration improved accuracy to 91% without delaying release.

**Edge Cases**  
- What if the side‑branch stalled? I’d have contingency plans (fallback to baseline model).  
- If metrics didn’t improve, we’d revert to original plan.  

**Optimize & Communicate**  
I framed my data as business impact (time‑to‑market vs. accuracy gain), which resonated with both technical and product stakeholders. The lesson: use concrete metrics, propose a low‑risk path forward, and keep the conversation solution‑focused rather than positional.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
