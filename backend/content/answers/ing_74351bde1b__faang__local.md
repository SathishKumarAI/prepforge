---
qid: ing_74351bde1b__faang__local
question: 'Explain: The note should be ready before the clinician leaves the room.
  Build me the latency budget, and tell me where the money goes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 570
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:38-05:00'
sources: []
---

**Clarify**  
You want a real‑time AI assistant that delivers a patient note before the clinician exits. Key assumptions:  

* Clinician stays ~3 min per encounter.  
* Note must be complete, clinically relevant, and HIPAA‑compliant.  
* System runs on an edge device (tablet) with intermittent cloud connectivity.  

**Approach**  
1. Capture audio → speech‑to‑text (STT).  
2. Parse text → intent & entity extraction.  
3. Generate structured note (templates + free‑form).  
4. Store locally, sync to EMR when bandwidth permits.  

Allocate the 180 s window across components:  

| Stage | Target Latency | Notes |
|-------|----------------|-------|
| STT | 30 s | 16 kHz audio chunking, model size ~300 MB |
| NLP (entity/intent) | 40 s | Lightweight transformer (~50 M params) |
| Note synthesis | 25 s | Rule‑based + GPT‑lite for free text |
| Local storage & sync | 5 s | Encrypted SQLite DB |
| Overhead / safety buffer | 20 s | Error handling, retries |

**Depth**  
- **STT**: use a quantized Wav2Vec model; batch every 10 s to reduce CPU load.  
- **NLP**: fine‑tuned BERT‑small on clinical data; confidence thresholds trigger clarifications.  
- **Synthesis**: combine template slots with GPT‑mini (≈30 M params) for narrative portions, ensuring token limits keep inference <25 s.  

Complexity: O(n) per sentence; total memory ≈1–2 GB peak. Trade‑off between model size and latency – a larger model improves accuracy but pushes the budget.

**Edge cases**  
- Noisy environment → fallback to acoustic gating, pause detection.  
- Connectivity loss → local write‑ahead queue.  
- Ambiguous input → clinician prompt via UI before note finalization.

**Optimize & communicate**  
- Profile each stage; replace transformer with distillation if bottlenecked.  
- Use async pipelines so STT can run while NLP processes previous chunk.  
- Communicate progress to clinician (e.g., “Note drafting…”) to manage expectations.  

By segmenting the 180 s budget and selecting lightweight, quantized models, we keep the system within latency constraints while allocating most of the "money" (compute resources) to high‑impact NLP stages that directly influence note quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
