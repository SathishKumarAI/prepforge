---
qid: ing_a4969c90bd__fp__local
question: 'Explain: Inpatient CDI delivered quietly—in the note, not after discharge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 389
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:19-05:00'
sources: []
---

**Why “inpatient CDI delivered quietly—in the note, not after discharge” must work**

The fundamental problem is *information loss*: clinicians finish a chart, leave it to coders who read only the final discharge summary, and miss subtle clinical nuances that affect diagnosis‑related group (DRG) assignment, quality metrics, or risk‑adjusted reimbursement. If we treat documentation as a *signal* that must be extracted before the patient leaves, we can apply an information‑theoretic principle: **maximizing mutual information between the true clinical state and the coded output**.  

Embedding CDI into the bedside note achieves this by providing real‑time prompts (e.g., “Did you observe X?”) that capture evidence as it is generated. The system learns from clinician responses, updates a probabilistic model of the patient’s condition, and recommends coding edits before discharge. This *online* optimization reduces post‑discharge back‑fill, aligns with workflow, and keeps clinicians in control—an essential geometric constraint: the CDI vector must lie within the manifold defined by the clinical narrative.

**Non‑obvious insight:** Silent integration turns the coder from a downstream “audit” role into an **interactive inference engine**. Because the prompts are embedded in the note, they are seen as part of the clinician’s routine, not an external audit, dramatically increasing adoption and accuracy—something most CDI programs miss by treating it as a separate post‑discharge task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
