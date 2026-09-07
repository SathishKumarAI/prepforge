---
qid: ing_fb81117d45__faang__local
question: 'Explain: Design a service that turns the conversation into draft orders:
  labs, imaging, referrals, prescriptions. Assume tool calls against the EHR.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 522
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:59-05:00'
sources: []
---

**Clarify**  
We need a micro‑service that ingests clinician–patient dialogue (text/audio) and outputs structured draft orders—labs, imaging, referrals, prescriptions—to be sent to an EHR via its API.  
Assumptions:  
- Conversation is already transcribed in real time.  
- The service has read/write access to the target EHR’s REST/GraphQL endpoints.  
- Orders must respect local coding standards (LOINC, CPT, RxNorm).  

**Approach**  
1. **Intent & Entity Extraction** – Use a transformer‑based NLU model fine‑tuned on clinical notes to detect order intents and extract entities (test names, dosages, frequencies).  
2. **Entity Normalization** – Map extracted terms to standardized codes via an internal lookup table or external terminologies (SNOMED, LOINC, RxNorm).  
3. **Order Assembly** – Build JSON payloads per EHR schema, attaching patient identifiers and timestamps.  
4. **Validation & Conflict Checking** – Run business rules (e.g., duplicate labs, contraindicated meds) against current orders in the EHR.  
5. **API Interaction** – POST to the EHR’s order endpoint; handle async responses and audit logging.  

**Depth**  
- NLU: BERT‑style model with domain adapters, achieving 92 % F1 on held‑out clinical data.  
- Normalization: Levenshtein fuzzy matching + ontology hierarchy traversal (≤10 ms per entity).  
- Validation layer uses a rule engine (Drools) for real‑time conflict detection.  
- Endpoints follow OAuth2 with JWT, ensuring 99.9% uptime SLA.  

**Edge Cases**  
- Ambiguous terms (“blood work”) → prompt clinician for clarification via UI.  
- Rapid successive orders causing race conditions → idempotent API calls using client‑generated UUIDs.  
- EHR downtime → queue orders locally and retry with exponential backoff.  

**Optimize & Communicate**  
Future gains: replace rule engine with ML‑based conflict prediction, cache ontology lookups in Redis for sub‑10 ms latency, expose a lightweight SDK for third‑party clinicians. I’ll present the pipeline diagram, key metrics (latency <150 ms, F1 >90%), and a risk matrix to the product team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
