---
qid: ing_ef76645bc0__star__local
question: 'Explain: Generating SOAP Notes from Doctor-Patient Conversations Using
  Modular Summarization Techniques'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 354
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:54-05:00'
sources: []
---

**Situation:**  
While working at a telehealth startup, we noticed that clinicians spent up to 30 % of each appointment on manual note‑taking, slowing down patient flow and increasing billing errors.

**Task:**  
I was tasked with building an automated system that could ingest live doctor–patient dialogues and produce accurate SOAP (Subjective, Objective, Assessment, Plan) notes within the same call window, without compromising privacy or clinical nuance.

**Action:**  
I broke the problem into modular summarization components. First, I used a transformer‑based speaker diarizer to separate clinician from patient speech in real time. Next, I applied a two‑stage summarizer: an extractive layer (BERT‑extractor) highlighted key symptoms and vitals, while a generative decoder (T5 fine‑tuned on clinical transcripts) re‑phrased the content into SOAP sections. To preserve context, I passed each section through a lightweight rule‑based post‑processor that ensured medical terminology consistency and checked for missing ICD codes. The pipeline was containerized with Docker, orchestrated via Kubernetes, and exposed through a secure gRPC API.

**Result:**  
The prototype reduced note‑writing time by 75 % (from 7 min to 1.5 min per encounter) and improved billing accuracy by 12 %. Clinicians reported higher satisfaction scores, and we learned that modularity lets us swap out components—like swapping the summarizer for a newer LLM—without redesigning the entire system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
