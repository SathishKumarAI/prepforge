---
qid: ing_b840dc723a__aws__local
question: 'Explain: Clarifying questions & assumptions — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 444
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:47-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a “Meeting Assistant” that auto‑generates agendas, captures minutes, and surfaces action items for a global sales org (~10 k users). The challenge: deliver within 3 months while keeping costs under $200K.

**Action (Technical)**  
*Clarifying questions & assumptions*  
1. **Scope of content** – only spoken dialogue or also documents? → Assumed audio + meeting notes in Confluence.  
2. **Latency tolerance** – real‑time transcription acceptable? → Assumed < 5 s delay.  
3. **Compliance** – GDPR/CCPA retention? → Assumed 30‑day retention, encrypted storage.

*Design*  
- **AWS Transcribe (real‑time) → Amazon S3** for raw audio + metadata.  
- **Lambda + Amazon Comprehend** parses transcripts into intents and key phrases.  
- **Step Functions orchestrate**: agenda builder → minutes generator → ActionItem extractor → DynamoDB store.  
- **Alexa Skills Kit** for voice command interface.  

*Scalability & Availability* – Transcribe scales horizontally; Step Functions retries on failure (3×).  
*Cost* – Roughly 2 h/day of transcription ≈ $0.0045/h → <$100/month + $30/month for Lambda invocations.

**Result**  
Delivered MVP in 10 weeks, 25% faster meeting prep, and reduced follow‑up emails by **40%** (validated via Zendesk ticket volume).  

**Leadership Principles**  
- *Customer Obsession*: Asked the right questions to align with user needs.  
- *Ownership*: Took full responsibility for end‑to‑end architecture and post‑launch monitoring.  

**Bar‑raiser notes** – The answer shows ownership, dives deep into assumptions, quantifies impact, and reflects on learning (e.g., we later added a “no‑transcription” mode after user feedback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
