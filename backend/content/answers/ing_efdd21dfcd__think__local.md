---
qid: ing_efdd21dfcd__think__local
question: 'Explain: Here we use the RESTful API convention — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 455
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:51:58-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants a *thinking‑process* for explaining why RESTful APIs are used in designing a location‑based service like Yelp or Google Places.  
- Assume the reader knows basic HTTP, but not deep API design.  
- Focus on *why* REST fits (simplicity, scalability) rather than how to implement it.

**2️⃣ Pick a mental model**  
Use the **“Design Thinking + API‑First”** framework:  
1. Identify user goals → business requirements.  
2. Map resources (Places, Reviews, Users).  
3. Define CRUD operations as HTTP verbs.  
4. Apply REST constraints (statelessness, cacheable responses, uniform interface).

**3️⃣ Step‑by‑step reasoning**  
- **Step 1:** List core entities: `Place`, `Review`, `User`.  
- **Step 2:** Show endpoints → e.g., `GET /places/{id}`, `POST /reviews`.  
- **Step 3:** Explain HTTP verbs mapping to CRUD.  
- **Step 4:** Discuss resource URLs as nouns, not actions (REST principle).  
- **Step 5:** Highlight benefits: caching (`ETag`), scalability (statelessness), easy versioning (`/v1/…`).  

**4️⃣ Avoid common traps**  
- Don’t conflate REST with “just HTTP”; emphasize the architectural constraints.  
- Avoid over‑engineering: don’t add hidden verbs like `PUT /places/{id}/update`.  
- Don’t ignore pagination or rate limiting; mention them as practical extensions.

**5️⃣ Sanity‑check & communicate**  
- Quick mental test: can a client perform all CRUD ops with just GET, POST, PUT/PATCH, DELETE?  
- Speak in simple terms: “We expose data as resources so any client (mobile, web) can interact uniformly.”  
- End with a sentence tying back to the interview goal: “Using REST keeps the service modular and ready for horizontal scaling, which is exactly what interviewers look for in a location‑based system.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
