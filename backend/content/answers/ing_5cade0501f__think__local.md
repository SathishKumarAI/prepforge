---
qid: ing_5cade0501f__think__local
question: 'Explain: A user says "send Maya the photos from Saturday''s hike." Design
  the on-device path from that utterance to a structured app action with resolved
  parameters.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 448
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:06:45-05:00'
sources: []
---

**1️⃣ Clarify intent & scope**  
   - *Assumption*: The user wants an image‑sharing app (e.g., “Maya” is a contact or group).  
   - *Clarify*: Is “Maya” a person, a device, or a specific app? Does the user want all photos from that date or a subset?

**2️⃣ Adopt a dialogue‑to‑action framework**  
   - **NLP Layer**: Intent → *SendPhotos*. Entity extraction → *Recipient = Maya*, *TimeFilter = Saturday’s hike*.
   - **Contextual Resolver**: Pull from calendar & photo metadata to map “Saturday’s hike” to the correct date and event.
   - **Parameter Builder**: Compile a list of matching media files, verify permissions.

**3️⃣ Step‑by‑step reasoning**  
   1. Tokenize utterance → identify verb “send”, object “photos”, temporal phrase “from Saturday's hike”.  
   2. Use NER to capture *Maya* as a contact and “Saturday” as a date reference.  
   3. Query local photo store for images tagged with that event or taken on that day.  
   4. Confirm user intent (e.g., ask “Sending X photos to Maya, correct?”).  
   5. Trigger the messaging or sharing API with resolved parameters.

**4️⃣ Avoid common pitfalls**  
   - Don’t assume “Maya” is always a contact; check app‑specific namespace first.  
   - Handle ambiguous dates (e.g., if today is Monday, “Saturday” could be past or future).  
   - Ensure privacy: request explicit permission before accessing photos.

**5️⃣ Sanity‑check & communicate**  
   - Log the resolved intent and parameters for debugging.  
   - Verbally confirm: *“I found 12 photos from Saturday’s hike. Sending them to Maya now.”*  
   - If no photos match, prompt with an alternative action (“Would you like to pick manually?”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
