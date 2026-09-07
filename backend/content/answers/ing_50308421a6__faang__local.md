---
qid: ing_50308421a6__faang__local
question: Edit rate is the obvious measure of clinician trust. What does it hide,
  and what would you instrument instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 515
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:02-05:00'
sources: []
---

**Clarify**  
You’re asking why *edit rate* (how often clinicians change AI‑suggested actions) is a blunt metric for trust. We need to confirm:  
- Are edits always negative signals?  
- Do all edits carry the same weight (e.g., changing a dose vs. adding a note)?  
- What context (time pressure, patient severity) influences editing?

**Approach**  
1. Identify what edit rate masks (biases, noise).  
2. Define richer metrics that capture intent and quality.  
3. Instrument those metrics in the workflow.

**Depth**  
*What it hides:*  
- **Edit valence:** clinicians may *refine* rather than reject (e.g., tweak dosage).  
- **Decision latency:** a quick edit under pressure differs from a thoughtful one.  
- **Outcome impact:** some edits improve patient safety; others are neutral.  
- **Skill drift:** frequent editing could indicate learning or over‑reliance on the model.

*Instrument instead:*  
| Metric | Why it matters | Implementation hint |
|--------|----------------|---------------------|
| **Edit valence score** (positive/negative) | Distinguishes refinement vs. rejection | NLP on edit comments + rule‑based mapping |
| **Time‑to‑edit** | Measures cognitive load & trust | Timestamp diff between suggestion and edit |
| **Outcome delta** | Links edits to clinical outcomes | Cross‑reference EHR outcome flags post‑edit |
| **Model confidence threshold** | High‑confidence errors are more critical | Log model probability at suggestion time |
| **Clinician expertise flag** | Controls for skill level | User profile metadata |

These metrics together give a *trust landscape* rather than a single number.

**Edge cases**  
- Low‑volume clinicians: statistical noise; use Bayesian smoothing.  
- Rapid edits due to interface lag: separate UI latency from clinician intent.  
- Non‑textual edits (e.g., selecting a different drug): ensure event logging captures all modalities.

**Optimize & communicate**  
Start with the simplest composite score (edit valence + time) and iterate, adding outcome delta once data volume permits. Communicate findings by visual dashboards that show *trust heatmaps* per clinician and per patient cohort, enabling targeted UX or training interventions. This structured, multi‑metric approach aligns with FAANG’s emphasis on measurable impact and clear storytelling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
