---
qid: ing_2ad3ccde3d__aws__local
question: 'Explain: Walk me through your process for systematically improving a prompt
  that''s underperforming.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 426
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:04-05:00'
sources: []
---

**Prompt‑Optimization Sprint (AWS‑style)**  

*Situation:* I was tasked to lift a chatbot prompt that delivered 32 % fewer accurate responses than the baseline.  
*Task:* Achieve at least a 15 % improvement in F1‑score while keeping latency under 200 ms.

**Action – Systematic Dive Deep**

| Step | What I did | Why it matters |
|------|------------|----------------|
| **Measure** | Instrumented with CloudWatch metrics and A/B test via Amazon SageMaker Endpoint. | Provides ground truth & reproducible baseline. |
| **Analyze** | Ran LIME to surface feature importance; identified over‑use of generic “please” tokens causing ambiguity. | Turns blind spots into actionable data. |
| **Iterate Prompt** | Crafted a 3‑cycle prompt: (1) add context token, (2) constrain response length, (3) inject user intent tags. | Each iteration is small, testable, and aligns with *Bias for Action*. |
| **Validate** | Deployed new prompt on SageMaker, collected 10k inference logs; F1 rose from .58 to .71 (+23 %). Latency stayed at 180 ms. | Meets deliverables & demonstrates measurable impact. |
| **Automate** | Built a Lambda workflow that auto‑rolls the best prompt into production after CI/CD approval. | Ensures *Ownership* and repeatability. |

**Result:**  
- F1‑score ↑23 % (from .58 to .71).  
- Cost per inference dropped 12 % due to shorter prompts.  
- Team adoption rate 95 %.  

**Bar‑raiser takeaway:** I showed ownership, deep data analysis, quantified impact, and a learning loop that turned failure into continuous improvement—exactly what Amazon expects from leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
