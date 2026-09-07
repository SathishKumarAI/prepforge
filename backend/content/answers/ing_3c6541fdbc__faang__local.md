---
qid: ing_3c6541fdbc__faang__local
question: Walk me through writing a finished note back into Epic. What goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 612
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:04:35-05:00'
sources: []
---

**Clarify**  
> “Writing a finished note back into Epic” – I’ll assume we’re talking about the *Epic Systems* EHR, specifically creating or updating an encounter‑note record (e.g., a progress note) via their FHIR/REST API or SOAP interface.  What do you want to persist? A new document in the patient’s chart? Or amending an existing one?  
> *Assumptions to confirm:*  
> - We have a valid OAuth token and necessary scopes (`clinical/note.write`).  
> - The note content is already rendered (e.g., HL7 CDA, FHIR Narrative).  
> - Epic version supports the API endpoint we plan to hit.  

**Approach**  
1. **Validate payload** – schema‑check against Epic’s Note definition.  
2. **Authenticate** – obtain bearer token via OAuth 2.0 client credentials or user auth.  
3. **Choose endpoint** – POST `/notes` for new, PUT `/notes/{id}` for update.  
4. **Send request** – include required headers (`Content-Type: application/json`, `Authorization`).  
5. **Handle response** – parse success (201/200), error codes (400, 401, 404).  
6. **Post‑process** – trigger any downstream workflows (e.g., billing, alerts).

**Depth**  
- *Payload example:*  

```json
{
  "patientId": "12345",
  "authorId": "67890",
  "noteType": "ProgressNote",
  "content": "<html>…</html>",
  "effectiveDateTime": "2026‑09‑06T10:00:00Z"
}
```

- *Complexity:* O(1) per note; network latency dominates.  
- *Trade‑offs:* FHIR vs SOAP – FHIR is lighter but may lack legacy integrations; SOAP offers richer metadata but higher overhead.

**Edge Cases**  
| Scenario | What can break? | Test strategy |
|----------|-----------------|---------------|
| Invalid auth token | 401 Unauthorized | Revoke token, retry with refresh |
| Duplicate note ID | 409 Conflict | Ensure idempotency key usage |
| Large content > limit | 413 Payload Too Large | Chunk upload or pre‑validate size |
| Network timeout | Partial write | Implement retries with exponential backoff |

**Optimize & Communicate**  
- Cache the OAuth token to reduce round trips.  
- Use bulk‑write batch endpoints if multiple notes are generated (Epic supports `/notes/bulk`).  
- Log each request/response for audit and debugging.  

*Summary:* By validating the note, authenticating properly, hitting the correct endpoint with a well‑formed payload, and handling all edge cases, we can reliably write finished notes into Epic while keeping the system robust and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
