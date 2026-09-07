---
qid: ing_5cade0501f__faang__local
question: 'Explain: A user says "send Maya the photos from Saturday''s hike." Design
  the on-device path from that utterance to a structured app action with resolved
  parameters.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 493
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:19:00-05:00'
sources: []
---

**1️⃣ Clarify**  
*Restate:* The user wants an app‑level command: “Send Maya the photos from Saturday’s hike.”  
*Assumptions to confirm:*  
- “Maya” refers to a contact or chat thread.  
- Photos are stored locally (camera roll) and tagged by date/location.  
- No explicit photo selection—default is all relevant images.  
- User has granted camera‑roll and messaging permissions.

**2️⃣ Approach**  
1. **Speech → ASR → NLU** – transcribe, identify intent (`send_media`) and entities (`recipient=“Maya”`, `media_type=photo`, `time_filter="Saturday"`).  
2. **Entity resolution** – map “Maya” to a contact ID via the phone’s address book; resolve “Saturday” to a date range using calendar context.  
3. **Media query** – scan local media store for photos whose metadata (date, GPS) falls within that Saturday and optionally match hike‑related tags or location.  
4. **Action construction** – build an Intent/URLScheme (`message://send?to=contactID&media=[ids]`).  
5. **Execution** – launch the messaging app with prefilled content; prompt user for confirmation if needed.

**3️⃣ Depth**  
- **NLU model**: transformer‑based intent classifier + slot filler, fine‑tuned on conversational data.  
- **Entity resolver**: fuzzy matching for contacts, date parser using `chrono` library.  
- **Media selector**: query Core Data/Photos framework; complexity O(n) over photo count, cached indices reduce to O(log n).  
- **Security**: ensure user consent at every step; use sandboxed APIs.

**4️⃣ Edge Cases**  
- No photos found → show “No images from Saturday.”  
- Multiple contacts named Maya → ask for clarification.  
- User hasn’t granted photo access → prompt permission.  
- Time zone differences in “Saturday” parsing.

**5️⃣ Optimize & Communicate**  
- Cache recent media queries to speed repeat requests.  
- Log intent success/failure for telemetry.  
- In interview, narrate each step, justify API choices, and discuss fallback flows—demonstrating clear reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
