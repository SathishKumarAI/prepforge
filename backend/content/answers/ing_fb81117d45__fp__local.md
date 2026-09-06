---
qid: ing_fb81117d45__fp__local
question: 'Explain: Design a service that turns the conversation into draft orders:
  labs, imaging, referrals, prescriptions. Assume tool calls against the EHR.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 391
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:42-05:00'
sources: []
---

**From utterance to actionable order**

At its core, the problem is *information extraction under uncertainty*. A clinician’s spoken intent (“order a chest CT for this patient”) is a noisy, unstructured signal that must be mapped to a precise EHR artefact: a lab test, imaging study, referral, or prescription.  

1. **Semantic grounding** – Build a probabilistic semantic graph where each token in the conversation links to an ontological concept (e.g., *CT chest* → `ImagingStudy`). The graph is weighted by contextual cues (patient age, diagnosis) and updated online via reinforcement from clinician corrections.

2. **Intent disambiguation** – Use a transformer‑based intent classifier that jointly predicts the order type and target resource, conditioned on patient data retrieved in real time from the EHR. This leverages *information bottleneck*: compress speech to the minimal representation that preserves ordering semantics.

3. **Constraint satisfaction** – Formulate an optimization problem: minimize the cost of incorrect orders while satisfying clinical constraints (e.g., drug interactions, imaging contraindications). The solution is a ranked list of draft orders; the top‑ranked item is auto‑populated in the EHR with pre‑filled fields.

4. **Feedback loop** – Every clinician approval or rejection updates the graph weights and intent model, turning the system into an online learning engine that converges to patient‑specific ordering patterns.

**Non‑obvious insight:** Treating the conversation as a *probabilistic program* rather than a simple lookup allows the service to reason about partial orders (“order a CBC but hold the differential”) and to propose alternative, clinically superior options when the speech is ambiguous. This proactive recommendation is what differentiates a reactive assistant from an intelligent ordering system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
