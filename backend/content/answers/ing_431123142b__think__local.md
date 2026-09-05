---
qid: ing_431123142b__think__local
question: 'Explain: Privacy, consent, retention — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 373
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:03:06-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify who “Meeting Assistant” refers to (software tool or human).  
   - Assume it records audio/video and stores data for later retrieval.  
   - Decide what “privacy, consent, retention” mean in this context: user data protection, explicit permission, and how long data is kept.

**2️⃣ Adopt a mental model**  
   - Use the **Privacy Triangle**: *Data → Purpose → Retention*.  
   - Map each element to relevant regulations (GDPR, CCPA) and best‑practice guidelines.  

**3️⃣ Step‑by‑step reasoning**  
   1. *Privacy*: What data is captured? How is it encrypted in transit and at rest? Are metadata exposed?  
   2. *Consent*: When/where do users give consent? Is it opt‑in, granular (audio vs video), revocable?  
   3. *Retention*: Define retention periods per meeting type; justify why data must outlive the meeting.  
   4. Align each step with legal requirements and internal policy.

**4️⃣ Common traps to avoid**  
   - Assuming “anonymous” recordings automatically satisfy privacy laws.  
   - Over‑generalizing consent (e.g., one click for all meetings).  
   - Neglecting third‑party integrations that may inherit data.  

**5️⃣ Sanity‑check & communicate**  
   - Run a quick audit: does the assistant’s design cover each point?  
   - Explain in plain terms: “The assistant records only what you allow, stores it securely for X days, and deletes it automatically unless you keep it.”  
   - Invite user questions to confirm understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
