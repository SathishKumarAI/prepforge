---
qid: ing_8baf9bca2f__think__local
question: 'Explain: Step 5: Message Creation and Formatting — Design Notification
  Service | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 475
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:17:55-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The interview question is about *designing a notification service* (push/email/ SMS).  
- Assume: millions of users, high read‑through rates, real‑time delivery, multi‑channel support, and fault tolerance.  
- Scope: focus on message creation/formatting (step 5), not the entire pipeline.

**2️⃣ Mental model / framework**  
- **Layered architecture**: request → message builder → formatter → serializer → queue → worker → channel API.  
- Use *Strategy* pattern for different formats, *Template Engine* for content, and *Schema Registry* for versioning.

**3️⃣ Reason step‑by‑step**  
1. **Input**: event payload + user prefs.  
2. **Select template** based on event type & locale.  
3. **Populate placeholders** with dynamic data (user name, action details).  
4. **Apply formatting rules**: HTML for email, plain text fallback, JSON for push payloads.  
5. **Validate** against schema (e.g., required fields, size limits).  
6. **Attach metadata** (tracking ID, timestamps) and sign if needed.  
7. **Serialize** to the channel‑specific format (e.g., APNs JSON, FCM message).  
8. **Enqueue** with priority/TTL.

**4️⃣ Common traps to avoid**  
- Mixing business logic into formatting code.  
- Hard‑coding templates; forget i18n.  
- Ignoring size limits per channel (push payload caps).  
- Not validating before sending—leads to failures downstream.  
- Over‑complicating with micro‑services when a monolith suffices for this layer.

**5️⃣ Sanity‑check & communicate**  
- Walk through an example: “User X purchased item Y” → build email and push payloads, show placeholder replacement.  
- Highlight scalability: caching templates, async rendering.  
- Emphasize observability: log formatting failures, schema mismatches.  

This structured reasoning shows you can dissect the question, apply design patterns, avoid pitfalls, and clearly articulate each sub‑step in a real interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
