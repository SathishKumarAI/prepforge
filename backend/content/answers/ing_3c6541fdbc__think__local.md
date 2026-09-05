---
qid: ing_3c6541fdbc__think__local
question: Walk me through writing a finished note back into Epic. What goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 603
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:47:41-05:00'
sources: []
---

### 1. Clarify the goal and constraints  
* **What is “writing a finished note back into Epic”?** – Is it an update to a patient’s progress note, a discharge summary, or a task comment?  
* **Which Epic module?** (Clinical Documentation, Patient Portal, Task List).  
* **User role & permissions.** Does the user have rights to edit that record?  
* **Integration method.** Are we using EHR APIs (e.g., FHIR), a custom interface, or manual copy‑paste?

### 2. Adopt a mental model of the data flow  
1. **Capture phase:** Note is written in a separate system or editor.  
2. **Transformation phase:** Convert to Epic’s required format (XML, JSON, HL7).  
3. **Transmission phase:** Push via secure channel (REST/HTTPS, FHIR endpoint).  
4. **Confirmation phase:** Receive success/failure response, log audit trail.

### 3. Step‑by‑step reasoning toward a robust solution  
1. **Validate the source note** for completeness and compliance with local policies (e.g., PHI formatting).  
2. **Map fields** from source to Epic: patient ID → MRN, date/time, author, content.  
3. **Construct payload** using Epic’s API schema; include mandatory tags (e.g., `encounterId`).  
4. **Authenticate** with OAuth2 or client certificates; handle token refresh.  
5. **Send request** to the appropriate endpoint (`/notes`, `/documents`).  
6. **Handle responses:** check HTTP status, parse error codes, retry logic for transient failures.  
7. **Log** all interactions for audit and troubleshooting.

### 4. Common traps to avoid  
* **Missing or mismatched identifiers** (MRN vs. patient ID).  
* **Improper authentication** → blocked requests or data leaks.  
* **Ignoring API limits** → throttling or bans.  
* **Assuming success on HTTP 200** – Epic may return a 200 with an error body.  
* **Not handling HL7/FHIR nuances** (e.g., date/time formats, coding systems).

### 5. Sanity‑check & communicate the plan  
1. **Walk through a test case** mentally: “I send a note for patient X; what do I expect?”  
2. **Ask for feedback** from an Epic integration specialist or documentation.  
3. **Explain the flow aloud** to a colleague—if they ask why we map field Y, you’ll spot gaps.  
4. **Document assumptions** (e.g., “Assumes OAuth2 token is valid”) so future readers know the limits.

By following this structured approach, you reduce surprises and ensure the note lands correctly in Epic without data loss or security issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
