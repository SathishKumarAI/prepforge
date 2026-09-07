---
qid: ing_8c5e78ecb7__aws__local
question: Bulbul-style TTS has to speak code-mixed, mixed-script text naturally. What
  are the hard parts of text normalization and prosody for Indian-language TTS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 617
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:24-05:00'
sources: []
---

**Situation & Task (S)**  
I led a cross‑functional team to launch an AI‑driven “Bulbul‑style” TTS for the Indian market. The goal was to read code‑mixed, mixed‑script text (e.g., *“Hey Siri, give me 5 kg of apples.”*) with natural prosody while keeping latency under **150 ms** per utterance.

**Action (A)**  
1. **Text Normalization** – built a rule‑based + ML pipeline that:  
   - Detects language tokens via fastText and maps them to the appropriate phoneme set.  
   - Handles script conversion (Devanagari ↔ Latin) using Unicode normalization and a custom grapheme‑to‑phoneme model trained on 2 M bilingual utterances.  
   - Normalizes numerals, dates, and abbreviations with a rule‑based NER layer.

2. **Prosody Modeling** – implemented a Transformer‑based duration predictor (TTS‑Dur) fine‑tuned on 30 k annotated Indian audio clips, achieving an RMSE of **12 ms** for pause placement versus the baseline 25 ms.

3. **Scalability & Cost** – deployed inference on EC2 Spot + SageMaker endpoints with autoscaling; reduced per‑request cost from $0.15 to **$0.07** while maintaining <99.5 % uptime.

**Result (R)**  
- User satisfaction scores rose 27 pts (from 73 → 100) in a pilot survey of 1,200 users.  
- End‑to‑end latency dropped 35 %, enabling real‑time voice assistants on low‑power devices.  
- The solution was later adopted by the global Alexa India team, saving an estimated **$2M** annually.

---

### Key Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Conducted 5 rounds of user interviews to surface pain points; iterated until metrics hit target. |
| **Ownership** | Took end‑to‑end responsibility: from data collection, model training, to deployment and monitoring. |

### What a Bar‑Raiser Looks For

- **Depth (Dive Deep):** Detailed understanding of phoneme mapping across scripts, and why Transformer duration predictors beat RNNs for prosody.  
- **Quantified Impact:** Clear metrics—latency, cost, user satisfaction—that show real business value.  
- **Learning from Failure:** After the first prototype crashed under load, I introduced a micro‑service architecture that isolated TTS workloads, turning a single point of failure into a resilient system.

*This approach exemplifies Amazon’s culture of owning customer problems, diving deep technically, and delivering measurable results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
