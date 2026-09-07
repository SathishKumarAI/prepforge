---
qid: ing_7c08186135__faang__local
question: How would you evaluate a meeting-summarisation feature before shipping it
  to a hundred million users?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 504
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:37-05:00'
sources: []
---

**Clarify**  
*Goal:* Determine if the summarization tool delivers useful, accurate, and safe summaries at scale.  
*Assumptions to confirm:* (1) We have a labeled dataset of meeting transcripts ↔ gold summaries; (2) User traffic will be ~10⁸ daily sessions; (3) Latency budget ≤ 500 ms per request; (4) Privacy policy prohibits storing raw audio.

**Approach**  
1. **Define success metrics** – coverage, ROUGE‑L against human references, user engagement (click‑through on summary), NPS for satisfaction, and privacy compliance score.  
2. **Data pipeline & sampling** – Build a stratified sample of meetings by length, domain, and speaker count; run the model offline to generate candidate summaries.  
3. **Human evaluation loop** – Randomly select 1 k samples per month for expert reviewers to rate relevance, conciseness, correctness, and bias.  
4. **A/B testing at scale** – Deploy feature behind a flag to 1% of traffic; measure latency, error rates, and user feedback versus control.  
5. **Robustness checks** – Stress‑test with noisy audio, accents, and overlapping speech; run adversarial prompts to catch hallucinations.

**Depth**  
- *Algorithm:* Transformer encoder + pointer‑generator network fine‑tuned on meeting data (≈ 300M parameters).  
- *Complexity:* O(L²) per token for attention, but we use length‑reduction (chunking) to keep L≤512.  
- *Trade‑offs:* Larger model → better ROUGE but higher latency; we’ll cache embeddings and use quantization.

**Edge Cases**  
- Empty or extremely short transcripts → fallback “No content” message.  
- Sensitive topics → flag for human review before publishing summary.  
- High speaker count → ensure speaker attribution is preserved.

**Optimize & Communicate**  
Iterate on model size, beam width, and post‑processing heuristics; report metric trends in dashboards. Present findings with clear trade‑off tables to stakeholders, emphasizing that a 0.3 ROUGE gain justifies a 50 ms latency increase for the target user base. This structured loop guarantees we ship a reliable, privacy‑respectful summarizer ready for 100M users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
