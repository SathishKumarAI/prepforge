---
qid: ing_354ec6f67b__think__local
question: 'Explain: Time zone — How to Design a System for Internationalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 442
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:31:51-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Is the system only handling user‑visible times or also scheduling/cron jobs?  
   - Which data sources provide time stamps (DB, APIs, logs)?  
   - Are users in many regions or just a few?  
   - Do we need daylight‑saving support, leap seconds, or historical offsets?

**2. Adopt a mental model: “Store UTC + surface local”**  
   - Store all timestamps in UTC (or another canonical epoch).  
   - Keep the user’s time‑zone ID (e.g., `America/Los_Angeles`) and locale settings.  
   - Convert to local when rendering or scheduling.

**3. Step‑by‑step reasoning**  
   1. **Input handling** – Parse incoming times with an explicit zone or ask for it.  
   2. **Storage** – Convert to UTC, store the original string/zone for audit.  
   3. **Retrieval** – Fetch UTC + user’s zone; use a reliable TZ database (IANA).  
   4. **Display & logic** – Convert back to local using library functions (`pytz`, `dateutil`, `js‑Intl`).  
   5. **Edge cases** – Test DST transitions, leap seconds, and historical changes.

**4. Common traps to avoid**  
   - Storing naive datetime objects (no tz).  
   - Hard‑coding offsets (e.g., “-8”) instead of zone IDs.  
   - Mixing UTC with local without clear boundaries.  
   - Forgetting to update the TZ database; it changes yearly.

**5. Sanity‑check & communicate**  
   - Verify that a single event appears at the same instant for all users, just in their own time.  
   - Show sample conversion: `2024-09-05 12:00 UTC → 05:00 PST`.  
   - Explain why UTC is chosen (single source of truth) and how zone IDs solve DST/locale differences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
